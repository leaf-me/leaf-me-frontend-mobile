import React, { createContext, useState, useContext } from 'react';
// import { createContext, useState, useContext } from 'react-native'

export const SearchToggleContext = createContext();
export function useSearchToggle() {
return useContext(SearchToggleContext);
}

export const SearchToggleProvider = ({ children }) => {
    const [active, setActive] = useState(false);
    const [viewDispensaries, setViewDispensaries] = useState(true);
    const [searchText, setSearchText] = useState(null)


    // The active prop is specifically related to the state of the search toggle button, while the viewDispensaries prop is related to the state of what content is being displayed in the application. 

    // We import the useSearchToggle hook from the SearchToggleProvider
    // We use the useSearchToggle hook to access the active state and the toggleActive function from the context.

    const toggleActive = () => {
        setActive(!active);
    };
    
    const toggleView = () => {
        console.log('searchToggleProvider.js, toggleView():',viewDispensaries)
        setViewDispensaries(!viewDispensaries);
    };
    
    return (
    <SearchToggleContext.Provider value={{ active, viewDispensaries, toggleActive, toggleView, setViewDispensaries, searchText, setSearchText}}>
        {children}
    </SearchToggleContext.Provider>
  );
};
