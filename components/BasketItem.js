import React from 'react';
import { View, Text } from 'react-native';
import styles from './BasketItemStyles'

const BasketItem = ({basketId, id, quantity, storeItemID, name, price}) => {
    return (
        <View style={styles.container}>
            {/* column 1, containing the item's name */}
            <View style={styles.column1}>
                <Text style={styles.name}>{name}</Text>
            </View>
            {/* column 2, containing the quantity buttons + items price*/}
            <View style={styles.column2}>
                <Text>Quantity Control Here</Text>
                <Text style={styles.price}> ${(price * quantity).toFixed(2)}</Text>
            </View>
        </View>
    );
};

export default BasketItem;