import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './NavBarButtonStyles.js'



const NavBarButton = (type) => {
    let iconImage;

    const handlePress = (type) => {

    }

    switch (type) {
        case 'Home':
            
            break;
        case 'Cart':

            break
        case 'userSettings':

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