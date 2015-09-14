/**
 * Welcome Message Component
 */

'use strict';

import React from 'react-native';
import AppStore from '../stores/AppStore';
import AppActions from '../actions/AppActions';

let {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} = React;

function _getStateFromStore() {
    return {
        message: AppStore.getMessage()
    };
}

class WelcomeComponent extends React.Component {
    
  constructor(props) {
    super(props);

    this.state = _getStateFromStore();
    // BIND 'this' (ES6 React)
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <View>
        <TouchableHighlight 
          style={{alignSelf: 'center'}}
          onPress={this._changeMessageStore}
          underlayColor="transparent">
          <Text style={styles.button}>Change Message in Store</Text>
        </TouchableHighlight>
        <Text style={styles.welcome}>
          {this.state.message}
        </Text>
      </View>
    );
  }

  _onChange() {
      this.setState(_getStateFromStore());
  }

  _changeMessageStore() {
      AppActions.setWelcomeMessage('Store message Changed !');
  }

}

let styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        margin: 10,
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: '#33CCFF',
        color: 'white',
        padding: 10,
    }
});

export default WelcomeComponent;
