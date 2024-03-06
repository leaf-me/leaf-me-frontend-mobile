import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    dispensaryCardImage: {
        marginLeft: 10,
        marginRight: 10,
        width: '94.5%',
        height: '50%',
        paddingBottom: 0,
        marginBottom: 0,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    dispensariesIndex: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
      gridGap: 10,
      height: 400,
      width: '100%',
    },
    dispensaryCardDetails: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gridGap: 20,
    },
    dispensaryCardAddress: {
      fontSize: 12.5,
      transform: [{ translateY: 7.5 }],
      paddingRight: 7,
      textAlign: 'end',
    },
    dispensaryCardFee: {
      fontSize: 13,
    },
    dispensaryCardTitle: {
      fontWeight: 'bold',
      letterSpacing: 1.0,
    },
    item: {
        backgroundColor: "blue",
        padding: 2,
        margin: 2,
      },
  });
  
  export default styles;
  