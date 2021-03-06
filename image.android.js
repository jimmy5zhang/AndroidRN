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
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  View
} from 'react-native';

var ToastAndroid = require('./ToastAndroid')

class android_rn extends Component {

  render() {
    return (
        <View>
          <Image
              style={styles.icon}
              source={require('./images/ic_logo.png')}
              style={{width: 200, height: 200}}
              />
          <Image
              style={styles.logo}
              source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
              style={{width: 200, height: 200}}
              />
        </View>
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
