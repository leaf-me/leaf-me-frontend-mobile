import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './StoreItemShowCartButtonStyles'
import { checkIfCurrentUserHasBasket, createNewBasket, populateBasketWithStoreItem } from './Functions';


const StoreItemShowCartButton = ({name, price, id,userID}) => {

    const handlePress =  async () => {

        // check if user has basket
        const usersBasketID = await checkIfCurrentUserHasBasket(userID)
        console.log('storeItemShow handlePress - return for checkIfCurrentUserHasBasket:',returnRes)

        if(true){

        }
        
    }

    return (
        // <Button title={`Add ${name} to Cart ($${price})`} onPress={handlePress}/>
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Text style={styles.buttonText}>
                Add {name} to Cart ({price})
            </Text>
        </TouchableOpacity>
    );
};

export default StoreItemShowCartButton;