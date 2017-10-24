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
import TabOfNews from './TabOfNews';
import TabOfCloset from './TabOfCloset';
import TabOfMyPage from './TabOfMyPage';

export default class App extends Component {

  static getStores() {
    return [UserStore, ItemStore];
  }

  static calculateState(prevState) {
    return Object.assign(
      {
      },
      UserStore.getState(),
      ItemStore.getState()
    );
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <DefaultTabBar />}
          tabBarPosition='bottom'
          scrollWithoutAnimation={true}
          tabBarUnderlineStyle={{ display: 'none' }}
          tabBarActiveTextColor='#64b3bc'
          tabBarBackgroundColor='white'
        >
          <TabOfNews tabLabel='お知らせ' {...this.state} />
          <TabOfCloset tabLabel='クローゼット' {...this.state} />
          <TabOfMyPage tabLabel='マイページ' {...this.state} />
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  }
});