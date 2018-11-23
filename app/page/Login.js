import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
// import { Actions } from 'react-native-router-flux';

export default class LoginPage extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           我是登陆页面
        </Text>
        <Text style={styles.welcome}
        onPress={()=>Actions.register({goData:'从登陆页面传参'})}>
           跳转到注册页面
        </Text>
        <TouchableOpacity
        onPress={()=>Actions.home()}>
          <Text>
            登陆
          </Text>          
        </TouchableOpacity>
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
