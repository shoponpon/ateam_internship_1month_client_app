import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
const tconb = require('tcomb-form-native');

export default class PageOfLogin extends Component{
  constructor(props){
    super(props);
  }

  render(){

    const newUser = tconb.struct({
        "メールアドレス": tconb.String,
        "パスワード(8~16文字)": tconb.String
    });
    const options = {
        auto: 'placeholders'
    }

    const Form = tconb.form.Form;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            新規会員登録
        </Text>
        <Form type={newUser} options={options} />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>送信</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 20,
    paddingTop: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
