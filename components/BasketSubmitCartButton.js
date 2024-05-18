import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useUserContext } from '../Providers/UserProvider';
import styles from './BasketSubmitCartButtonStyles';

const BasketSubmitCartButton = () => {
    const { basketItems } = useUserContext()
    // console.log(styles)
    // height is 75
    // width is 300



    const handleSubmit = () => {

    }


    return (
        <TouchableOpacity style={styles.container} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit Order</Text>
        </TouchableOpacity>
    );
};

export default BasketSubmitCartButton;