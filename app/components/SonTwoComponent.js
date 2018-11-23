import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  DeviceEventEmitter
} from 'react-native';
export default class SonTwoComponent extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           我是第two子组件
        </Text> 
        <Text style={styles.welcome} onPress={()=>{
          DeviceEventEmitter.emit('makeMoney',9999999)
          }}>
           传数据给组件one
        </Text> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor:'#f00',
    borderWidth:1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue',
  },
});
