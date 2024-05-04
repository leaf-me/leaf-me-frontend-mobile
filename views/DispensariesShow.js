import React from 'react';
import DispensariesProvider from '../Providers/DispensariesProvider';
import Header from '../components/Header.js';
import DispensaryShowView from '../components/DispensaryShowView.js';
import { useDisProvider } from '../Providers/DispensariesProvider.js';



const DispensariesShow = () => {
    // const { dispensaryShowID, dispensaries } = useDisProvider()


    return (
        <>
            <Header/>
            <DispensariesProvider>
                <DispensaryShowView/>
            </DispensariesProvider>
        </>
    );
};

export default DispensariesShow;