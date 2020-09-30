import React from 'react';
import {Text, StyleSheet} from 'react-native';

/**
 *
 * @param props.style = style for component
 * @param props.children = text
 * @returns {JSX.Element}
 * @constructor
 */
const AppTextBold = props => {
    return <Text style={{...styles.default, ...props.style}}> {props.children} </Text>;
};

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-bold'
    }
});

export default AppTextBold;
