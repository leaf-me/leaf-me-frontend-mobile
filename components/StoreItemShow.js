import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';


const StoreItemShow = () => {
    const route = useRoute();
    const { name, description, price, type, image } = route.params;

    console.log('storeItemShow:','name',name,'description',description,'price',price,'type',type,'image',image)



    return (
        <View>
            
        </View>
    );
};

export default StoreItemShow;