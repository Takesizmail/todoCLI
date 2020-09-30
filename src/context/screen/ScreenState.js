import React, {useReducer} from 'react';
import {ScreenContext} from './ScreenContext';
import {screenReducer} from './ScreenReducer';
import {CHANGE_SCREEN} from '../types';

const ScreenState = ({children}) => {
    const [state, dispatch] = useReducer(screenReducer, null);

    const changeScreen = todoId => dispatch({type: CHANGE_SCREEN, payload: todoId});

    return (
        <ScreenContext.Provider
            value={{
                todoId: state,
                changeScreen
            }}>
            {children}
        </ScreenContext.Provider>
    );
};
export default ScreenState;
