import { View, Dimensions } from "react-native";
const screenWidth = Dimensions.get('window').width;


const SearchBar = () => {
    return (
        <View style={{
            marginLeft: 13.5,
            width: screenWidth-25,
            height: 40,
            backgroundColor: '#D6D6D6',
            borderRadius: 20
        }}>
            
        </View>
    );
};

export default SearchBar;