import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import TabOfFavoriteItems from './TabOfFavoriteItems';
import TabOfPoint from './TabOfPoint';
import TabOfRentalHistory from './TabOfRentalHistory';
import RoutingActions from '../../action/RoutingActions';
import TabOfCart from './TabOfCart';
import FitImage from 'react-native-fit-image';

export default class PageOfMyPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.gear} name="gear" color="#9fa0a0" />
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
          <TouchableHighlight style={styles.tabButton} onPress={() => { RoutingActions.gotoTabOnMyPage('point') }} underlayColor="#64b3bc">
            <View>
            <FitImage
              style={styles.icon}
              source={require('../../../assets/images/tabs/point.png')}
            />
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.tabButton} onPress={() => { RoutingActions.gotoTabOnMyPage('kago') }} underlayColor="#64b3bc">
            <Text>カゴ</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.tabButton} onPress={() => { RoutingActions.gotoTabOnMyPage('favorite') }} underlayColor="#64b3bc">
            <Text>お気に入り</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.tabButton} onPress={() => { RoutingActions.gotoTabOnMyPage('mycloset') }} underlayColor="#64b3bc">
            <Text>マイクローゼット</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.tabContent}>
          {(() => {
            console.log(this.props.myPageTab);
            switch (this.props.myPageTab) {
              case 'point':
                return <TabOfPoint {...this.props} />;
              case 'kago':
                return <TabOfCart {...this.props} />;
              case 'favorite':
                return <TabOfFavoriteItems {...this.props} />;
              default:
                console.log('default');
                break;
            }
          })()}
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
  gear: {
    flex: 1,
    fontSize: 30,
    marginLeft: 'auto',
    marginTop: 10,
    marginRight: 10,
    marginBottom: -50,
  },
  icon: {
    width: 16,
    height: 16
  },
  profile: {
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
  profileRight: {
    flex: 7,
    alignItems: 'flex-start',
    justifyContent: 'center',
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
  tab: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#f2f2f3'
  },
  tabButton: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabContent: {
    flex: 8
  }
});
