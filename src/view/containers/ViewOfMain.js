import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import TabOfNews from './TabOfNews';
import TabOfCloset from './TabOfCloset';
import TabOfMyPage from './TabOfMyPage';

export default class ViewOfMain extends Component {
    constructor(props){
        super(props);
    }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <ScrollableTabView
          renderTabBar={() => <DefaultTabBar />}
          tabBarPosition='bottom'
          scrollWithoutAnimation={true}
          tabBarUnderlineStyle={{ display: 'none' }}
          tabBarActiveTextColor='#64b3bc'
          tabBarBackgroundColor='#f2f2f3'
        >
          <TabOfNews tabLabel='お知らせ' {...this.props} />
          <TabOfCloset tabLabel='クローゼット' {...this.props} />
          <TabOfMyPage tabLabel='マイページ' {...this.props} />
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