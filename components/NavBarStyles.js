import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: 125
    },
})

export default styles;