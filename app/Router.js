import React from 'react';
import { StyleSheet, Text, View, BackHandler, StatusBar, DeviceEventEmitter } from 'react-native';
import { Router,Scene, Tabs,Stack, Modal  } from 'react-native-router-flux';

import LoginPage from './page/Login';
import RegisterPage from './page/Register';
import RetrievePasswordPage from './page/RetrievePassword';
import HomePage from './page/Home';
import ListPage from './page/List';
import MinePage from './page/Mine';

export default class router extends React.Component{
    render(){
        return(
            <Router>
                <Stack  key='root'>
                    <Tabs
                        hideNavBar
                        key="tabbar"        // 唯一标识
                        activeBackgroundColor='#f00'
                        inactiveBackgroundColor='#00f'
                        tabBarStyle={styles.tabBarStyle}
                        labelStyle={styles.labelStyle}
                        // tabStyle={{backgroundColor:'#000'}}
                        lazy={true}
                        tabBarPosition='bottom'
                        showLabel={true}
                        swipeEnabled={true}//未显示出效果
                        animationEnabled={false}
                    >
                        <Scene key="home"
                            component={HomePage}
                            title="首页"
                            hideNavBar
                        />
                        <Scene key="list"
                            hideNavBar
                            component={ListPage}
                            title="列表页"
                        />
                        <Scene key="mine"
                            hideNavBar
                            component={MinePage}
                            title="我的"
                        />
                    </Tabs>
                    <Scene key="login"
                        component={LoginPage}
                        title="登陆"
                        initial
                    />
                    <Scene key="register"
                        component={RegisterPage}
                        title="注册"
                    />
                    <Scene key="retrievePassword"
                        component={RetrievePasswordPage}
                        title="忘记密码"
                    />
                </Stack>              
            </Router>
            )
    }
}
const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#eee',
        height:49,
    },
    labelStyle:{
        fontSize:16,
        color:'#fff'
    }
});
