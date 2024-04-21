import React from 'react';
import { TouchableOpacity, View, Image } from "react-native";
import { useSearchToggle } from '../Providers/SearchToggleProvider';

// when viewDispesnaries state from context is false, show all items icon, (Weed leaf), when true, show stores icon (Store silhoutte)

const SearchToggle = () => {
    // if (active === undefined || toggleActive === undefined || toggleView == undefined){
    //     console.log('context is not available.')
    //     // return null if the context is not yet available
    //     return null
    // }

    const { active, toggleActive, toggleView, setViewDispensaries, viewDispensaries } = useSearchToggle();

    const handleToggle = () => {
        toggleActive();
        toggleView();

        console.log('toggled')
        console.log('handleToggle(), SearchToggle.js',viewDispensaries)
    }



    return (
        active !== undefined && toggleActive !== undefined && toggleView !== undefined && (
        <TouchableOpacity onPress={handleToggle}>
            <Image 
            source={active ? require('../assets/activeIcon.png') : require('../assets/inactiveIcon.png')}
            style={{ width: 24, height: 24}}
            />
        </TouchableOpacity>
        )
        
    );
};

export default SearchToggle;