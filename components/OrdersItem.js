import React,{useEffect, useState} from 'react';
import { View , Text, Image } from 'react-native';
import { getOneDispensary } from './Functions';
import styles from './OrdersItemStyles.js'


const ordersItem = ({clientUserID, dispensaryID, orderID, status, total, storeItemsDictionary}) => {
    const [dispensary, setDispensary] = useState({})
    const defaultImage = require('../assets/weeddefault.png')
    let orderItem = {}

    // retrieve the dispensary's info (title, image)
    useEffect(() => {


    },[])
 
    // retrieve further details about the item via reference to storeItems
    // condense all vars into one single object for easy reference  
    useEffect(()=> {
        orderItem = {
            orderID: orderID,
            userID: clientUserID,
            disName: dispensaryID,
            status: status,
            total: total
        }
    },[orderID])
    return (
        <View style={styles.aContainer}>
            {/* <Text>hi</Text> */}
            <View style={styles.aColumn1}>
                <Image style={ {width: 50, height: 50, borderRadius: 25}} source={defaultImage}></Image>
            </View>
            <View style={styles.aColumn2}>
                {/* <Text>Parent Disp</Text> */}
                <View style={styles.bContainer}>
                    <View style={styles.bItem}>
                        <Text style={styles.bItemText}> 4 Items</Text>  
                    </View>
                    <View style={styles.bItem}>
                        <Text style={styles.bItemText}>$50.00</Text>  
                    </View>
                    <View style={styles.bItem}>
                        <Text style={styles.bItemText}>2024-05-29</Text>  
                    </View>
                    <View style={styles.bItem}>
                        <Text style={styles.bItemText}>Processing</Text> 
                    </View>
                </View>
            </View>
            <View style={styles.aColumn3}>
                
            </View>
        </View>
    );
};

export default ordersItem;