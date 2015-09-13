/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 
'use strict';

import React from 'react-native';
import Welcome from './components/Welcome';

let {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

class Application extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Welcome />

        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Application', () => Application);
