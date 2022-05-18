import React, { useState } from 'react';
import { View, Text, ImageBackground, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import styles from './styles';
import Header from '../Header';
import StyledButton from '../StyledButton';
import Card from '../Card';
import PracticeExerciseForm from '../PracticeExerciseForm';

export default function PracticeExercises(props) {

    const { navigation } = props;

    const [modalOpen, setModalOpen] = useState(false);
    const [practices, setPractices] = useState([
        { id: "1", name: "Picking hand warmup", length: "15 min", description: "Improve picking speed, stamina and accuracy", link: "https://youtu.be/ps68LTZBlcg" },
        { id: "2", name: "Fretting hand warmup", length: "8 min", description: "Practice correct hand positioning", link: "https://youtu.be/rTlb70x8qWA" },
        { id: "3", name: "Stretching", length: "7 min", description: "Simple stretching to warm up muscles", link: "https://youtu.be/TSrfB7JIzxY" },
    ]);

    const addPractice = (practice) => {
        practice.id = Math.random().toString();
        setPractices((currentPractices) => {
            return [practice, ...currentPractices]
        });
        setModalOpen(false);
    };

    const deletePractice = (id) => {
        let arr = practices.filter(function (item) {
            return item.id !== id
        })
        setPractices(arr);
    };

    return (
        <View style={styles.homeContainer}>
            <Header />
            <ImageBackground
                source={require('../../assets/images/manguitar.jpg')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Practise Exercises</Text>
            </View>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={styles.modalContent}>
                        <PracticeExerciseForm addPractice={addPractice} />
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
                data={practices}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('PracticeDetails', { practice: item })}>
                        <Card>
                            <View style={styles.detailCard}>
                                <Text style={styles.subtitle}>{item.name}</Text>
                                <View style={styles.buttons}>
                                    <Button style={styles.button} color='red' title="Delete" onPress={() => deletePractice(item.id)} />
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>
                )}
            />

            <View style={styles.buttonsContainer}>
                <StyledButton
                    type='primary'
                    content={"Add an exercise"}
                    onPress={() => {
                        setModalOpen(true);
                    }}
                />
            </View>
        </View>
    );
};
