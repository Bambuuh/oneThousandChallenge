import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { addNavigationHelpers } from 'react-navigation';
import { View } from 'react-native';

import reducers from './reducers';
import AppNavigator from './navigationConfig';


class NavigatorComponent extends Component {
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                })}
            />
        );
    }
}

const mapStateToProps = ({ nav }) => ({ nav });
const Navigator = connect(mapStateToProps)(NavigatorComponent);

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Navigator />
            </Provider>
        );
    }
}

export default App;
