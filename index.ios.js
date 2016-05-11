'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    View,
    TabBarIOS,
    Text
} from 'react-native';

import Index from './src/views/index'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <Index/>
        );
    }
}

AppRegistry.registerComponent('App', () => App);
