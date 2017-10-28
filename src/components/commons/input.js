import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import { baseline } from '../../styles';

class Input extends Component {
    render() {
        return (
            <View>
                <Text style={styles.textStyle}>{this.props.label}</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={this.props.value}
                    onChangeText={text => this.props.onChangeText(text)}
                />
            </View>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
    },
    inputStyle: {
        height: baseline * 4,
        borderColor: 'gray',
        borderWidth: 1,
    }
}

export { Input }