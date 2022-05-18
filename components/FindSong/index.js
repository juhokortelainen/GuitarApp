import React, { useState } from 'react';
import { Text, View, Button, TextInput, FlatList, Alert, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import styles from './styles';
import Header from '../Header';
import StyledButton from '../StyledButton';
import Card from '../Card';

export default function FindSong(props) {

  const [keyword, setKeyword] = useState('');
  const [songs, setSongs] = useState([]);

  const { navigation } = props;
  const api = '11d236ebd8a7a6cf7fa03c7072ce281f';

  const fetchData = () => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${keyword}&api_key=${api}&format=json`)
      .then(response => response.json())
      .then(data => setSongs(data.results.trackmatches.track))
      .catch(err => Alert.alert("Error", "Something went wrong"))
  }

  return (
    <View style={styles.homeContainer}>
      <Header />
      <ImageBackground
        source={require('../../assets/images/manguitar.jpg')}
        style={styles.image}
      />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={songs}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('FindSongInfo', { song: item })}>
              <Card>
                <View style={styles.detailCard}>
                  <Text style={styles.subtitle}>{item.name}</Text>
                  <Text style={styles.subtitle}>{item.artist}</Text>
                  <View style={styles.buttons}>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          )} />
      </SafeAreaView>

      <View style={styles.buttonsContainer}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={text => setKeyword(text)}
          />
          <Button style={styles.button} color='blue' title="Find" onPress={() => { fetchData(); }} />
        </View>
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