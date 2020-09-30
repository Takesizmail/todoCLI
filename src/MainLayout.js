import React, {useContext} from 'react';
import {View, StyleSheet,Image} from 'react-native';
import Navbar from './Component/Navbar';
import {THEME} from './Style/theme';
import MainScreen from './Screens/mainScreen';
import TodoScreen from './Screens/todo-screen';
import {ScreenContext} from './context/screen/ScreenContext';
import * as SVG from '../assets/img/Dual Ring-2.2s-200px.svg'
const MainLayout = () => {
    const {todoId} = useContext(ScreenContext);

    return (
        <View>
            <Navbar title="Todo App" />
            <View style={styles.container}>{todoId ? <TodoScreen /> : <MainScreen />}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 15
    },
    todos: {
        marginTop: 15
    }
});

export default MainLayout;
