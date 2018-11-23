import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class RegisiterPage extends Component{
  constructor(props){
    super(props)
    this.state={
      data:''
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.backData){
      this.setState({
        data:nextProps.backData
      })
    }
  }
  render(){
    const data=this.state.data || 'null';
    const goData=this.props.goData || 'null';
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          我是注册页面
        </Text>
        <Text style={styles.welcome}
        onPress={()=>Actions.login()}>
           跳转到登陆页面
        </Text>
        <Text style={styles.welcome}
        onPress={()=>Actions.retrievePassword()}>
           跳转到找回密码页面
        </Text>
        <Text style={styles.welcome}>
           {goData}
        </Text>
        <Text style={styles.welcome}>
           {data}
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
