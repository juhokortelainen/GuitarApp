import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    homeContainer: {
        width: '100%',
        height: '100%',
    },
    container: {
        paddingTop: '30%',
        paddingBottom: '45%',   
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        backgroundColor: 'white'
    },
    subtitle: {
        fontSize: 20,
        color: '#5c5e62',
        fontWeight: '800',
        backgroundColor: 'white'
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
    modalContent: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: '#00aeef',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        paddingHorizontal: 10
    },
    detailCard: {
        justifyContent: 'space-between',
    },
    input: {
        width: 100,
        borderColor: 'grey',
        paddingHorizontal: 3,
        borderWidth: 1,
        backgroundColor: 'white',
        marginLeft: '25%',
        marginRight: '5%',
    },
});

export default styles;