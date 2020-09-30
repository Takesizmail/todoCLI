import React from 'react';
import {View, ActivityIndicator, StyleSheet, Platform} from 'react-native'
import {THEME} from '../../Style/theme';
const AppLoader = () => {
    return (
        <View style={styles.container} >
            <ActivityIndicator color={THEME.MAIN_COLOR} size={Platform.OS === "android" ? 100 : "large"}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginVertical: 25
    }
})

export default AppLoader;
