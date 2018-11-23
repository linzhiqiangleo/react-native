import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import SonComponent from './../component/sonComponent';
import OtherSonComponent from './../component/otherSonComponent';
export default class HomePage extends Component{
  constructor(props){
    super(props)
    this.state={
      money:0
    }
  }
  getSonData(data){
    this.setState({
      money:data
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           我是首页
        </Text>
        <SonComponent toSon='父组件传到子组件' getSonData={this.getSonData.bind(this)} />
        <Text>
          我是从子组件来的{this.state.money}
        </Text>
        <OtherSonComponent />
        
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
