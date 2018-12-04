
import React, { Component } from 'react';
import { Dimensions, AsyncStorage, PixelRatio, Platform, Alert } from 'react-native';



// 统一管理项目中的路由
import { Actions } from "react-native-router-flux";

// 处理安卓，iOS字体不同的类，使用方法 fontSize:FONT_SIZE(20)
import FontSize from './FontSize';
// 处理安卓，iOS宽高的区别，使用方法 width:px2dp(20)
import { px2dp } from './Tool';

// 配置文件，可以放网络请求等
import Config from './Config';

// 通过系统API获得屏幕宽高
let { height, width } = Dimensions.get('window');

// 系统是iOS
global.iOS = (Platform.OS === 'ios');
// 系统是安卓
global.Android = (Platform.OS === 'android');
// 获取屏幕宽度
global.SCREEN_WIDTH = width;
// 获取屏幕高度
global.SCREEN_HEIGHT = height;
// 获取屏幕分辨率
global.PixelRatio = PixelRatio.get();
// 最小线宽
global.pixel = 1 / PixelRatio;
// 适配字体
global.FONT_SIZE = FontSize;
// 屏幕适配
global.px2dp = px2dp;
// 配置
global.Config = Config;
// router跳转的方法
global.Actions = Actions;
// 弹出框
global.Alert = Alert;
// 存储
global.AsyncStorage = AsyncStorage;


