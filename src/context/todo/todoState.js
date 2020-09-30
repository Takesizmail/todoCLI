import React, {useReducer} from 'react';
import {todoReducer} from './todoReducer';
import {TodoContext} from './todoContext';
import {
    ADD_TODO,
    API_PATH,
    CLEAR_ERROR,
    FETCH_TODOS, GET_TODO,
    HIDE_LOADER,
    REMOVE_TODO,
    SHOW_ERROR,
    SHOW_LOADER,
    UPDATE_TODO,
} from '../types';
import {apiAddTodo, apiDelete} from '../../service/todoApi';

const TodoState = ({children}) => {
    const initialState = {
        todos: [],
        loading: false,
        error: null
    };
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = async title => {
        try{
            const response =  await apiAddTodo(title);
            const data = response.data;
            dispatch({ type: ADD_TODO, title, id: data.name })
        }catch(error){
            console.log('error', error);
        }
    };
    const getTodo = (id,todos) => dispatch({type: GET_TODO, todos })
    const removeTodo = async index => {
        try{
            const response = await apiDelete(index)
            console.log(response.status, 'response');
           if(response.data === 200){
               console.log('here');
               dispatch({type: REMOVE_TODO, index});
           }
        } catch (error){

        }

    }

    const updateTodo = (index, title) => dispatch({type: UPDATE_TODO, index, title});
    const showLoader = () => dispatch({type: SHOW_LOADER});
    const hideLoader = () => dispatch({type: HIDE_LOADER});
    const showError = error => dispatch({type: SHOW_ERROR, error});
    const cleanError = () => dispatch({type: CLEAR_ERROR});
    const fetchTodos = todos => dispatch({type: FETCH_TODOS, todos});

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                error: state.error,
                loading: state.loading,
                addTodo,
                removeTodo,
                updateTodo,
                getTodo,
                fetchTodos,
                hideLoader,
                showError,
                cleanError,
                showLoader
            }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoState;
