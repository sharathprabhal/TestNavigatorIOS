'use strict';

var React = require('react-native');
var Home = require('./Home.ios');
var Profile = require('./Profile.ios');


var {
  StyleSheet,
  Text,
  View,
  TabBarIOS
} = React;

var SMXTabBarIOS = require('SMXTabBarIOS');
var SMXTabBarItemIOS = SMXTabBarIOS.Item;

var TabBar = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'profile'
    };
  },
  render: function () {
    return (
      <SMXTabBarIOS
        selectedTab={this.state.selectedTab}
      >
        <SMXTabBarItemIOS
          name="home"
          iconName={'ion|ios-home'}
          title={''}
          iconSize={32}
          accessibilityLabel="Home Tab"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}>
          <Home/>
        </SMXTabBarItemIOS>
        <SMXTabBarItemIOS
            name="profile"
            iconName={'ion|person'}
            title={''}
            iconSize={32}
            accessibilityLabel="Profile Tab"
            selected={this.state.selectedTab === 'profile'}
            onPress={() => {
            this.setState({
              selectedTab: 'profile',
            });
          }}>
          <Profile />
        </SMXTabBarItemIOS>
      </SMXTabBarIOS>
    );
  }
});

module.exports = TabBar;