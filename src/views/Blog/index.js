'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    AlertIOS,
    ListView,
    ActivityIndicatorIOS,
    TouchableHighlight
} from 'react-native';

import ArticleDetail from './navigation/article.detail'

export default class Blog extends Component {
    constructor(props) {
        super(props);

        let page = 1;
        let isLoadDataReady = false;
        let dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {page, isLoadDataReady, dataSource};
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

            listView: {
                flex: 1,
                padding: 10,
                backgroundColor: '#ffffff',
                paddingBottom: 0
            },
            listItemView: {
                borderColor: '#E2E2E2',
                borderBottomWidth: 1,
                flex: 1
            },
            listItemTitle: {
                fontSize: 18,
                color: "#0086b3",
                paddingBottom: 3
            },
            listItemSubTitle: {
                paddingLeft:5,
                fontSize: 14,
                paddingBottom: 3
            },
            listItemPreview: {
                paddingLeft:5,
                fontSize: 14,
                color: "#a3a3a3",
                paddingBottom: 3
            },
            listItemMeta: {
                paddingLeft:5,
                fontSize: 12,
                color: "gray",
                fontStyle: "italic",
                paddingBottom: 3
            }
        });
    }

    __fetchData(page = 1) {
        fetch(`https://t-tom.me/api/v1/blog/list/?limit=10&page=${page}`)
            .then(response=>response.json())
            .catch(err=> {
                AlertIOS.alert(
                    '😂',
                    "获取博客列表数据失败,请重新进入!",
                    [
                        {text: '让我再试一次~', onPress: () => console.log('Reload Data!')}
                    ]
                );
            })
            .then(responseData=> {
                responseData.data = responseData.data.concat(responseData.data);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data),
                    page: page,
                    isLoadDataReady: true
                })
            })
    }

    __onEndReached() {
        console.log("onEndReached");
        //let {isLoadDataReady,page}=this.state;
        //if (!isLoadDataReady) {
        //    page += 1;
        //    this.__fetchData(page)
        //}
    }

    __renderLogin() {
        return (
            <ScrollView showsHorizontalScrollIndicator={true}>
                <View style={{height: 50}}>
                    <ActivityIndicatorIOS color="#356DD0" style={{marginVertical: 30,marginBottom: 30}}/>
                </View>
            </ScrollView>
        );
    }

    __renderTopicListCell(data, sectionID, rowID) {
        const {listItemView,listItemTitle,listItemSubTitle,listItemPreview,listItemMeta}=this.state.styles;
        return (
            <TouchableHighlight underlayColor={'#eeeeee'} style={{marginBottom:10}}
                                onPress={()=>this.__blogListOnclick(this,data)}>
                <View style={listItemView}>
                    <Text style={listItemTitle}>{data.title}</Text>
                    <Text style={listItemSubTitle}>{data.subtitle}</Text>
                    <Text style={listItemPreview}>{data.preview}</Text>
                    <Text style={listItemMeta}>{data.meta}</Text>
                </View>
            </TouchableHighlight>
        )

    }

    __blogListOnclick(self,data) {
            self.props.navigator.push({
                title: data.title ,
                component: ArticleDetail,
                passProps: {
                    articleId: data.articleId
                }
            });
    }

    __renderBlogList() {
        const {dataSource,styles}=this.state;
        return (
            <ScrollView showsHorizontalScrollIndicator={true}>
                <ListView
                    style={styles.listView}
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

    render() {
        const {isLoadDataReady}=this.state;
        if (!isLoadDataReady) {
            return this.__renderLogin();
        } else {
            return this.__renderBlogList();
        }
    }
}