import React from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import styles from './BasketItemQuantityStyles'
import { deleteOneBasketStoreItem } from './Functions';
import { useUserContext } from '../Providers/UserProvider';

const BasketItemQuantity = ({quantity, onQuantityChange, basketInfo}) => {
    const { toggleRerenderFlag, handleRemoveBasketItem, basketItems, triggerRerenderFlag } = useUserContext()

    const handleIncrement = () => {
        onQuantityChange(quantity + 1)
    }

    const handleDecrement = () => {
        if(quantity > 1){
            onQuantityChange(quantity - 1)
        } else if (quantity == 1){
            console.log('DELETE THIS basketITEM',basketInfo)
            deleteOneBasketStoreItem(basketInfo.basketStoreItemID, basketInfo.userID, basketInfo.basketID)
            onQuantityChange(quantity - 1)
            // remove basketStoreItem from state to reflect on FE
            handleRemoveBasketItem(basketInfo.basketStoreItemID, basketItems)
            toggleRerenderFlag(triggerRerenderFlag)
            // toggleRerenderFlag()

        }
        
    }

    // console.log('styles',styles)

    return (
        <View style={styles.container}>
            <View style={quantity == 1 ? styles.buttonDecZero: styles.buttonDec}>
                <TouchableOpacity style={styles.buttonDec} onPress={handleDecrement}>
                    <Text style={quantity == 1 ? styles.buttonTextDecZero: styles.buttonTextDec}>{quantity == 1 ? '🗑': '-'}</Text>
                </TouchableOpacity>
            </View> 
            <Text style={styles.quantityCount}>{quantity}</Text>
            <View style={styles.incContainer}>
                <TouchableOpacity style={styles.buttonInc} onPress={handleIncrement}>
                    <Text style={styles.buttonTextInc} >+</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    );
};

export default BasketItemQuantity;