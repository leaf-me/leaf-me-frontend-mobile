import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './StoreItemShowCartButtonStyles'

const StoreItemShowCartButton = ({name, price, id}) => {

    // when user presses add cart
    // peform API post to basket
    // populate the basket of the current user
    // navigate to the last screen

    const handlePress = (e) => {
        
    }

    return (
        // <Button title={`Add ${name} to Cart ($${price})`} onPress={handlePress}/>
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Text style={styles.buttonText}>
                Add {name} to Cart ({price})
            </Text>
        </TouchableOpacity>
    );
};

export default StoreItemShowCartButton;