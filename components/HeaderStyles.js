import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: 225
    },
    divider: {
        height: 45
    },
    divider2: {
        width: screenWidth/1.96  
    },
    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white', // temp for visual aid
        height: 80,
    }

})


export default styles;