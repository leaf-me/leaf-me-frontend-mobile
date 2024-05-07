import React from 'react';
import { Button } from 'react-native';

const StoreItemShowCartButton = ({name, price, id}) => {

    // when user presses add cart
    // peform API post to basket
    // populate the basket of the current user
    // navigate to the last screen

    const handlePress = (e) => {
        
    }

    return (
        <Button title={`Add ${name} to Cart ($${price})`} onPress={handlePress}/>
    );
};

export default StoreItemShowCartButton;