import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { Navigation } from 'react-native-navigation';
import ContainerOfNews from './ContainerOfNews';
import ContainerOfCloset from './ContainerOfCloset';
import ContainerOfMyPage from './ContainerOfMyPage';

export default class App extends Component {

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
  Navigation.registerComponent('reclo.News', () => ContainerOfNews);
  Navigation.registerComponent('reclo.Closet', () => ContainerOfCloset);
  Navigation.registerComponent('reclo.MyPage', () => ContainerOfMyPage);
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
      screen: 'reclo.Closet',
      title: 'クローゼット'
    },
    {
      label: 'マイページ',
      screen: 'reclo.MyPage',
      title: 'マイページ'
    }
  ]
})

const styles = StyleSheet.create({
  container: {
      flex: 1,
  }
});