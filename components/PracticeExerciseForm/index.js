import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './styles';
import { Formik } from 'formik';
import StyledButton from '../StyledButton';
import * as yup from 'yup';

const practiceExerciseSchema = yup.object({
    name: yup.string()
        .required()
        .min(1),
    length: yup.string()
        .min(1),
    description: yup.string()
        .min(1),
    link: yup.string()
        .min(5)
})

export default function PracticeExerciseForm({ addPractice }) {
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ name: '', length: '', description: '', link: '' }}
                validationSchema={practiceExerciseSchema}
                onSubmit={(values) => {
                    addPractice(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Practice exercise'
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                            onBlur={props.handleBlur('name')}
                        />
                        <Text style={styles.errorText}>{props.errors.name}</Text>

                        <TextInput
                            style={styles.input}
                            placeholder='Length'
                            onChangeText={props.handleChange('length')}
                            value={props.values.length}
                            onBlur={props.handleBlur('length')}
                        />
                        <Text style={styles.errorText}>{props.errors.length}</Text>

                        <TextInput
                            multiline minHeight={50}
                            style={styles.input}
                            placeholder='Description'
                            onChangeText={props.handleChange('description')}
                            value={props.values.description}
                            onBlur={props.handleBlur('description')}
                        />
                        <Text style={styles.errorText}>{props.errors.description}</Text>

                        <TextInput
                            style={styles.input}
                            placeholder='Link to tutorial'
                            onChangeText={props.handleChange('link')}
                            value={props.values.link}
                            onBlur={props.handleBlur('link')}
                        />
                        <Text style={styles.errorText}>{props.errors.link}</Text>

                        <StyledButton type='tertiary' content={"Submit"} onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
};