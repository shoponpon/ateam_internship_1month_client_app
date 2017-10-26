import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import UserActions from '../../action/UserActions';
const tconb = require('tcomb-form-native');

export default class PageOfLogin extends Component {
  constructor(props) {
    super(props);
  }

  login(){
    const value = this.refs.form.getValue();
    console.log(UserActions);
    UserActions.login(value["メールアドレスまたはID"],value["パスワード"]);
  }

  render() {

    const newUser = tconb.struct({
      "メールアドレスまたはID": tconb.String,
      "パスワード": tconb.String
    });
    const options = {
      auto: 'placeholders'
    }

    const Form = tconb.form.Form;

    return (
      <View style={styles.container}>
        <View style={styles.login}>
          <Image source={require('../../../assets/images/logotype.png')} style={styles.logo} />
          <Form ref="form" type={newUser} options={options} />
          <TouchableHighlight style={styles.loginButton} onPress={()=>this.login()} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>ログイン</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.singup}>
          <TouchableHighlight style={styles.signupButton} onPress={()=>{}} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>新規会員登録</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  login: {
    flex: 8,
    backgroundColor: 'white',
    paddingLeft: 50,
    paddingRight: 50
  },
  singup: {
    flex: 4,
    backgroundColor: '#ebebeb',
    paddingLeft: 50,
    paddingRight: 50
  },
  logo: {
    alignSelf: 'center',
    width: 128,
    height: 30,
    margin: 30,
    marginBottom: 80
  },
  form: {
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  loginButton: {
    height: 36,
    backgroundColor: '#66bcc6',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    justifyContent: 'center'
  },
  signupButton: {
    height: 36,
    backgroundColor: '#66bcc6',
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    justifyContent: 'center'
  }
});
