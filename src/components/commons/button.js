import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { iconPrimary, accentColor } from '../../colorTheme';

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
        backgroundColor: accentColor,
        padding: 10,
        borderRadius: 3,
    },
    textStyle: {
        color: iconPrimary
    }
}

export { Button }
