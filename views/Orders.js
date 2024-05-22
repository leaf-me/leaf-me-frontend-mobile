import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useContextProvider } from '../Providers/Provider';
import { getUsersOrders } from '../components/Functions.js'

const Orders = () => {
    const { userID } = useContextProvider()
    const [userOrders, setUserOrders] = useState([])

    // Helpers
    const fetchUsersOrders = async (userID) => {
        const orders = await getUsersOrders(userID)
        setUserOrders(orders)
        // console.log('userOrders:',userOrders)
    }

    // Hooks
    useEffect(() => {
        fetchUsersOrders(userID)
    },[userID])

    // Logic

    return (
        <View>
            
        </View>
    );
};

export default Orders;