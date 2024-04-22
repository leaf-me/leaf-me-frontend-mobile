import React from 'react';
import DispensariesIndex from '../components/dispensariesIndex';
import DispensariesProvider from '../Providers/DispensariesProvider';
import Header from '../components/Header';


// create the dispensary index comp



const Dispensaries = () => {

  return (
    <>
      <Header/>
        <DispensariesProvider>
          <DispensariesIndex/>
        </DispensariesProvider>
    </>
  )
  
};

export default Dispensaries;