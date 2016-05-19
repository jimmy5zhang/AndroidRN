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
    ToolbarAndroid
} from 'react-native';

var toolbarActions =[
    {title: 'Create', icon:require('./images/ic_set.png'), show: 'always'},
    {title: 'Filter'},
    {title: 'Settings', icon:require('./images/ic_set.png'), show: 'always'},
];

class android_rn extends Component {

    render() {
        return (

            <ToolbarAndroid
                actions={toolbarActions}
                navicon={require('./images/ic_logo.png')}
                style={styles.toolbar}
                subtitle="副标题"
                title="主标题"></ToolbarAndroid>

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
});

AppRegistry.registerComponent('android_rn', () => android_rn);
