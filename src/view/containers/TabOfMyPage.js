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

export default class TabOfMyPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profileLeft}>
            <View style={styles.iconWrapper}>
              <Image style={styles.icon} source={require('../../../assets/images/icon.png')} />
            </View>
          </View>
          <View style={styles.profileRight}>
            <View style={styles.textWrapper}>
              <Text style={styles.name}>{this.props.user.name}</Text>
              <Text style={styles.point}>保有ポイント：{this.props.user.point}pt</Text>
            </View>
          </View>
        </View>
        <View style={styles.tab}>
          <ScrollableTabView
            initialPage={0}
            renderTabBar={() => <DefaultTabBar />}
            tabBarUnderlineStyle={{ display: 'none' }}
            tabBarActiveTextColor='#64b3bc'
            tabBarBackgroundColor='white'
            style={styles.tabBar}
          >
            <TabOfPoint tabLabel='ポイント' {...this.props} />
            <TabOfRentalHistory tabLabel='履歴' {...this.props} />
            <TabOfFavoriteItems tabLabel='お気に入り' {...this.props} />
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  profile: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    flex: 3,
    flexDirection: 'row'
  },
  profileLeft: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileRight:{
    flex: 7,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  tab: {
    flex: 9
  },
  icon: {
    width: 100,
    height: 100,
    margin: 3,
    borderRadius: 50,
  },
  iconWrapper: {
    borderRadius: 56,
    borderColor: '#64b3bc',
    borderWidth: 1
  },
  name: {
    margin: 7,
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  point: {
    color: '#64b3bc',
    borderColor: '#64b3bc',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5,
    padding: 3,
    fontSize: 11,
  },
  tabBar: {
    marginTop: 15,
  }
});
