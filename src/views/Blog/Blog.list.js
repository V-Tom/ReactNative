'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    ListView
} from 'react-native';

export default class BlogList extends Component {
    constructor(props) {
        super(props);

        let styles={};
        this.state={styles};

        this.__init();
    }

    componentDidMount() {
        this.__createStyles();
    }

    __init(){
        this.__createStyles();
    }

    __createStyles(){
        this.state.styles = StyleSheet.create({
            blogListView:{
                flex: 1,
                padding: 10,
                backgroundColor: '#ffffff',
                paddingBottom: 0
            }
        });
    }
    __renderTopicListCell(){

    }
    render() {
        const {dataSource}=this.props;
        const {styles}=this.state;
        return (
            <ScrollView showsHorizontalScrollIndicator={true}>
                <ListView
                    style={styles.blogListView}
                    ref="listview"
                    pageSize={5}
                    dataSource={dataSource}
                    scrollRenderAheadDistance={10}
                    onEndReachedThreshold={20}
                    onEndReached={this.__onEndReached.bind(this)}
                    renderRow={this.__renderTopicListCell.bind(this)}
                    automaticallyAdjustContentInsets={false}
                    showsVerticalScrollIndicator={false}/>
            </ScrollView>
        );
    }
}