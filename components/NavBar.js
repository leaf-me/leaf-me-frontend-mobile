import React from 'react';
import { View, Text } from 'react-native';
import styles from './NavBarStyles'
import NavBarButton from './NavBarButton';

const NavBar = () => {
    return (
        <View style={styles.container}>
            <NavBarButton type={'Home'}/>
            <NavBarButton type={'Cart'}/>
            <NavBarButton type={'Settings'}/>
        </View>
    );
};

export default NavBar;