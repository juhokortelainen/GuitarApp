import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const Header = (props) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.back} source={require('../../assets/images/axe.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image style={styles.logo} source={require('../../assets/images/picklogo.png')} />
            </TouchableOpacity>
        </View>
    );
};

export default Header;