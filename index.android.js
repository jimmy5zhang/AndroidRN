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
    ScrollView,
    StyleSheet,
    TextInput,
    Switch,
    Slider,
    Text,
    View,
    ToolbarAndroid,
    TouchableHighlight,
    TouchableNativeFeedback,
    ViewPagerAndroid,
    WebView,
    Alert
} from 'react-native';

var alertMsg = "在飞机上主要安全，请勿靠近危险物品";

class android_rn extends Component {
    render() {

        return (
           <View>
               <Text>你好</Text>
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
    webView: {
        backgroundColor: 'lightgray',
        height: 350,
    },
    viewPager: {
        flex: 1,
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    },
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
    contentContainer: {
        backgroundColor: '#6A85B1',
    },
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    rightContainer: {
        flex: 1,
    },
    sliderContainer:{
        marginTop:50,
        flex: 1,
    },
    switchContainer:{
        marginTop:50,
        width:200
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
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    },
});

AppRegistry.registerComponent('android_rn', () => android_rn);
