import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 40,
    },
    logo: {
        width: 50,
        height: 40,
        resizeMode: 'contain',
    },
    back: {
        width: 50,
        height: 40,
        resizeMode: 'contain',
    }
});

export default styles;