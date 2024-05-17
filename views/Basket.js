import React from 'react';
import { View } from 'react-native';
import BasketIndex from '../components/BasketIndex';
import { useUserContext } from '../Providers/UserProvider.js';
import Header from '../components/Header';
import NavBar from '../components/NavBar';


const Basket = () => {
    const { basketItems } = useUserContext()


    return (
        
        <>
            <Header/>
            <BasketIndex/>
            <NavBar/>
        </>
    );
};

export default Basket;