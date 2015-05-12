'use strict';

var React = require('react-native');
var async = require('async');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS,
  ActivityIndicatorIOS
} = React;

var LoggedIn = require('./LoggedIn.ios');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 500
  },
});

var Login = React.createClass({
  getInitialState() {
    return {};
  },

  login() {
    setTimeout(() => {
      this.props.navigator.replace({
        component: LoggedIn,
        title: 'home',
        passProps: {
          navigator: this.props.navigator
        }
      });
    }, 1000);
  },

  render() {

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.login}>
          <Text>
            Login
          </Text>
        </TouchableHighlight>
      </View>
    );
  
    
  }
});

module.exports = Login;