import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import UserStore from '../../store/UserStore';
import ItemStore from '../../store/ItemStore';
import AppStore from '../../store/AppStore';


export default class TabOfNews extends Component{
  constructor(props){
    super(props);
    this.props.navigator.switchToTab({
      tabIndex: 1 //index of tab you want to show first.
      })
  }

  static getStores() {
    return [UserStore, ItemStore, AppStore];
  }

  static calculateState(prevState) {
    return Object.assign(
      {
      },
      UserStore.getState(),
      ItemStore.getState(),
      AppStore.getState()
    );
  }

  render(){
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is News Tab!
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
    backgroundColor: '#F5FCFF',
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
});
