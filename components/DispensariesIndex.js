import React from 'react';
import { useDisProvider } from '../Providers/DispensariesProvider.js';
import { useContextProvider } from '../Providers/Provider.js';
import { Text } from 'react-native';

// provide actual data from API to mobile client
// import or implement uuid alternative
// create and import dispensariesItem componenet


const DispensariesIndex = () => {
    const { userID, API, authToken } = useContextProvider()
    const { dispensaries } = useDisProvider()
    console.log(dispensaries[0].name)

    


    return (
        <>
        <Text>{userID}</Text>
        <Text>{API}</Text>
        <Text>{authToken}</Text>
        <Text>{dispensaries[0].name}</Text>
        </>
    );
};   

export default DispensariesIndex;