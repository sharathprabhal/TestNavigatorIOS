'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS
} = React;

var ProfileSubView = React.createClass({
	render() {
		return (
			<View style={{marginTop: 64}}>
				Profile subview
			</View>
		);
	}
});

var ProfileInnerView = React.createClass({
	gotoSubView() {
		this.props.navigator.push({
			component: ProfileInnerView,
			title: 'Profile subview',
		});
	},
	render() {
		return (
			<View style={{marginTop: 64}}>
				<Text>Profile view</Text>
				<TouchableHighlight 
					underlayColor={'red'}
					onPress={ this.gotoSubView }
				>
					<Text>Click here to goto subview</Text>
				</TouchableHighlight>
			</View>
		);
	}
});

var Profile = React.createClass({
	getInitialState() {
		return { }
	},
	render() {
		return (
			<NavigatorIOS
        ref='nav'
        style={{
          flex:1,
        }}
        initialRoute={{
          title: 'Profile',
          component: ProfileInnerView,
        }}
      />
		);
	}
});

module.exports = Profile;