import React from 'react';
import { View } from 'react-native';
import { useDisProvider } from '../Providers/DispensariesProvider.js';


const DispensaryShowView = () => {
    const { dispensaryShowID, dispensaries } = useDisProvider()
    console.log('dispensaries:',dispensaries)
    console.log('currentDispensaryID:',dispensaryShowID)
    
    return (
        <View>
            
        </View>
    );
};

export default DispensaryShowView;