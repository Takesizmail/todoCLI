import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {THEME} from '../../Style/theme';

const AddTodo = ({onSubmit}) => {
    const [text, setText] = useState('');

    const pressHandler = () => {
        if (text.trim()) {
            onSubmit(text);
            setText('');
        } else {
            Alert.alert('The input cannot to be empty');
        }
    };

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="input the text"
                autoCorrect={false}
                autoCapitalize="words"
            />

            <Button
                style={styles.button}
                title="Add task"
                onPress={pressHandler}
                color={THEME.MAIN_COLOR}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    input: {
        color: '#212121',
        width: '60%',
        borderBottomWidth: 3,
        borderStyle: 'solid',
        borderColor: '#71da5a',
        padding: 5,
        fontSize: 16
    },
    button: {
        backgroundColor: '#71da5a',
        color: '#71da5a'
    }
});

export default AddTodo;
