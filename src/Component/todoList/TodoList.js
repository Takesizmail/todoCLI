import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../ui/AppText';

const TodoList = ({ todo, deleteTodo, onOpen }) => {
    return (
        <TouchableOpacity
            onPress={() => onOpen(todo.id)}
            onLongPress={() => {
                deleteTodo(todo.id);
            }}
        >
            <View style={styles.todo}>
                <AppText>{todo.title}</AppText>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#eee',
        marginBottom: 10,
        borderRadius: 4
    }
});

export default TodoList;
