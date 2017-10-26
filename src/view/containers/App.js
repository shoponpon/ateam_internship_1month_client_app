import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import UserStore from '../../store/UserStore';
import ItemStore from '../../store/ItemStore';
import AppStore from '../../store/AppStore';
import RoutingActions from '../../action/RoutingActions';
import { Navigation } from 'react-native-navigation';

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
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          Welcome to React Native!
        </Text>
      </View>
    )
  }
}

class Aaa extends Component {
  render(){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aaa</Text>
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