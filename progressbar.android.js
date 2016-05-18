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
  Picker,
  StyleSheet,
  Text,
  View
} from 'react-native';

var ProgressBar = require('ProgressBarAndroid');

class android_rn extends Component {
  render() {
    return (
        <ProgressBar
            style={{width: 45, height: 45}}
            styleAttr="Small" />
    );
  }
}

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
