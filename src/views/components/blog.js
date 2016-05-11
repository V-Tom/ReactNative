'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';
export default class Blog extends Component {
    constructor(props) {
        super(props);

        let blogList = [];
        this.state = {blogList};
        this.__init();
    }

    componentDidMount() {
        this.__fetchData();
    }

    __init() {
        this.__createStyles();
    }

    __createStyles() {
        this.state.styles = StyleSheet.create({
            container: {
                backgroundColor: '#eeeeee',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        });
    }

    __fetchData(page = 1) {
        fetch("https://t-tom.me/api/v1/blog/list/?limit=10&page=1")
            .then(response=>response.json())
            .catch(err=> {

            })
            .then(responseData=> {
                console.log(responseData)
            })
    }

    render() {
        return (
            <ScrollView>
                <Text>{"view"}</Text>
                <Text>{"view'"}</Text>
            </ScrollView>
        );
    }
}