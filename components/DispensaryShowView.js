import React, { useEffect, useState } from 'react';
import { View, Image, Dimensions, Text, FlatList } from 'react-native';
import { useContextProvider } from "../Providers/Provider";
import { useDisProvider } from '../Providers/DispensariesProvider.js';
import disp1Img from '../assets/dis1.png'
import disp2Img from '../assets/dis2.png'
import disp3Img from '../assets/dis3.png'
import StoreItem from './StoreItem.js';

const DispensaryShowView = () => {
    const { API, axios } = useContextProvider();
    const { dispensaryShowID, dispensaries } = useDisProvider()
    const [dispensaryItems, setDispensaryItems] = useState(null)
    const screenWidth = Dimensions.get('window').width;

    // const findImageThenRender = (imageFileName, disp1Img, disp2Img, disp3Img) => {
    //     if(imageFileName === 'image1.jpg'){
    //         return disp1Img
    //     } else if (imageFileName === 'image2.jpg'){
    //         return disp2Img
    //     } else {
    //         return disp3Img
    //     }
    // }

    let imageSrc
    const {name, address, deliveryfee, image,id} = dispensaries[dispensaryShowID-1]

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

    useEffect(() => {
        if (dispensaries && dispensaryShowID !== null && dispensaries[dispensaryShowID]) {
            axios
                .get(`${API}/dispensary/${dispensaryShowID}/storeitems`)
                .then(({data}) => {
                    setDispensaryItems(data)
                })
                .catch((error) => {
                    console.error(error)
                },dispensaryShowID)
            }
        }, [dispensaries, dispensaryShowID]);

    // const imageSrc = findImageThenRender(image, disp1Img, disp2Img, disp3Img)
    // // console.log(dispensaryItems)

    const renderItem = ({item}) => (
        <StoreItem dispensaryID={item.dispensary_id} image={item.image} type={item.type} id={item.id} name={item.name} price={item.price} description={item.description}/>
    )
    
    return (
        <View>
            <Text style={{
                paddingBottom: 20,
                fontSize: 20,
                fontWeight: 'bold',
                alignSelf: 'center'
            }}>{name}
            </Text>
            <Image
            style={{ height: 225, width: screenWidth-5, borderRadius: 20, marginBottom: 20,}}
            source={imageSrc} />
      
            {
                dispensaryItems ? (
                    <FlatList
                    data={dispensaryItems}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    />
                ) : (
                    <></>
                )}
        </View>
    );
};

export default DispensaryShowView;