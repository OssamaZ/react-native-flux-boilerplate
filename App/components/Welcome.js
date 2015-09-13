/**
 * Welcome Message Component
 */
'use strict';

let React = require('react-native');
let AppStore = require('../stores/AppStore');

let {
  StyleSheet,
  Text,
  View,
} = React;

function _getStateFromStore() {
    return {
        message: AppStore.getMessage()
    };
}

let WelcomeComponent = React.createClass({
    
    getInitialState() {
        return _getStateFromStore()
    },

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    },

    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                    {this.state.message}
                </Text>
            </View>
        );
    },

    _onChange() {
        this.setState(_getStateFromStore());
    }


});

let styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

module.exports = WelcomeComponent;
