import React from 'react';
import { View } from 'react-native';
import { useContextProvider } from '../Providers/Provider';
import { useUserContext } from '../Providers/UserProvider';

const Orders = () => {
    const { API, axios } = useContextProvider()
    const { userID } = useUserContext()

    console.log(API,axios,userID)

    return (
        <View>
            
        </View>
    );
};

export default Orders;