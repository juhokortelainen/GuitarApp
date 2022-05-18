import React, { useState } from 'react';
import { View, Text, ImageBackground, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import styles from './styles';
import Header from '../Header';
import StyledButton from '../StyledButton';
import Card from '../Card';
import SongForm from '../SongForm';

export default function Songs(props) {

    const { navigation } = props;

    const [modalOpen, setModalOpen] = useState(false);
    const [songs, setSongs] = useState([
        { id: "1", name: "Master Of Puppets", artist: "Metallica", album: "Master Of Puppets", length: "8 min", tuning: "Standard", difficulty: "Hard", link: "https://youtu.be/FvVrCKgEu4s" },
        { id: "2", name: "Unholy Confessions", artist: "Avenged Sevenfold", album: "Waking the Fallen", length: "5min", tuning: "Drop D", difficulty: "Medium", link: "https://youtu.be/XbRIOEQOYiU" },
        { id: "3", name: "American Pie", artist: "Don McLean", album: "American Pie", length: "6min", tuning: "Standard", difficulty: "Easy", link: "https://youtu.be/r1d9n4662l0" },
    ]);

    const addSong = (song) => {
        song.id = Math.random().toString();
        setSongs((currentSongs) => {
            return [song, ...currentSongs]
        });
        setModalOpen(false);
    };

    const deleteSong = (id) => {
        let arr = songs.filter(function (item) {
            return item.id !== id
        })
        setSongs(arr);
    };

    return (
        <View style={styles.homeContainer}>
            <Header />
            <ImageBackground
                source={require('../../assets/images/manguitar.jpg')}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>Songs</Text>
            </View>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={styles.modalContent}>
                        <SongForm addSong={addSong} />
                        <StyledButton
                            type='primary'
                            content={"Close"}
                            onPress={() => {
                                setModalOpen(false);
                            }}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <FlatList
                data={songs}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('SongDetails', { song: item })}>
                        <Card>
                            <View style={styles.detailCard}>
                                <Text style={styles.subtitle}>{item.name}</Text>
                                <View style={styles.buttons}>
                                    <Button style={styles.button} color='red' title="Delete" onPress={() => deleteSong(item.id)} />
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>
                )}
            />

            <View style={styles.buttonsContainer}>
                <StyledButton
                    type='primary'
                    content={"Find a song to learn"}
                    onPress={() => {
                        navigation.navigate('FindSong');
                    }}
                />
                <StyledButton
                    type='secondary'
                    content={"Add a song"}
                    onPress={() => {
                        setModalOpen(true);
                    }}
                />
            </View>
        </View>
    );
};
