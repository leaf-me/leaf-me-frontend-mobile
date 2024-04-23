import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
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
            {/* {
                iconImage && <Image source={iconImage} style={{
                    width: 40,
                    height: 40,
                }} />
            }
            {
                type && <Text>
                    {type}
                </Text>
            } */}
            <View style={{ alignItems: 'center', paddingLeft: 30 }}>
                {iconImage && <Image source={iconImage} style={{ width: 40, height: 40 }} />}
                {type && <Text>{type}</Text>}
            </View>
        </TouchableOpacity>
    );
};

export default NavBarButton;