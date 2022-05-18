import React from 'react';
import { View, Text, ImageBackground, Linking } from 'react-native';
import Header from '../Header';
import styles from './styles';
import StyledButton from '../StyledButton';
import { useNavigation } from '@react-navigation/native';

export default function PracticeDetails(props) {
  const { route } = props;
  const { practice } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <ImageBackground
        source={require('../../assets/images/manguitar.jpg')}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.detailsContent}>
          <Text style={styles.title}>
            {practice.name}
          </Text>
          <Text style={styles.subtitle}>{practice.length}</Text>
          <Text style={styles.subtitle}>{practice.description}</Text>
          <Text style={styles.url} onPress={() => Linking.openURL(practice.link)}>{practice.link}</Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type='primary'
          content={"Close"}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
}