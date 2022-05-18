import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    homeContainer: {
        width: '100%',
        height: '100%',
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    },
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        paddingLeft: '81%',
    },
    logo: {
        width: 50,
        height: 40,
        resizeMode: 'contain',
    },
});

export default styles;