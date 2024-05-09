import React,{ useState } from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import StoreItemQuantity from './StoreItemQuantity';
import flower1Img from '../assets/weedflower.png'
import flower2Img from '../assets/weedflower2.png'
import edible1Img from '../assets/weededible.png'
import defaultImg from '../assets/weeddefault.png'
import StoreItemShowCartButton from './StoreItemShowCartButton';
import styles from './StoreItemShowStyles'
 

// workload
/*
    1) import image for each type
    2) use the findImageThenRender function to render each image
    3) quantity state created
    4) quantity state value rendered on screen
    6) quantityButton component created
    7) quantity state effected by onPress of quanityButton
    8) addItemToCart button created with no functionality
*/


// import image for each type
// for now/ MVP we will use 3, post MVP; we will have a image for each product and render out with a ASSETMAP;
// see LEAF-66 for more information


const StoreItemShow = () => {
    const route = useRoute();
    const { name, description, price, type, image, id } = route.params;
    const screenWidth = Dimensions.get('window').width;
    const [quantity, setQuantity] = useState(1)
    console.log('storeItemShow:','name',name,'description',description,'price',price,'type',type,'image',image)

    const findImageThenRenderBasedOnType = (type) => {
        // switch case based on the image
        switch (type) {
            case 'flower':
                return flower1Img
            case 'edible':
                return edible1Img
        
            default:
                return defaultImg
        }
    }
    const imageSrc = findImageThenRenderBasedOnType(type)

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity)
    }

    console.log('styles',styles)

    return (
        <View>
            <Image
            style={{height: 225, width: screenWidth-5, borderRadius: 20, marginBottom: 20,}}
            source={imageSrc}
            />
            <Text style={styles.title}>{name}</Text>
            <StoreItemQuantity quantity={quantity} onQuantityChange={handleQuantityChange}/>
            <StoreItemShowCartButton storeItemId={id} quantity={quantity} name={name} description={description} price={price} type={type} image={image} />
        </View>
    );
};

export default StoreItemShow;