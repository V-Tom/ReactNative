'use strict';
import React, { Component,PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    View,
    TabBarIOS,
    Text
} from 'react-native';


import Blog from './components/blog'
import Labs from './components/labs'
import About from './components/about'
import Setting from './components/setting'

import BlogIcon from '../asserts/TabBar/Blog'
import LabsIcon from '../asserts/TabBar/Labs'
import AboutIcon from '../asserts/TabBar/About'
import SettingIcon from '../asserts/TabBar/Setting'

export default class Index extends Component {
    constructor() {
        super()
        let selectedTab="Blog";
        this.state = {selectedTab};
        this.__init();
    }

    __init() {
        this.__createStyles();
    }

    __createStyles() {
        this.state.styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#E7EAEC'
            },
            navigator:{
                backgroundColor: '#E7EAEC'
            },
            content: {
                flex: 1,
                alignItems: 'center'
            },
            text: {
                flex: 1,
                alignItems: 'center',
                color: "white",
                margin: 50
            }
        });
    }

    componentDidMount() {

    }

    render() {
        const {styles,selectedTab}=this.state;
        return (
                <TabBarIOS barTintColor="rgba(0,0,0,.3)" tintColor="#fff" style={styles.container}
                           selectedTab={selectedTab}>

                    <TabBarIOS.Item title="博客" icon={{uri:BlogIcon,scale:25}}
                                    selected={selectedTab == "Blog"}
                                    onPress={()=>
                                    this.setState({
                                        selectedTab: 'Blog'
                                    })
                    }>
                        <NavigatorIOS style={styles.container}
                                      tintColor={'#333344'} translucent={true}
                                      initialRoute={{
                                        title: '我的博客',
                                        component: Blog
                                      }}
                                      itemWrapperStyle={styles.navigator}
                        />
                    </TabBarIOS.Item>

                    <TabBarIOS.Item title="实验室" icon={{uri:LabsIcon,scale:25}}
                                    selected={selectedTab == "Labs"}
                                    onPress={()=>
                                    this.setState({
                                        selectedTab: 'Labs'
                                    })}>
                        <NavigatorIOS style={styles.container} tintColor={'#333344'}
                                      initialRoute={{
                                        title: '实验室',
                                        component: Labs
                                      }}
                                      itemWrapperStyle={styles.navigator}
                        />
                    </TabBarIOS.Item>

                    <TabBarIOS.Item title="关于" icon={{uri:AboutIcon,scale:25}}
                                    selected={selectedTab == "About"}
                                    onPress={()=>
                                      this.setState({
                                        selectedTab: 'About'
                                    })}>
                        <NavigatorIOS style={styles.container}
                                      tintColor={'#333344'}
                                      initialRoute={{
                                        title: '关于',
                                        component: About
                                      }}
                                      itemWrapperStyle={styles.navigator}
                        />
                    </TabBarIOS.Item>

                    <TabBarIOS.Item title="设置" icon={{uri:SettingIcon,scale:25}}
                                    selected={selectedTab == "Setting"}
                                    onPress={()=>
                                      this.setState({
                                        selectedTab: 'Setting'
                                    })}>
                        <NavigatorIOS style={styles.container}
                                      tintColor={'#333344'}
                                      initialRoute={{
                                        title: '设置',
                                        component: Setting
                                      }}
                                      itemWrapperStyle={styles.navigator}
                        />
                    </TabBarIOS.Item>
                </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('App', () => App);
