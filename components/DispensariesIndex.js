import React from 'react';
import { View, FlatList } from 'react-native';
import { useDisProvider } from '../Providers/DispensariesProvider.js';
import { useContextProvider } from '../Providers/Provider.js';
import { Text } from 'react-native';
import { v4 as uuidv4 } from "uuid";
import styles from './DispensariesIndexStyles.js'; // Import the StyleSheet

// map and render data

const DispensariesIndex = () => {
    const { userID, API, authToken } = useContextProvider()
    const { dispensaries } = useDisProvider() 

    console.log(dispensaries)


    const Item = ({name, address, deliveryfee,}) => ( 
        <View style={styles.item}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{address}</Text>
            <Text style={styles.title}>{deliveryfee}</Text>
        </View>
    )

    const renderItem = ({item}) => (
        <Item name={item.name} address={item.address} deliveryfee={item.deliveryfee}/>
    )

    /**
     * 
     * {"address": "123 Main St", "deliveryfee": "5.99", "id": 1, "image": "image1.jpg", "latitude": "40.712800", "longitude": "-74.006000", "maxdeliverytime": 60, "mindeliverytime": 30, "name": "Dispensary 1", "rating":
     */
    return (
        <View style={styles.container}>
            {dispensaries && (
                <FlatList
                data={dispensaries}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                />
            )}

            
            
        </View>
    );
};   

export default DispensariesIndex;