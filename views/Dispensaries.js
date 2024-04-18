import React from 'react';
import { useContextProvider } from '../Providers/Provider';
import DispensariesIndex from '../components/dispensariesIndex';
import DispensariesProvider from '../Providers/DispensariesProvider';

// create the dispensary index comp



const Dispensaries = () => {
  return (
    <>
      <DispensariesProvider>
        <DispensariesIndex/>
      </DispensariesProvider>
    </>
  )
  
};

export default Dispensaries;