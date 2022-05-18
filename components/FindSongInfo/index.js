import React, { useState, useEffect } from 'react';
import { Text, View, ImageBackground, Linking, Alert } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';
import Header from '../Header';

export default function FindSongInfo(props) {
    const { route } = props;
    const { song } = route.params;
    const { navigation } = props;

    const [info, setInfo] = useState('');
    const api = '11d236ebd8a7a6cf7fa03c7072ce281f';

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${api}&artist=${song.artist}&track=${song.name}&format=json`)
            .then(response => response.json())
            .then(data => setInfo(data.track))
            .catch(err => Alert.alert("Error", "Something went wrong"))
    }

    const mins = parseInt(info.duration) / 60000;

    // {
    //     info.album.title ?
    //     <Text style={styles.subtitle}>Album: {info.album.title}</Text> :
    //     <Text style={styles.subtitle}>No album available</Text>
    // } ehdollinen renderointi (en saanut toimimaan)

    function ShowInfo() {
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
                            Name: {info.name}
                        </Text>
                        <Text style={styles.subtitle}>Artist: {info.artist.name}</Text>
                        <Text style={styles.subtitle}>Album: {info.album.title}</Text>
                        <Text style={styles.subtitle}>Length: {mins.toFixed(2)} min</Text>
                        <Text style={styles.subtitle}>More info:
                            <Text style={styles.url} onPress={() => Linking.openURL(info.url)}>{info.url}</Text>
                        </Text>
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
    };

    return (
        <View style={styles.container}>
            {(info.name) ? <ShowInfo /> : null}
        </View>
    );
}