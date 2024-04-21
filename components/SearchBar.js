import { View, Dimensions, TextInput, Image } from "react-native";
import searchIcon from '../assets/search-icon.png'
import SearchToggle from "./SearchToggle";
import { SearchToggleProvider } from "../Providers/SearchToggleProvider";
const screenWidth = Dimensions.get('window').width;


const SearchBar = () => {
    return (
        <View style={{
            flexDirection: "row",
            marginLeft: 13.5,
            width: screenWidth-25,
            height: 40,
            backgroundColor: '#D6D6D6',
            borderRadius: 20
        }}>
            <Image style={{
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
                height: 20,
                width: 20
            }} source={searchIcon}/>
            <TextInput placeholder="Search Leaf Me"/>
            <SearchToggleProvider>
                <SearchToggle/>
            </SearchToggleProvider>
        </View>
    );
};

export default SearchBar;