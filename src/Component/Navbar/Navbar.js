import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { THEME } from '../../Style/theme';
import AppTextBold from '../ui/AppTextBold';

const Navbar = props => {
    return (
        <View
            style={{
                ...styles.container,
                ...Platform.select({
                    ios: styles.containerIOS,
                    android: styles.containerAnd
                })
            }}
        >
            <AppTextBold style={styles.text}>{props.title}</AppTextBold>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 15,
        paddingTop: 40,
        borderRadius: 4,
        justifyContent: 'center'
    },
    containerAnd: {
        backgroundColor: THEME.MAIN_COLOR
    },
    containerIOS: {
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderColor: THEME.MAIN_COLOR
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        color: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
    }
});

export default Navbar;
