import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ERROR,
    CLEAR_ERROR,
    FETCH_TODOS,
} from '../types';

const handlers = {
    [ADD_TODO]: (state, {title}) => ({
        ...state,
        todos: [
            ...state.todos,
            {
                id: Date.now().toString(),
                title
            }
        ]
    }),
    [REMOVE_TODO]: (state, {index}) => ({
        ...state,
        todos: state.todos.filter(({id}) => id !== index)
    }),
    [UPDATE_TODO]: (state, {index, title}) => ({
        ...state,
        todos: state.todos.map(todo => {
            if (todo.id === index) todo.title = title;
            return todo;
        })
    }),
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [HIDE_LOADER]: state => ({...state, loading: false}),
    [SHOW_ERROR]: (state, {error}) => ({...state, error}),
    [CLEAR_ERROR]: state => ({...state, error: null}),
    [FETCH_TODOS]: (state, {todos}) => ({...state, todos}),

    DEFAULT: state => state
};
export const todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
};
