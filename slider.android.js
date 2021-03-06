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
    Slider,
    Text,
    View
} from 'react-native';

var ToastAndroid = require('./ToastAndroid')

class android_rn extends Component {

    render() {
        return (
            <View>
                <Slider
                    disabled={false}
                    maximumValue={100}
                    value={30}
                    style={styles.sliderContainer}></Slider>
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
    contentContainer: {
        backgroundColor: '#6A85B1',
    },
    rightContainer: {
        flex: 1,
    },
    sliderContainer:{
        marginTop:50,
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
