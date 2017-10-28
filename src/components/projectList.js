import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';

import { colors } from '../styles';
import { Button } from './commons';

class ProjectList extends Component {

    renderProjects() {
        const { projects, navigation } = this.props;
        if (projects.length === 0) {
            return (
                <View>
                    <Text>You don't seem to have any projects yet</Text>
                    <Text>How about creating one?</Text>
                    <Button
                        onPress={() => navigation.navigate('CreateProject')}
                        style={styles.buttonStyle}
                    >Create Project</Button>
                </View>
            )
        }

        return projects.map(project => <Text key={project.name} >{project.name}</Text>);
    }

    render() {
        return (
            <View>
                {this.renderProjects()}
            </View>
        )
    }
}

const styles = {
    wrapperStyle: {
        backgroundColor: 'red',
    },
    buttonStyle: {
        alignSelf: 'center',
    }
}

ProjectList.navigationOptions = {
    title: 'Projects',
    headerTitleStyle: { color: colors.iconPrimary },
    headerStyle: { backgroundColor: colors.darkPrimary }
}

const mapStateToProps = ({ projects }) => ({ projects });

export default connect(mapStateToProps)(ProjectList);
