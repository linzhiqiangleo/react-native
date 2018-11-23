import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  DeviceEventEmitter
} from 'react-native';
export default class SonOneComponent extends Component{
  constructor(props){
    super(props)
    this.state={
      money:0,
    }
  }
  toFather(money){
    this.props.receiveChild(money)
  }
  componentDidMount(){
    this.lister=DeviceEventEmitter.addListener('makeMoney',(money)=>{
      this.setState({
        money:money
      })
    })
  }
  componentWillUnmount(){
    this.lister.remove();
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           我是第one子组件
        </Text>
        <Text style={styles.welcome} onPress={this.toFather.bind(this,10000)}>
           传数据给父组件
        </Text>
        <Text>
          父组件传到子组件的值{this.props.toChild}
        </Text>
        <Text>
          第二个组件传来的值{this.state.money}
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
    borderColor:'#00f',
    borderWidth:1

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue',
  },
});
