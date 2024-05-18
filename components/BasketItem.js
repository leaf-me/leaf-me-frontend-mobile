import React from 'react';
import { View, Text } from 'react-native';
import BasketItemQuantity from './BasketItemQuantity';
import styles from './BasketItemStyles'
import { useState, useEffect } from 'react';
import { useUserContext } from '../Providers/UserProvider.js';

const BasketItem = ({basketId, id, quantity, storeItemID, name, price}) => {
    const { totalItems, subtotal, setSubtotal, setTotalItems } = useUserContext()
    const [quantityState, setQuantityState] = useState(1)
    // this subtotal state is to temporaily render the price * quantity
    const [subtotalState, setSubtotalState] = useState(0)
    
    // when the quantity from the req comes in, store it in state so we can temporaily edit it
    useEffect(()=> {
        setQuantityState(quantity)
    },[quantity])

    useEffect(() => {
        setSubtotalState(price * quantityState)

        // take the subtotal string
        // transform into number
        // const convertToNumber = (str) => {
        //     return parseFloat(str.replace('$', ''));
        //   };
        //   const subtotalNumber = convertToNumber(subtotal)
            const subtotalWithoutSymbol = subtotal.replace('$','')
            console.log(subtotalWithoutSymbol)
            const subtotalNumber = parseFloat(subtotalWithoutSymbol)
            console.log('Num:',subtotalNumber)
            const newSubtotal = subtotalNumber + subtotalState
            const newSubtotalStr = `$${newSubtotal.toFixed(2)}`
        
        // on quantityState change, update the subtotal by adding the change from the current basketitem price to the subtotal
        
        console.log(subtotal, subtotalState)
        setSubtotal(newSubtotalStr)
    },[quantityState])


    const handleQuantityChange = (newQuantity) => {
        if(newQuantity > quantityState){
            setTotalItems(totalItems + 1)
        } else {
            setTotalItems(totalItems - 1)
        }
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