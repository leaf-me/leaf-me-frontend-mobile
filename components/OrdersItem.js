import React,{useEffect, useState} from 'react';
import { View , Text } from 'react-native';
import { getOneDispensary } from './Functions';

const ordersItem = ({clientUserID, dispensaryID, orderID, status, total, storeItemsDictionary}) => {

    const [dispensary, setDispensary] = useState({})
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
        <View>
            <Text>here</Text>
        </View>
    );
};

export default ordersItem;