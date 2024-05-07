import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native';
// components imports
import Home from './views/Home'
import Dispensaries from './views/Dispensaries'
import DispensariesShow from './views/DispensariesShow';
import StoreItemShow from './components/StoreItemShow';
// provider imports
import Provider from './Providers/Provider';
import { SearchToggleProvider } from './Providers/SearchToggleProvider';
import DispensariesProvider, { useDisProvider } from './Providers/DispensariesProvider';


const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <SearchToggleProvider>
          <DispensariesProvider>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Dispensaries" component={Dispensaries} options={{ headerShown: false }}/>
              <Stack.Screen name="DispensariesShow" component={DispensariesShow} options={{ headerShown: false }}/>
              <Stack.Screen name="StoreItemShow" component={StoreItemShow} options={{ headerShown: false }}/>
          </Stack.Navigator>
            
          </DispensariesProvider>
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
