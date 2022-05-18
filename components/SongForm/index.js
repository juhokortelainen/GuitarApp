import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './styles';
import { Formik } from 'formik';
import StyledButton from '../StyledButton';
import * as yup from 'yup';

const songSchema = yup.object({
    name: yup.string()
        .required()
        .min(1),
    artist: yup.string()
        .required()
        .min(1),
    album: yup.string()
        .min(1),
    length: yup.string()
        .min(1),
    tuning: yup.string()
        .required()
        .min(1),
    difficulty: yup.string()
        .min(1),
    link: yup.string()
        .min(5),
})

export default function SongForm({ addSong }) {
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ name: '', artist: '', album: '', length: '', tuning: '', difficulty: '', link: '' }}
                validationSchema={songSchema}
                onSubmit={(values) => {
                    addSong(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Song'
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                            onBlur={props.handleBlur('name')}
                        />
                        <Text style={styles.errorText}>{props.errors.name}</Text>

                        <TextInput
                            style={styles.input}
                            placeholder='Artist'
                            onChangeText={props.handleChange('artist')}
                            value={props.values.artist}
                            onBlur={props.handleBlur('artist')}
                        />
                        <Text style={styles.errorText}>{props.errors.artist}</Text>

                        <TextInput
                            style={styles.input}
                            placeholder='Album'
                            onChangeText={props.handleChange('album')}
                            value={props.values.description}
                            onBlur={props.handleBlur('album')}
                        />
                        <Text style={styles.errorText}>{props.errors.album}</Text>

                        <TextInput
                            style={styles.input}
                            placeholder='Length'
                            onChangeText={props.handleChange('length')}
                            value={props.values.url}
                            onBlur={props.handleBlur('length')}
                        />
                        <Text style={styles.errorText}>{props.errors.length}</Text>

                        <TextInput
                            style={styles.input}
                            placeholder='Tuning'
                            onChangeText={props.handleChange('tuning')}
                            value={props.values.url}
                            onBlur={props.handleBlur('tuning')}
                        />
                        <Text style={styles.errorText}>{props.errors.tuning}</Text>

                        <TextInput
                            style={styles.input}
                            placeholder='Link to tutorial'
                            onChangeText={props.handleChange('link')}
                            value={props.values.link}
                            onBlur={props.handleBlur('link')}
                        />
                        <Text style={styles.errorText}>{props.errors.link}</Text>

                        <TextInput
                            style={styles.input}
                            placeholder='Difficulty'
                            onChangeText={props.handleChange('difficulty')}
                            value={props.values.difficulty}
                            onBlur={props.handleBlur('difficulty')}
                        />
                        <Text style={styles.errorText}>{props.errors.difficulty}</Text>

                        <StyledButton type='tertiary' content={"Submit"} onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
};