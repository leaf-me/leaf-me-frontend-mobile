import React from 'react';
import { Text, Image, Dimensions , View} from 'react-native';
import styles from './HeaderStyles.js'

// display LEAF ME text
// style the dimensions of the header
// display basket if userID is present
// if userID is not present; dont render button

// html struct:
// view:
    // text for header
    // basket component conditionally rendered based on user id


const Header = () => {
    return (
        <View>
            <Text>Leaf Me</Text>
            
        </View>
    );
};

export default Header;