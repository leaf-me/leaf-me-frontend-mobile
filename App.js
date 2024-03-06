import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native';
import Home from './views/Home'
import Dispensaries from './views/Dispensaries'
import Provider from './Providers/Provider';


const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Provider>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Dispensaries" component={Dispensaries}/>
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
