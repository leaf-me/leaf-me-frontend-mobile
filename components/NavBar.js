import React from 'react';
import { View, Text } from 'react-native';
import styles from './NavBarStyles'
import NavBarButton from './NavBarButton';
import { useIsFocused } from '@react-navigation/native'; // Import useIsFocused hook


const NavBar = () => {
    const isFocused = useIsFocused(); // Check if the screen is focused

    if (!isFocused) {
        return null; // Don't render the NavBar if the screen is not focused
    }

    return (
        <View style={styles.container}>
            <NavBarButton type={'Home'}/>
            <NavBarButton type={'Cart'}/>
            <NavBarButton type={'Settings'}/>
        </View>
    );
};

export default NavBar;