import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {
    title: string,
    isActive?: boolean
}

export function EnvironmentButton ({
    title,
    isActive = false,
    ... rest
} : EnvironmentButtonProps) {
    return (
        <RectButton
            style={[
                styles.container,
                isActive && styles.containerActive
            ]}
            {... rest}                
        >
            <Text style={[
                styles.text,
                isActive && styles.textActive
            ]}>
                { title }
            </Text>           
        </RectButton>
    )
};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: colors.shape,
        width: 76,
        height: 40,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 12,
        marginHorizontal: 5
    },
    containerActive: {        
        backgroundColor: colors.green_light
    },
    text: {
        color: colors.heading,
        fontFamily: fonts.text,
        textAlign: 'center'
    },
    textActive: {
        fontFamily: fonts.heading,
        color: colors.green_dark,            
        textAlign: 'center'
    }
});