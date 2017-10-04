import React from 'react';
import { AppRegistry } from 'react-native';
import { View } from 'react-native';
import App from './src/app';

const test = () => {
    return (
        <View style={{flex: 1, backgroundColor: 'red'}}>
            <App style={{backgroundColor: '#000000'}} />
        </View>
    )
}

AppRegistry.registerComponent('oneThousandChallenge', () => test);
