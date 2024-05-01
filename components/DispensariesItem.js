import React from 'react';
import { Text, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import styles from './DispensariesIndexStyles'; // Import StyleSheet
import { useNavigation } from '@react-navigation/native';
import disp1Img from '../assets/dis1.png'
import disp2Img from '../assets/dis2.png'
import disp3Img from '../assets/dis3.png'


const DispensariesItem = ({name, address, deliveryfee, image, dispensaryId}) => {
    const screenWidth = Dimensions.get('window').width;
    const navigation = useNavigation();

    // on press; navigate to dispensaryShow
    const handlePress = () => {
        navigation.navigate('DispensariesShow', {dispensaryId: dispensaryId});
        console.log('navigating to dispensary with id of:',dispensaryId)
    }

    // used to provide imageSrc to <Image/> component.
    const findImageThenRender = (imageFileName, disp1Img, disp2Img, disp3Img) => {
        if(imageFileName === 'image1.jpg'){
            return disp1Img
        } else if (imageFileName === 'image2.jpg'){
            return disp2Img
        } else {
            return disp3Img
        }
    }
    // gives source file to each image through helper function
    const imageSrc = findImageThenRender(image, disp1Img, disp2Img, disp3Img)

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