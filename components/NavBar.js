import React from 'react';
import { View, Text } from 'react-native';
import styles from './NavBarStyles'
import NavBarButton from './NavBarButton';

const NavBar = () => {
    return (
        <View style={styles.container}>
            <NavBarButton/>
            <NavBarButton/>
            <NavBarButton/>
        </View>
    );
};

export default NavBar;