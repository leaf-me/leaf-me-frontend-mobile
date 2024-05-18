import React from 'react';
import { View, Text } from 'react-native';
import BasketItemQuantity from './BasketItemQuantity';
import styles from './BasketItemStyles'
import { useState, useEffect } from 'react';
const BasketItem = ({basketId, id, quantity, storeItemID, name, price}) => {
    const [quantityState, setQuantityState] = useState(1)
    const [subtotalState, setSubtotalState] = useState(0)

    useEffect(()=> {
        setQuantityState(quantity)
    },[quantity])

    useEffect(() => {
        setSubtotalState(price * quantityState)
    },[quantityState])


    const handleQuantityChange = (newQuantity) => {
        setQuantityState(newQuantity)
    }

    return (
        <View style={styles.container}>
            {/* column 1, containing the item's name */}
            <View style={styles.column1}>
                <Text style={styles.name}>{name}</Text>
            </View>
            {/* column 2, containing the quantity buttons + items price*/}
            <View style={styles.column2}>
                <BasketItemQuantity quantity={quantityState} onQuantityChange={handleQuantityChange}></BasketItemQuantity>
                <Text style={styles.price}> ${(subtotalState).toFixed(2)}</Text>
            </View>
        </View>
    );
};

export default BasketItem;