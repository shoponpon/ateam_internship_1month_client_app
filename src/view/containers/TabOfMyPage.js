import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import TabOfFavoriteItems from './TabOfFavoriteItems';
import TabOfPoint from './TabOfPoint';
import TabOfRentalHistory from './TabOfRentalHistory';

export default class TabOfMyPage extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <Image style={styles.icon} source={require('../../../assets/images/icon.png')}/>
        </View>
        <Text style={styles.name}>{this.props.user.name}</Text>
        <Text style={styles.point}>保有ポイント：{this.props.user.point}pt</Text>
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <DefaultTabBar />}
          tabBarUnderlineStyle={{ display: 'none' }}
          tabBarActiveTextColor='#64b3bc'
          tabBarBackgroundColor='white'
          style={styles.tabBar}
        >
          <TabOfPoint tabLabel='ポイント' />
          <TabOfRentalHistory tabLabel='履歴' />
          <TabOfFavoriteItems tabLabel='お気に入り' />
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  icon: {
    width: 128,
    height: 128,
    margin: 5,
    borderRadius: 65
  },
  iconWrapper: {
    marginTop: 30,    
    borderRadius: 75,
    borderColor: '#64b3bc',
    borderWidth: 1
  },
  name: {
    color: '#64b3bc',
    margin: 7,
    letterSpacing: 2
  },
  point: {
    color: 'white',
    backgroundColor: '#64b3bc',
    paddingLeft: 20,
    paddingRight: 20,
    margin: 5,
    padding: 3,
    fontSize: 11,
  },
  tabBar: {
    marginTop: 15,
  }
});
