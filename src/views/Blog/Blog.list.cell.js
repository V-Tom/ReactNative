'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

export default class BlogListCell extends Component {
    constructor(props) {
        super(props);

        let styles = {};
        this.state = {styles};

        this.__init();
    }

    componentDidMount() {

    }

    __init() {
        this.__createStyles();
    }

    __createStyles() {
        this.state.styles = StyleSheet.create({
            container: {
                borderColor: '#E2E2E2',
                borderBottomWidth: 1,
                flex: 1
            },
            title: {
                fontSize: 18,
                color: "#0086b3",
                paddingBottom: 3
            },
            subtitle: {
                paddingLeft: 5,
                fontSize: 14,
                paddingBottom: 3
            },
            preview: {
                paddingLeft: 5,
                fontSize: 14,
                color: "#a3a3a3",
                paddingBottom: 3
            },
            meta: {
                paddingLeft: 5,
                fontSize: 12,
                color: "gray",
                fontStyle: "italic",
                paddingBottom: 3
            }
        });
    }

    render() {
        const {data,blogListOnClick}=this.props;
        const {container,title,subtitle,preview,meta}=this.state.styles;
        return (
            <TouchableHighlight underlayColor={'#eeeeee'} style={{marginBottom:10}}
                                onPress={()=>blogListOnClick}>
                <View style={container}>
                    <Text style={title}>{data.title}</Text>
                    <Text style={subtitle}>{data.subtitle}</Text>
                    <Text style={preview}>{data.preview}</Text>
                    <Text style={meta}>{data.meta}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}