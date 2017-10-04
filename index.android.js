import { AppRegistry } from 'react-native';
import { View } from 'react-native';
import App from './src/app';

const test = () => {
    return (
        <View style={{flex: 1, backgroundColor: '#000000'}}>
            <App />
        </View>
    )
}

AppRegistry.registerComponent('oneThousandChallenge', () => test);
