import React from 'react';
import { View, Button, Text } from 'react-native';

const StoreItemQuantity = ({quantity, onQuantityChange}) => {

    const handleIncrement = () => {
        onQuantityChange(quantity++)
    }

    const handleDecrement = () => {
        if(quantity > 1){
            onQuantityChange(quantity--)
        }
        
    }

    return (
        <View>
            <Button title="-" onPress={handleDecrement} />
            <Text>{quantity}</Text>
            <Button title="+" onPress={handleIncrement} />
        </View>
    );
};

export default StoreItemQuantity;