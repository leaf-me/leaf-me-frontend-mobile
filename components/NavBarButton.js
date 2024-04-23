import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './NavBarButtonStyles.js'



const NavBarButton = ({type}) => {
    let iconImage;

    const handlePress = (type) => {

    }

    console.log(iconImage)

    switch (type) {
        case 'Home':
            iconImage = require('../assets/NavHomeIcon.png')
            break;
        case 'Cart':
            iconImage = require('../assets/NavCartIcon.png')
            break
        case 'userSettings':
            iconImage = require('../assets/NavUserSettingsIcon.png')
            break
        default:
            iconImage = null;
            break;
    }
    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            {
                iconImage && <Image source={iconImage} />
            }
        </TouchableOpacity>
    );
};

export default NavBarButton;