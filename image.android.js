/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class android_rn extends Component {


  render() {

    return (
        <View style={styles.container}>
          <Image
              source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
              style={{width: 400, height: 400}}>
            <Text style={styles.title}>Hello React Native</Text>
          </Image>
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
