import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './BasketIndexStyles'
import { useUserContext } from '../Providers/UserProvider.js';
import BasketItem from './BasketItem.js';

const BasketIndex = () => {
    const { basketItems } = useUserContext()

    const renderItem = ({item}) => (
        <BasketItem basketId={item.basket_id} id={item.id} quantity={item.quantity} storeItemID={item.store_item_id} />
    )

    // console.log(basketItems)

    return (
        <View style={styles.container}>
            {
                basketItems ? (
                    <FlatList
                    data={basketItems}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    />
                ) : (
                    <Text>Loading</Text>
                                )
            }      
        </View>
    );
};

export default BasketIndex;