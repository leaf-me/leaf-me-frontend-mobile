import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: screenWidth,
        height: 125,
        paddingHorizontal: 20,
        elevation: 3,
        shadowColor: '#0000000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
})

export default styles;