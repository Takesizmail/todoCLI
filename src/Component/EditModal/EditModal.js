import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native';
import { THEME } from '../../Style/theme';
import AppButton from '../ui/AppButton';

const EditModal = ({ visible, closeModal, todo, saveNewTitle }) => {
    const [text, setText] = useState(todo.title);

    const saveTitle = () => {
        if (text.trim().length > 5) {
            saveNewTitle(todo.id, text);
        } else
            Alert.alert('Error', 'Please write more than 5 symbols', [
                {
                    text: 'OK',
                    onPress: () => null,
                    style: 'cancel'
                }
            ]);
    };

    const cancelHandle = () =>{
        setText(todo.title);
        closeModal()
    }

    return (
        <Modal visible={visible} animationType="fade">
            <View style={styles.modal__container}>
                <TextInput style={styles.modal__input} value={text} onChangeText={setText} />
                <View style={styles.modal__buttons}>
                    <AppButton color={THEME.DANGER_COLOR} onPress={cancelHandle}>
                        Cancel
                    </AppButton>
                    <AppButton color={THEME.COLOR_SUCCESS} onPress={saveTitle}>
                        Save
                    </AppButton>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal__container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#212121'
    },
    modal__input: {
        fontSize: 18,
        color: THEME.MAIN_COLOR,
        padding: 10,
        width: '70%',
        borderBottomWidth: 1,
        borderColor: '#212121',
        borderBottomColor: THEME.MAIN_COLOR
    },
    modal__buttons: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%'
    }
});

export default EditModal;
