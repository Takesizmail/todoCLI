import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback
} from 'react-native';
import AppTextBold from './AppTextBold';
import { THEME } from '../../Style/theme';

const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR, style = {} }) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    return (
        <Wrapper onPress={onPress} activeOpacity={0.7}>
            <View style={{ ...styles.button, backgroundColor: color, ...style }}>
                <AppTextBold style={styles.text}>{children}</AppTextBold>
            </View>
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        letterSpacing: 0.1
    }
});

export default AppButton;
