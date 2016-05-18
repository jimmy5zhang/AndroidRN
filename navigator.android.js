/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  Image,
  Animated,
  LayoutAnimation,
  InteractionManager,
  Navigator,
  DrawerLayoutAndroid,
  BackAndroid,
  StyleSheet,
  Text,
  View
} from 'react-native';

var ToastAndroid = require('./ToastAndroid')

class android_rn extends Component {

  configureScene(route){
    return Navigator.SceneConfigs.FadeAndroid;
  }

  renderScene(router, navigator){
    var Component = null;this._navigator = navigator;
    switch(router.name){
      case "welcome":
        Component = WelcomeView;
        break;
      case "feed":
        Component = FeedView;
        break;
      default: //default view
        Component = DefaultView;
    }

    return <Component navigator={navigator} />
  }

  componentDidMount() {
    var navigator = this._navigator;
    BackAndroid.addEventListener('hardwareBackPress', function() {
      if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
      }
      return false;
    });
  }


  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress');
  }

  render() {
    return (
        <Navigator
            initialRoute={{name: 'welcome'}}
            configureScene={this.configureScene}
            renderScene={this.renderScene} />
    );
  }

}

var FeedView = React.createClass({
  goBack(){
    this.props.navigator.push({name:"default"});
  },

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome} onPress={this.goBack} >
            I am Feed View! Tab to default view!
          </Text>
        </View>
    )
  }
});


var WelcomeView = React.createClass({
  onPressFeed() {
    this.props.navigator.push({name: 'feed'});
  },


  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome} onPress={this.onPressFeed} >
            This is welcome view.Tap to go to feed view.
          </Text>
        </View>
    );
  }

});

var DefaultView = React.createClass({

  render(){
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Default view</Text>
        </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title:{
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
    color:"red"
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('android_rn', () => android_rn);
