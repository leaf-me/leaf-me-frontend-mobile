import React from 'react';
import { useContextProvider } from '../Providers/Provider.js';
import { Text } from 'react-native';

// create a provider to get the data from the dispensaries
// import or implement uuid alternative
// create and import dispensariesItem componenet


const DispensariesIndex = () => {
    const { userID, API, authToken } = useContextProvider()
    


    return (
        <>
        <Text>{userID}</Text>
            
        </>
    );
};   

export default DispensariesIndex;