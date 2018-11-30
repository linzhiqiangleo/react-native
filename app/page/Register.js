import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableNativeFeedback
} from "react-native";
import { isTel } from './../common/validate'

export default class RegisiterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      verificationCode: "",
      confirmPassword: ""
    };
  }
  changeText(name, text) {
    this.setState({
      [name]: text
    });
  }
  register() {
    let isRegister=this.verify();
    if(isRegister){
      Actions.login();
    }
  }
  verify() {
    if (!this.state.name) {
      Alert.alert("请输入手机号");
      return false;
    } else if (!this.state.verificationCode) {
      Alert.alert("请输入验证码");
      return false;
    } else if (!this.state.password) {
      Alert.alert("请输入密码");
      return false;
    } else if (this.state.password != this.state.confirmPassword) {
      Alert.alert("两次密码输入不一致");
      return false;
    } else if (!isTel(this.state.name)) {
      Alert.alert("请输入正确的手机号");
      return false;
    } else {
      return true;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.input, styles.firstInput]}>
          <TextInput
            style={styles.innerInput}
            placeholder="请输入手机号"
            value={this.state.name}
            onChangeText={text => this.changeText("name", text)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.innerInput}
            placeholder="请输入验证码"
            value={this.state.verificationCode}
            onChangeText={text => this.changeText("verificationCode", text)}
          />
          <Text style={styles.getCode}>获取验证码</Text>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.innerInput}
            secureTextEntry={true}
            placeholder="请输入密码"
            value={this.state.password}
            onChangeText={text => this.changeText("password", text)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.innerInput}
            secureTextEntry={true}
            placeholder="再次输入密码"
            value={this.state.confirmPassword}
            onChangeText={text => this.changeText("confirmPassword", text)}
          />
        </View>
        <TouchableNativeFeedback onPress={this.register.bind(this)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>注 册</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#fff"
  },
  input: {
    width: "80%",
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row"
  },
  firstInput: {
    marginTop: 100
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
