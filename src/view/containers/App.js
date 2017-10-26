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
import TabOfNews from './TabOfNews';
import TabOfCloset from './TabOfCloset';
import TabOfMyPage from './TabOfMyPage';

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
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          Welcome to React Native!
        </Text>
      </View>
    )
  }
}

class Dummy extends Component {
  render(){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is Dummy Page.</Text>
      </View>
    );
  }
}

function registerScreens() {
  Navigation.registerComponent('example.WelcomeTabScreen', () => App);
  Navigation.registerComponent('reclo.Dummy', () => Dummy);
  Navigation.registerComponent('reclo.News', () => TabOfNews);
  Navigation.registerComponent('reclo.Closet', () => TabOfCloset);
  Navigation.registerComponent('reclo.MyPage', () => TabOfMyPage);
}
registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'お知らせ',
      screen: 'reclo.News',
      title: 'お知らせ'
    },
    {
      label: 'クローゼット',
      screen: 'reclo.Dummy',
      title: 'クローゼット',
      passProps: this.state
    },
    {
      label: 'マイページ',
      screen: 'reclo.Dummy',
      title: 'マイページ'
    }
  ]
})

const styles = StyleSheet.create({
  container: {
      flex: 1,
  }
});