import React from 'react';
import { useContextProvider } from './Provider';
import { useContext, createContext, useState, useEffect } from "react"
import { checkIfCurrentUserHasBasket, createNewBasket, populateBasketWithStoreItem, getAllBasketStoreItemsFromBasketID } from '../components/Functions.js';


export const UserContext = createContext()
export function useUserContext() {
    return useContext(UserContext)
}

const UserProvider = ({children}) => {
    const { API, axios, userID } = useContextProvider()
    const [basketItems, setBasketItems] = useState([])
    const [basketID, setBasketID] = useState(null)
    const [currentUserHasBasket, setCurrentUserHasBasket] = useState(false)
    const [error, setError] = useState(null)

    // whenever the component is first mounted; we need to check for users basket.
    useEffect(() => {
        console.log(userID)
        // check if user has basket, if does; get basket items and save in state to be rendered onto related components
        const fetchBasketID = async (userID) => {
            try {
                const fetchedBasketID = await checkIfCurrentUserHasBasket(userID)
                console.log("\nFetchedBasketID:\n,",fetchBasketID)
                if(fetchedBasketID) {
                    setCurrentUserHasBasket(true)
                    setBasketID(fetchedBasketID)
                    return fetchedBasketID
                }
            } catch (error) {
                setError(err.message)
                setCurrentUserHasBasket(false)
                return false
            }
        }

        const fetchBasketItems = async (basketID, userID) => {
                try {
                    const items = await getAllBasketStoreItemsFromBasketID(basketID, userID)
                    setBasketItems(items)
                    return true
                } catch (error) {
                    setError(err.message);
                    return false
        }}

        const initBasket = async (userID) => {
            const fetchedBasketID = await fetchBasketID(userID);
            if(fetchedBasketID) {
                await fetchBasketItems(fetchedBasketID, userID)
            }
        }

        initBasket(userID)
    },[userID])


    return (
        <UserContext.Provider
        value={{
            basketItems, basketID, currentUserHasBasket, error
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;