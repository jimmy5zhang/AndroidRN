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
  StyleSheet,
  Text,
  View
} from 'react-native';

var ToastAndroid = require('./ToastAndroid')

class android_rn extends Component {

      render() {

        ToastAndroid.show('helloToast', ToastAndroid.SHORT);
        return (
          <View style={styles.container}>
            <Text style={styles.title}>
              Hello ToastAndroid
            </Text>
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
  title: {
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
