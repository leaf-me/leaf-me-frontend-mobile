import React from 'react';
import { useEffect } from 'react'
import { Text } from 'react-native';
import { useContextProvider } from '../Providers/Provider';
import DispensariesIndex from '../components/dispensariesIndex';
import DispensariesProvider from '../Providers/DispensariesProvider';
import { useSearchToggle } from '../Providers/SearchToggleProvider';
import { SearchToggleProvider } from '../Providers/SearchToggleProvider';
import Header from '../components/Header';


// create the dispensary index comp



const Dispensaries = () => {


  const { viewDispensaries } = useSearchToggle(); // Access viewDispensaries from the context

  useEffect(()=> {
    console.log('useEffect, Dispensaries.js',viewDispensaries)

  },[viewDispensaries])

  console.log('dispensaries.js',viewDispensaries)

  return (
    <>
      <Header/>
      {/* <SearchToggleProvider> */}
        <DispensariesProvider>
          <SearchToggleProvider>
          {
            viewDispensaries ? <DispensariesIndex/> : <Text>Help</Text>
          }
          </SearchToggleProvider>
        </DispensariesProvider>
      {/* </SearchToggleProvider> */}
    </>
  )
  
};

export default Dispensaries;