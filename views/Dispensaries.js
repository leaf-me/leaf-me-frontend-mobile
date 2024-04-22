import React from 'react';
import DispensariesIndex from '../components/dispensariesIndex';
import DispensariesProvider from '../Providers/DispensariesProvider';
import Header from '../components/Header';
import NavBar from '../components/NavBar';


// create the dispensary index comp



const Dispensaries = () => {

  return (
    <>
      <Header/>
        <DispensariesProvider>
          <DispensariesIndex/>
        </DispensariesProvider>
        <NavBar/>
      
    </>
  )
  
};

export default Dispensaries;