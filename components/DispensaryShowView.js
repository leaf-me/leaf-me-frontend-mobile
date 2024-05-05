import React, { useEffect } from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import { useDisProvider } from '../Providers/DispensariesProvider.js';
import disp1Img from '../assets/dis1.png'
import disp2Img from '../assets/dis2.png'
import disp3Img from '../assets/dis3.png'



const DispensaryShowView = () => {
    const { dispensaryShowID, dispensaries } = useDisProvider()
    const screenWidth = Dimensions.get('window').width;
    // console.log('dispensaries:',dispensaries)
    // Helper Functions ; should be in its own file during code clean up
    const findImageThenRender = (imageFileName, disp1Img, disp2Img, disp3Img) => {
        if(imageFileName === 'image1.jpg'){
            return disp1Img
        } else if (imageFileName === 'image2.jpg'){
            return disp2Img
        } else {
            return disp3Img
        }
    }
    // const imageSrc = findImageThenRender(image, disp1Img, disp2Img, disp3Img)


    useEffect(() => {
        console.log(dispensaryShowID)
        if (dispensaries && dispensaryShowID !== null && dispensaries[dispensaryShowID]) {
            // console.log(dispensaryShowID);
            // console.log('dispShowView UseEffect:', dispensaries[dispensaryShowID]);

        }
    }, [dispensaries, dispensaryShowID]);

    const {name, address, deliveryfee, image} = dispensaries[dispensaryShowID]
    const imageSrc = findImageThenRender(image, disp1Img, disp2Img, disp3Img)


    return (
        <View>
            <Image
            style={{ height: 225, width: screenWidth-5, borderRadius: 20}}
            source={imageSrc} />
            <Text>{name}</Text>
        </View>
    );
};

export default DispensaryShowView;