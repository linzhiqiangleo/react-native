import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import SonOneComponent from './../components/SonOneComponent';
import SonTwoComponent from './../components/SonTwoComponent';
export default class HomePage extends Component{
  constructor(props){
    super(props)
    this.state={
      money:0
    }
  }
  receiveChild(money){
    this.setState({
      money:money
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           我是首页
        </Text>
         <SonOneComponent toChild='100' receiveChild={this.receiveChild.bind(this)}/>
         <Text>
           我是从子组件来的值{this.state.money}
         </Text>
         <SonTwoComponent />
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
