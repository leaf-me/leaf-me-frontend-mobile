import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useContextProvider } from '../Providers/Provider';
import { getUsersOrders } from '../components/Functions.js'
import OrdersItem from '../components/ordersItem.js';

const Orders = () => {
    const { userID } = useContextProvider()
    const [completeOrders, setCompleteOrders] = useState(null)
    const [pendingOrders, setPendingOrders] = useState(null)

    /* EXAMPLE ORDER OBJ
     {"client_user_id": 1, "dispensary_id": 1, "id": 66, "status": "NEW", "total": "541.47"}
    */

    // Helpers
    const fetchUsersOrders = async (userID) => {
        const orders = await getUsersOrders(userID)
        // now sort
        sortOrdersByCompleteOrOther(orders)
    }
    const renderItem = ({item}) => {
        return (
            <OrdersItem clientUserID={item.client_user_id} dispensaryID={item.dispenary_id} itemID={item.id} status={item.status} total={item.total} />
        )
    }
    const sortOrdersByCompleteOrOther = (orders) => {
        const tempCompleteOrders = orders.filter((order)=> order.status === "COMPLETE" )
        const tempPendingOrders = orders.filter((order)=> order.status !== "COMPLETE")
        console.log('\nsortOrdersByCompleteOrOther\ncomplete Orders:\n',tempCompleteOrders,'\nPending Orders:\n',tempPendingOrders)
        setCompleteOrders(tempCompleteOrders)
        setPendingOrders(tempPendingOrders)


    }

    // Hooks
    useEffect(() => {
        fetchUsersOrders(userID)
    },[userID])

    // Logic

    return (
        <View>
            <Text>Pending Orders</Text>
            {
                pendingOrders ?
                <FlatList
                data={pendingOrders}
                renderItem={renderItem}
                keyExtractor={(pendingOrder)=> pendingOrder.id }
                />
                : <Text>None</Text>
            }
            <Text>Complete Orders</Text>
            {
                completeOrders ?
                <FlatList
                data={completeOrders}
                renderItem={renderItem}
                keyExtractor={(completeOrder)=> completeOrder.id }
                />
                : <Text>None</Text>
            }
        </View>
    );
};

export default Orders;