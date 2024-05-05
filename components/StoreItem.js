import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './StoreItemStyles'

const StoreItem = ({name, description, price}) => {
    return (
        <TouchableOpacity style={styles.item}>
            <View style={styles.itemColumns}>
                <Text style={styles.itemTitle}>{name}</Text>
                <Text style={styles.itemDescription}>{description}</Text>
                <Text style={styles.itemPrice}>${price}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default StoreItem;