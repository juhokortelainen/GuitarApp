import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.homeContainer}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.logo} source={require('../../assets/images/picklogo.png')} />
                </TouchableOpacity>
            </View>

            <ImageBackground
                source={require('../../assets/images/manguitar.jpg')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Guitar App</Text>
                <Text style={styles.subtitle}>Start learning today!</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton
                    type='primary'
                    content={"Songs"}
                    onPress={() => {
                        navigation.navigate('Songs')
                    }}
                />
                <StyledButton
                    type='secondary'
                    content={"Practice Exercises"}
                    onPress={() => {
                        navigation.navigate('PracticeExercises')
                    }}
                />
            </View>
        </View>
    );
};