import React from 'react';
import { View, Text, ImageBackground, Linking } from 'react-native';
import Header from '../Header';
import styles from './styles';
import StyledButton from '../StyledButton';
import { useNavigation } from '@react-navigation/native';

export default function SongDetails(props) {
  const { route } = props;
  const { song } = route.params;
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
            {song.name}
          </Text>
          <Text style={styles.subtitle}>{song.artist}</Text>
          <Text style={styles.subtitle}>{song.album}</Text>
          <Text style={styles.subtitle}>{song.length}</Text>
          <Text style={styles.subtitle}>{song.tuning}</Text>
          <Text style={styles.subtitle}>{song.difficulty}</Text>
          <Text style={styles.url} onPress={() => Linking.openURL(song.link)}>{song.link}</Text>
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