import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class MinePage extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           我是个人中心页面
        </Text>
        <Text style={styles.welcome}
        onPress={()=>Actions.login()}>
           跳转到登陆页面
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
