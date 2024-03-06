import React from 'react';
import { Text, Image, View, FlatList } from 'react-native';
import styles from './DispensariesIndexStyles'; // Import StyleSheet
import disp1Img from "../assets/dis1.png"
import disp2Img from "../assets/dis2.png"

const DispensariesItem = ({disObject}) => {



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