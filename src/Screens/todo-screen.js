import React, {useState, useContext} from 'react';
import {View, StyleSheet, Dimensions, Alert, Text} from 'react-native';
import {THEME} from '../Style/theme';
import AppCard from '../Component/ui/AppCard';
import EditModal from '../Component/EditModal';
import AppTextBold from '../Component/ui/AppTextBold';
import AppButtons from '../Component/ui/AppButton';
import {ScreenContext} from '../context/screen/ScreenContext';
import {TodoContext} from '../context/todo/todoContext';

const TodoScreen = () => {
    const {todos, removeTodo, updateTodo} = useContext(TodoContext);
    const {todoId, changeScreen} = useContext(ScreenContext);

    const [modal, setModal] = useState(false);

    const findTodo = (todos, index) => {
        return todos.find(({id}) => id === index);
    };

    const todo = findTodo(todos, todoId);

    const closeSaveModal = (index, newTitle) => {
        updateTodo(index, newTitle);
        setModal(false);
    };

    const deleteTask = id => {
        const deleteTodo = findTodo(todos, id);

        Alert.alert(
            'Delete task',
            `Are u really want delete task ${deleteTodo.title} `,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Delete'),
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => {
                        changeScreen(null);
                        removeTodo(id);
                    }
                }
            ],
            {cancelable: false}
        );
    };

    return (
        <View style={styles.todo__wrapper}>
            <EditModal
                visible={modal}
                closeModal={() => setModal(false)}
                todo={todo}
                saveNewTitle={closeSaveModal}
            />

            <AppCard style={styles.card}>
                <AppTextBold style={styles.todo__text}> {todo.title} </AppTextBold>
                <AppButtons
                    color={THEME.MAIN_COLOR}
                    onPress={() => setModal(true)}
                    style={styles.editIcon}>
                    <Text> Edit</Text>
                </AppButtons>
            </AppCard>

            <View style={styles.button__container}>
                <View style={styles.button}>
                    <AppButtons onPress={() => changeScreen(null)} color={THEME.GREY_COLOR}>
                        <Text> Back</Text>
                    </AppButtons>
                </View>
                <View style={styles.button}>
                    <AppButtons onPress={() => deleteTask(todo.id)} color={THEME.DANGER_COLOR}>
                        <Text> Delete</Text>
                    </AppButtons>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button__container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    todo__text: {
        textAlign: 'center',
        fontSize: 16
    },
    card: {
        marginBottom: 20,
        padding: 15,
        alignItems: 'center'
    },
    editIcon: {
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    button: {
        width: Dimensions.get('window').width / 3
    },
    todo__wrapper: {
        marginTop: 20
    }
});

export default TodoScreen;
