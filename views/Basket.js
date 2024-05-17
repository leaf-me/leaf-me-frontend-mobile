import React from 'react';
import { View } from 'react-native';
import BasketIndex from '../components/BasketIndex';
import { useUserContext } from '../Providers/UserProvider.js';

const Basket = () => {
    const { basketItems } = useUserContext()
    if( basketItems ){
        console.log('\nbasketItems:\n',basketItems)
    } else {
        console.log('basket items undefined')
    }

    return (
        
        <View>
            <BasketIndex/>
        </View>
    );
};

export default Basket;