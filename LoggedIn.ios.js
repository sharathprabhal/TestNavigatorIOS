'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var TabBar = require('./TabBar.ios');

var LoggedIn = React.createClass({
	getInitialState() {
		return { }
	},

	render() {
		return (
			<View style={{ flex: 1 }}>
				<TabBar />
			</View>
		);
	}
});

module.exports = LoggedIn;