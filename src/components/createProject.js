import React, { Component } from 'react';
import { View } from 'react-native';

import { colors, baseline } from '../styles';
import { Input } from './commons';


class CreateProject extends Component {

    constructor(props) {
        super(props);

        this.state = { input: '' };
    }

    render() {
        return (
            <View>
                <Input
                    style={styles.inputStyles}
                    label="Test"
                    value={this.state.value}
                    onChangeText={(input) => this.setState({ input })}
                />
            </View>
        );
    }
}

const styles = {
    inputStyles: {
        paddingLeft: baseline * 2,
        paddingRight: baseline * 2,
    }
}

CreateProject.navigationOptions = {
    title: 'Create project',
    headerTitleStyle: { color: colors.iconPrimary },
    headerStyle: { backgroundColor: colors.darkPrimary }
}

export default CreateProject;