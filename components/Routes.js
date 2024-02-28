import React from 'react'
import {Text} from 'react-native'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../views/Home'
import Dispensaries from '../views/Dispensaries'

const Stack = createNativeStackNavigator()

const Routes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Dispensaries" component={Dispensaries}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Routes;

