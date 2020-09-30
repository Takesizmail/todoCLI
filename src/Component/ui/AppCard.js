import React from 'react';
import { View, StyleSheet } from 'react-native';

const AppCard = props => {
    return <View style={{ ...styles.default, ...props.style }}>{props.children}</View>;
};

const styles = StyleSheet.create({
    default: {
        padding: 20,
        // borderWidth:2,
        // borderColor: "green",
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowRadius: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 10, height: 10 },
        elevation: 12,
        borderRadius: 10
    }
});

export default AppCard;
