import React from 'react';
import { View, FlatList, Text } from 'react-native';
import OrdersItem from './OrdersItem';
import styles from './OrdersIndexStyles.js';


const ordersIndex = ({pendingOrders, completedOrders}) => {

console.log(styles)

    const renderItem = ({item}) => {
        return (
            <OrdersItem clientUserID={item.client_user_id} dispensaryID={item.dispenary_id} itemID={item.id} status={item.status} total={item.total} />
        )
    }

    return (
        <View styles={styles.viewContainer}>
            <Text>Pending Orders</Text>
            <View style={styles.pendingContainer}>
            {
                pendingOrders ?
                <FlatList
                data={pendingOrders}
                renderItem={renderItem}
                keyExtractor={(pendingOrder)=> pendingOrder.id }
                />
                : <Text>None</Text>
            }
            </View>
            <Text>Complete Orders</Text>
            <View style={styles.completeContainer}>
            {
                completedOrders ?
                <FlatList
                data={completedOrders}
                renderItem={renderItem}
                keyExtractor={(completeOrder)=> completeOrder.id }
                />
                : <Text>None</Text>
            }
            </View>
        </View>
    );
};

export default ordersIndex;