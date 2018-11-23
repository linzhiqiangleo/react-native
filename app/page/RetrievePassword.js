import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class RetrievePasswordPage extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          我是找回密码页面
        </Text>
        <Text style={styles.welcome}
         onPress={() => {
                Actions.popTo('register'); //先popTo到要返回的页,此方法存在BUG             
                setTimeout(()=> {  
                    Actions.refresh({ backData: '我从找回密码回退到注册页面' }); //再传值刷新页面   
                });    
           }}>
           回退到注册页面
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue',
  },
});
