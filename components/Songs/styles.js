import { StyleSheet } from "react-native";

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
        fontSize: 40,
        fontWeight: '600',
        padding: 10
    },
    subtitle: {
        fontSize: 20,
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
    modalContent: {
        flex: 1,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: '#00aeef',
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    detailCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default styles;