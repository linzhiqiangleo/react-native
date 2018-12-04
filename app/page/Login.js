import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableNativeFeedback
} from "react-native";
import { isTel } from './../common/validate';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMessageLogin: true,
      name: "",
      password: "",
      verificationCode: "",
      isGetCode:true,
      countDown:0
    };
  }
  //改变登陆方式
  changeLoginType(type) {
    if (type === "message") {
      this.setState({
        isMessageLogin: true
      });
    } else {
      this.setState({
        isMessageLogin: false
      });
    }
  }
  changeText(name, text) {
    this.setState({
      [name]: text
    });
  }
  getCode(){
    if(this.state.isGetCode){
      if(!this.state.name){
        Alert.alert('请输入手机号')
      }else if(!isTel(this.state.name)){
        Alert.alert('请输入正确的手机号')
      }else{
        this.setState({
          countDown:60,
          isGetCode:false,
        })
        this.timer=setInterval(()=>{
          if(this.state.countDown>0){
            this.setState({
              countDown:this.state.countDown-1
            })
          }else{
            this.setState({
              countDown:0,
              isGetCode:true,
            })
            clearInterval(this.timer)
          }
          
        },1000)
      }
    }  
  } 
  login(){
    let isLogin=this.verify()
    if(isLogin){
      Actions.home();
    }
  }
  verify(){
    if(this.state.isMessageLogin){
      if(!this.state.name){
        Alert.alert('请输入手机号')
        return false;
      }else if(!this.state.verificationCode){
        Alert.alert('请输入验证码')
        return false;
      }else if(!isTel(this.state.name)){
        Alert.alert('请输入正确的手机号')
        return false;
      }else{
        return true;
      }
    }else{
      if(!this.state.name){
        Alert.alert('请输入手机号')
        return false;
      }else if(!this.state.password){
        Alert.alert('请输入密码')
        return false;
      }else if(!isTel(this.state.name)){
        Alert.alert('请输入正确的手机号')
        return false;
      }else{
        return true;
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.isMessageLogin ? (
          <View style={styles.typeLogin}>
            <Text
              style={[styles.type, styles.activeType]}
              onPress={this.changeLoginType.bind(this, "message")}
            >
              短信登录
            </Text>
            <Text
              style={[styles.type]}
              onPress={this.changeLoginType.bind(this, "password")}
            >
              密码登录
            </Text>
          </View>
        ) : (
          <View style={styles.typeLogin}>
            <Text
              style={[styles.type]}
              onPress={this.changeLoginType.bind(this, "message")}
            >
              短信登录
            </Text>
            <Text
              style={[styles.type, styles.activeType]}
              onPress={this.changeLoginType.bind(this, "password")}
            >
              密码登录
            </Text>
          </View>
        )}
        <View style={styles.inputBox}>
          <View style={styles.input}>
            <TextInput
              style={styles.innerInput}
              placeholder="请输入手机号"
              value={this.state.name}
              onChangeText={text => this.changeText("name", text)}
            />
          </View>
          {this.state.isMessageLogin ? (
            <View style={styles.input}>
              <TextInput
                style={styles.innerInput}
                placeholder="请输入验证码"
                value={this.state.verificationCode}
                onChangeText={text => this.changeText("verificationCode", text)}
              />
              <Text style={styles.getCode} onPress={this.getCode.bind(this)}>{this.state.countDown || '获取验证码'} </Text>
            </View>
          ) : (
            <View style={styles.input}>
              <TextInput
                style={styles.innerInput}
                secureTextEntry={true}
                placeholder="请输入密码"
                value={this.state.password}
                onChangeText={text => this.changeText("password", text)}
              />
            </View>
          )}
          <TouchableNativeFeedback onPress={this.login.bind(this)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>登 录</Text>
            </View>
          </TouchableNativeFeedback>
          <View style={{flexDirection:'row'}}>
          <Text 
            style={{ fontSize: 20, color: "#2196F3",textAlign:"center",flex:1 }}
            onPress={()=>Actions.register()}>创建账号</Text>
            <Text 
            style={{ fontSize: 20, color: "#2196F3",textAlign:"center",flex:1 }}
            onPress={()=>Actions.retrievePassword()}>忘记密码</Text>
          </View>
          
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#fff"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "blue"
  },
  typeLogin: {
    flexDirection: "row"
  },
  type: {
    flex: 1,
    textAlign: "center",
    height: 70,
    lineHeight: 70,
    fontSize: 20,
    marginLeft: 30,
    marginRight: 30
  },
  activeType: {
    borderBottomWidth: 2,
    borderColor: "#000"
  },
  input: {
    width: "80%",
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row"
  },
  innerInput: {
    height: 60,
    flex: 1
  },

  inputBox: {
    alignItems: "center",
    marginTop: 50
  },
  getCode: {
    height: 60,
    lineHeight: 60,
    fontSize: 16
  },
  button: {
    marginBottom: 30,
    width: "80%",
    height: 50,
    lineHeight: 50,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#2196F3",
    marginTop: 100
  },
  buttonText: {
    height: 50,
    lineHeight: 50,
    color: "white",
    fontSize: 20
  }
});
