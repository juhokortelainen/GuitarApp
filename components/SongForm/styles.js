import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: '10%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginHorizontal: 10
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
    }
});

export default styles;