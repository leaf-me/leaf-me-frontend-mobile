import React from 'react';
import { Text, Image, View, FlatList } from 'react-native';
import styles from './DispensariesIndexStyles'; // Import StyleSheet

const DispensariesItem = ({disObject}) => {

    // going to turn this into a clickable button
    // on click link to dispensaryShow component
    // dispensaryShow takes the disObject as a prop then renders the rest of the data needed to show on the show page.



    return (
        <View style={styles.dispensaryCardDetails}>
            <Text style={styles.title}>{disObject.name}</Text>
            <Text style={styles.title}>{disObject.address}</Text>
            <Text style={styles.title}>{disObject.deliveryfee}</Text>
            <Text style={styles.title}>{disObject.image}</Text>
            <Text style={styles.title}>{disObject.ratingname}</Text>


        </View>

    );
};

export default DispensariesItem;