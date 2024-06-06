import React from 'react';
import { Text, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import { useDisProvider } from '../Providers/DispensariesProvider';
import styles from './DispensariesIndexStyles';
import { useNavigation } from '@react-navigation/native';


const DispensariesItem = ({name, address, deliveryfee, image, dispensaryId}) => {
    const screenWidth = Dimensions.get('window').width;
    const navigation = useNavigation();
    const { setDispensaryShowID } = useDisProvider() 

    const handlePress = async () => {
        await setDispensaryShowID(dispensaryId)
        navigation.navigate('DispensariesShow', {dispensaryId: dispensaryId});

    }

    
    let imageSrc
    const findImageThenRender = (imageFileName, defaultImg) => {
        switch (imageFileName) {
            case 'dis1.jpg':
                imageSrc = require('../assets/dis1.jpg')
                return imageSrc
            case 'dis2.png':
                imageSrc = require('../assets/dis2.png')
                return imageSrc
            case 'dis4.png':
                imageSrc = require('../assets/dis4.png')
                return imageSrc
            default:
                imageSrc = require('../assets/dis3.png');
                return imageSrc
        }
    }

    imageSrc = findImageThenRender(image, null)

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.item}>
                <Image
                style={{ height: 225, width: screenWidth-5, borderRadius: 20}}
                source={imageSrc} />
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
                <Text style={styles.price}>${deliveryfee} Delivery Fee</Text>
            </View>
        </TouchableOpacity>
    );
};

export default DispensariesItem;