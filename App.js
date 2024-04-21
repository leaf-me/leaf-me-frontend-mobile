import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native';
import Home from './views/Home'
import Dispensaries from './views/Dispensaries'
import Provider from './Providers/Provider';
import { SearchToggleProvider } from './Providers/SearchToggleProvider';


const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <SearchToggleProvider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Dispensaries" component={Dispensaries} options={{ headerShown: false }}/>
      </Stack.Navigator>

        </SearchToggleProvider>
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
