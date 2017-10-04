import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ProjectView extends Component {
    render() {
        return (
            <View >
                <Text>projectView</Text>
            </View>
        )
    }
}

ProjectView.navigationOptions = {
    title: 'project',
}

export default ProjectView;