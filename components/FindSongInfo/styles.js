import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
    },
    subtitle: {
        fontSize: 22,
        color: '#5c5e62',
        paddingTop: 20
    },
    url: {
        fontSize: 22,
        color: 'blue',
        paddingTop: 20,
        textDecorationLine: 'underline'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    details: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 10,
        marginVertical: 6,
    },
    detailsContent: {
        marginHorizontal: 18,
        marginVertical: 20,
        justifyContent: 'space-between',
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    },
});

export default styles;