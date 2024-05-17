import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './BasketIndexStyles'
import { useUserContext } from '../Providers/UserProvider.js';
import BasketItem from './BasketItem.js';
import BasketIndexSubheader from './BasketIndexSubheader.js';
import Separator from './Separator.js';

const BasketIndex = () => {
    const { basketItems } = useUserContext()

    const renderItem = ({item}) => (
        <BasketItem basketId={item.basket_id} id={item.id} quantity={item.quantity} storeItemID={item.store_item_id} name={item.name} />
    )

    // console.log(basketItems)

    return (
        <View style={styles.container}>
            {/*items + subtotal component */}
            <BasketIndexSubheader/>
            {/*seperator component */}
            <Separator/>
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