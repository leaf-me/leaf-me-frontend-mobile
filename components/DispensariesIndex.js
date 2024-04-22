import React from 'react';
import { View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { useDisProvider } from '../Providers/DispensariesProvider.js';
import { useSearchToggle } from '../Providers/SearchToggleProvider.js';
import { Text, Image, Dimensions } from 'react-native';
import { v4 as uuidv4 } from "uuid";
import styles from './DispensariesIndexStyles.js'; // Import the StyleSheet
import disp1Img from '../assets/dis1.png'
import disp2Img from '../assets/dis2.png'
import disp3Img from '../assets/dis3.png'




// helper function to check if given string is the correct image, then returns the correct image
// for use to display correct dispensary image based on the key value for image key
// takes in imageFileName as first param
// takes in the import of each image as the second and third arguments
const findImageThenRender = (imageFileName, disp1Img, disp2Img, disp3Img) => {
    if(imageFileName === 'image1.jpg'){
        return disp1Img
    } else if (imageFileName === 'image2.jpg'){
        return disp2Img
    } else {
        return disp3Img
    }
}

const DispensariesIndex = () => {
    const screenWidth = Dimensions.get('window').width;
    const { dispensaries } = useDisProvider() 
    const { viewDispensaries } = useSearchToggle(); // Access viewDispensaries from the context

    // dispensaryItem Component:
    const Item = ({name, address, deliveryfee, image}) => {

        const imageSrc = findImageThenRender(image, disp1Img, disp2Img, disp3Img)


        return (
        <View style={styles.item}>
            <Image
            style={{ height: 225, width: screenWidth-5, borderRadius: 20}}
            source={imageSrc}
            />
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.address}>{address}</Text>
            <Text style={styles.price}>${deliveryfee} Delivery Fee</Text>
        </View>
        )
}
// End of dispensaryItem Component
    const renderItem = ({item}) => (
        <Item image={item.image} name={item.name} address={item.address} deliveryfee={item.deliveryfee}/>
    )

    return (
        <View style={styles.container}>
            { !viewDispensaries && dispensaries ? (
                <FlatList
                data={dispensaries}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                />
            ) : (
                <Text>Loading</Text>
            )}
        </View>
    );
};   

export default DispensariesIndex;