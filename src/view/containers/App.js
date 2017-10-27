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
import PageOfSendItem from '../components/PageOfSendItem';
import TabOfCart from './TabOfCart';
import PageOfPointCharge from './PageOfPointCharge';

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
  Navigation.registerComponent('reclo.Send', () => PageOfSendItem);
  Navigation.registerComponent('reclo.Cart', () => TabOfCart);
  Navigation.registerComponent('reclo.PointCharge', () => PageOfPointCharge);
}
registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'お知らせ',
      screen: 'reclo.News',
      title: 'お知らせ',
      icon: require('../../../assets/images/menu/infox32.png'),
      selectedIcon: require('../../../assets/images/menu/info2x32.png'),
    },
    {
      label: 'クローゼット',
      screen: 'reclo.Closet',
      title: '',
      icon: require('../../../assets/images/menu/closetx43.png'),
      selectedIcon: require('../../../assets/images/menu/closet2x43.png'),
    },
    {
      label: 'マイページ',
      screen: 'reclo.MyPage',
      title: 'マイページ',
      icon: require('../../../assets/images/menu/mypagex43.png'),
      selectedIcon: require('../../../assets/images/menu/mypage2x43.png'),

    }
  ],
  appStyle: {
    navBarBackgroundColor: '#66bcc6',
    navBarTextColor: 'white',
    navBarRightButtonColor: 'white',
    navBarRightButtonFontSize: 17, 
    navBarLeftButtonColor: 'white',
    navBarButtonColor: 'white'
  },
  tabsStyle: { 
    tabBarButtonColor: '9fa0a0',
    tabBarSelectedButtonColor: '#66bcc6',
    tabBarBackgroundColor: '#ededed'
  }
})

const styles = StyleSheet.create({
  container: {
      flex: 1,
  }
});