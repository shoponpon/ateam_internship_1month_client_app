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
import PageOfRentalItem from '../components/PageOfRentalItem';
import PageOfLogin from '../components/PageOfLogin';

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
  Navigation.registerComponent('reclo.item', () => PageOfRentalItem);
  Navigation.registerComponent('reclo.Login', () => PageOfLogin);

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
      title: ''
    },
    {
      label: 'マイページ',
      screen: 'reclo.MyPage',
      title: 'マイページ'
    },
    {
      label: '新規会員登録',
      screen: 'reclo.Login',
      title: '新規会員登録'
    }
  ],
  appStyle: {
    navBarBackgroundColor: '#66bcc6',
    navBarTextColor: 'white',

  }
})

const styles = StyleSheet.create({
  container: {
      flex: 1,
  }
});