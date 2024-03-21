import React from 'react';
import { View, FlatList } from 'react-native';
import { useDisProvider } from '../Providers/DispensariesProvider.js';
import { useContextProvider } from '../Providers/Provider.js';
import { Text, Image } from 'react-native';
import { v4 as uuidv4 } from "uuid";
import styles from './DispensariesIndexStyles.js'; // Import the StyleSheet
import disp1Img from '../assets/dis1.png'
import disp2Img from '../assets/dis2.png'


// helper function to check if given string is the correct image, then returns the correct image
// for use to display correct dispensary image based on the key value for image key
// takes in imageFileName as first param
// takes in the import of each image as the second and third arguments
const findImageThenRender = (imageFileName, disp1Img, disp2Img) => {
    if(imageFileName === 'image1.jpg'){
        return disp1Img
    } else if (imageFileName === 'image2.jpg'){
        return disp2Img
    } else {
        return null
    }
}

const DispensariesIndex = () => {
    const { dispensaries } = useDisProvider() 

    console.log('data present',dispensaries)


    const Item = ({name, address, deliveryfee, image}) => {

        const imageSrc = findImageThenRender(image, disp1Img, disp2Img)


        return (
        <View style={styles.item}>
            <Image
            style={{ height: 300, width: 300}}
            source={imageSrc}
            />
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{address}</Text>
            <Text style={styles.title}>{deliveryfee}</Text>
        </View>
        )
        
}

    const renderItem = ({item}) => (
        <Item image={item.image} name={item.name} address={item.address} deliveryfee={item.deliveryfee}/>
    )

    /**
     * 
     * {"address": "123 Main St", "deliveryfee": "5.99", "id": 1, "image": "image1.jpg", "latitude": "40.712800", "longitude": "-74.006000", "maxdeliverytime": 60, "mindeliverytime": 30, "name": "Dispensary 1", "rating":
     */
    return (
        <View style={styles.container}>
            {dispensaries && (
                <FlatList
                data={dispensaries}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                />
            )}
            <Text>Hello</Text>
        </View>
    );
};   

export default DispensariesIndex;