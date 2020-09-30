import React, {useEffect, useState, useContext, useCallback} from 'react';
import {View, StyleSheet, FlatList, Image, Dimensions, Alert} from 'react-native';
import AddTodo from '../Component/AddTodo';
import TodoList from '../Component/todoList';
import { THEME } from '../Style/theme';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/ScreenContext';
import {apiGetAllTodo} from '../service/todoApi';
import AppLoader from '../Component/ui/AppLoader';

const MainScreen = () => {
    const { todos,
        addTodo,
        removeTodo,
        fetchTodos,
        loading,
        error,
        hideLoader,
        showError,
        cleanError,
        showLoader} = useContext(TodoContext);
    const { changeScreen } = useContext(ScreenContext);

    const widthWindow = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
    const [width, setWidth] = useState(widthWindow);

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
            setWidth(width);
        };
        Dimensions.addEventListener('change', update);
        return () => {
            Dimensions.removeEventListener('change', update);
        };
    });

    const loadTodos = useCallback( async ()=> await apiGetAllTodo(),[apiGetAllTodo])

    const fetchData = async () =>{
        showLoader();
        const response = await apiGetAllTodo();
        const todos = Object.keys(response.data).map(key=> ({id:key, ...response.data[key]}));
        fetchTodos(todos);
        hideLoader();
    }


    useEffect( ()=>{
        try{
            fetchData();
        } catch (error){
            showError('data from api not download')
        }

    },[])

    let content = (
        <FlatList
            style={{ width }}
            data={todos}
            keyExtractor={todo => todo.id}
            renderItem={({ item }) => (
                <TodoList onOpen={(todoId)=>changeScreen(todoId)} deleteTodo={removeTodo} todo={item} />
            )}
        />
    );

    if (!todos.length) {
        content = (
            <View style={styles.image__wrapper}>
                <Image style={styles.image} source={require('../Common/Image/no-items.png')} />
            </View>
        );
    }

    if(loading) {
        return <AppLoader/>
    }

    if(error) {
        Alert.alert(
            "Error",
            `Something bad happened (${error})`,
            [
                { text: "Clean Error and try Again", onPress: () =>{
                        cleanError();
                        fetchData();
                    } }
            ],
            { cancelable: false }

        )
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        padding: 10,
        fontSize: 20
    },
    image__wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
});

export default MainScreen;
