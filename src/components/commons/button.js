import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { colors, baseline } from '../../styles';

const Button = ({ onPress, children, style }) => {
    return (
        <View>
            <TouchableOpacity
            onPress={onPress}
            style={{...styles.buttonStyle, ...style }}
            >
                <Text style={styles.textStyle}>{children}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    buttonStyle: {
        backgroundColor: colors.accentColor,
        padding: baseline,
        borderRadius: 3,
    },
    textStyle: {
        color: colors.iconPrimary
    }
}

export { Button }
