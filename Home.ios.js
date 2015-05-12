'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var Home = React.createClass({
	getInitialState() {
		return { }
	},

	render() {
		return (
			<View style={{marginTop: 64}}>
				<Text>Home View</Text>
			</View>
		);
	}
});

module.exports = Home;