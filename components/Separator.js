import React from 'react';
import { View, StyleSheet } from 'react-native'

const Separator = () => {
    return (
        <View style={styles.separator}/>
    );
};

const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: '90%',
        marginLeft: '5%',
        backgroundColor: '#CED0CE',
        marginVertical: 10, 
        marginBottom: 20,
    },
  });

export default Separator;