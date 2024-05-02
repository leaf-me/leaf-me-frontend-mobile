import React from 'react';
import DispensariesProvider from '../Providers/DispensariesProvider';
import Header from '../components/Header.js';
import DispensaryShowView from '../components/DispensaryShowView.js';


const DispensariesShow = () => {

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