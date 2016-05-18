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

class android_rn extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {renderPlaceholderOnly: true};
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({renderPlaceholderOnly: false});
    });
  }

  render() {
    if (this.state.renderPlaceholderOnly) {
      return this._renderPlaceholderView();
    }

    return (
        <View>
          <Text>Your full view goes here</Text>
        </View>
    );
  }


  _renderPlaceholderView() {
    return (
        <View>
          <Text>Loading...</Text>
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
