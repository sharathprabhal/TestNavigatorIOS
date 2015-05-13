/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} = React;

var Login = require('./Login.ios');
var LoggedIn = require('./LoggedIn.ios');

var TestNavigatorIOS = React.createClass({
  render() {
    return (
      <Navigator
        style={{
          flex:1,
        }}
        initialRoute={{
          title: 'Login',
        }}
        renderScene={
          (route, navigator) => {
            if (route.id === 'loggedIn') {
              return <LoggedIn />;
            }
            return <Login />
          }
        }
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestNavigatorIOS', () => TestNavigatorIOS);
