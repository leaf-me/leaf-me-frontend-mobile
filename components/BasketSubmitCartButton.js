import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useUserContext } from '../Providers/UserProvider';
import styles from './BasketSubmitCartButtonStyles';
import { useContextProvider } from '../Providers/Provider';
import {  postSingleOrder, postBatchOrder, postOrderStoreItem, sortBasketItemsByDispensary } from './Functions.js'

const BasketSubmitCartButton = () => {
    const { userID } = useContextProvider()
    const { basketItems } = useUserContext()
    // const [batchOfOrders, setBatchOfOrders] = useState([])
    console.log('basket function user', userID)

    const handleSubmit = async () => {

        // preparing order object
        let orderInfo = {
            total: null, // not needed, need to update function's jsdocs
            status: 'NEW',
            client_user_id: userID,
        }

        // sorting basket Items 
       let orders = await sortBasketItemsByDispensary(basketItems, orderInfo)
       if(orders.length > 1 && !(orders.length <= 0)){
        const result = await postBatchOrder(orders, userID)
        console.log(result.data)
       } else if (!(orders.length <=  0)){
        let dispensaryID = orders.items[0].dispensary_id
        const responseOrder = await postSingleOrder(orders)
        let orderID = responseOrder.data.id
        const responeStoreItem = await postOrderStoreItem(orders, orderID, userID)
        console.log(responeStoreItem)
       }
    }


    return (
        <TouchableOpacity style={styles.container} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit Order</Text>
        </TouchableOpacity>
    );
};

export default BasketSubmitCartButton;