import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import UserStore from '../../store/UserStore';
import ItemStore from '../../store/ItemStore';
import AppStore from '../../store/AppStore';
import RoutingActions from '../../action/RoutingActions';
import { Navigation } from 'react-native-navigation';

console.log(Navigation);

export default class App extends Component {

  static getStores() {
    return [UserStore, ItemStore, AppStore];
  }

  static calculateState(prevState) {
    return Object.assign(
      {
        gotoItemPage: RoutingActions.gotoItemPage
      },
      UserStore.getState(),
      ItemStore.getState(),
      AppStore.getState()
    );
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableHighlight onPress={()=>{this.props.navigator.push({
          title: 'hoge',
          screen: 'example.Aaa',
          passProps: {name: 'aaaaaaa'}
        })}}>
        <Text>
          Welcome to React Native!
        </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

class Aaa extends Component {
  render(){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aaa</Text>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

function registerScreens() {
  Navigation.registerComponent('example.WelcomeTabScreen', () => App);
  Navigation.registerComponent('example.Aaa', () => Aaa);
}
registerScreens();

const props = {name: 'name'};

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Welcome',
      screen: 'example.WelcomeTabScreen',
      title: 'Welcome'
    },
    {
      label: 'aaa',
      screen: 'example.Aaa',
      title: 'aaa'
    }
  ]
})

const styles = StyleSheet.create({
  container: {
      flex: 1,
  }
});