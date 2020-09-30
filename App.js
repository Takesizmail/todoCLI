/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ScreenState from './src/context/screen/ScreenState';
import TodoState from './src/context/todo/todoState';
import MainLayout from './src/MainLayout';

const App = () => {
    return (
        <ScreenState>
            <TodoState>
                <MainLayout />
            </TodoState>
        </ScreenState>
    );
};

export default App;
