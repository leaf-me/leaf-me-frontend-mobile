import React from 'react';
import { View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { useDisProvider } from '../Providers/DispensariesProvider.js';
import { useSearchToggle } from '../Providers/SearchToggleProvider.js';
import DispensariesItem from './DispensariesItem.js';
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
    const { dispensaries } = useDisProvider() 
    const { viewDispensaries, searchResults } = useSearchToggle(); // Access viewDispensaries from the context

    console.log('dispensariesIndex.js',viewDispensaries)
    


    const renderItem = ({item}) => (
        
        <DispensariesItem dispensaryId={item.id} image={item.image} name={item.name} address={item.address} deliveryfee={item.deliveryfee} />
        // <Item image={item.image} name={item.name} address={item.address} deliveryfee={item.deliveryfee}/>
    )

    useEffect(() => {
        console.log('useEffect search results',searchResults)

    },[dispensaries, searchResults])


    // conditonaly render 2 differnent views;
    // if searchResults is true; render related flatlist
    // otherwise, render the all flatlist
    return (
  
        <View style={styles.container}>
            {
                searchResults ? (
                    <FlatList
                        data={searchResults}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    <FlatList
                        data={dispensaries}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                )
            }


            {/* {!viewDispensaries && searchResults ? (
                <>
                <FlatList 
                data={searchResults}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                />

                </>
            ) : (

                // start of default
                <>
                {
                    !viewDispensaries && dispensaries && !searchResults ? (
                        <FlatList 
                        data={dispensaries}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        />
                    ) : (
                        <Text>Loading</Text>
                    )
                }
                </>
            )} */}
            { /* OLD INDEX BELOW */}
            {/* { !viewDispensaries && dispensaries ? (
                <FlatList
                data={dispensaries}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                />
            ) : (
                <Text>Loading</Text>
            )} */}
        </View>
    );
};   

export default DispensariesIndex;