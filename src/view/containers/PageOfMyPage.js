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
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:10,fontWeight:'600',color:this.props.myPageTab=='point'?'#66bbc6':'#9fa0a0',marginLeft:3}}>ポイント</Text>
            <FitImage
            resizeMode="contain"
              style={{width: 30,height: 30}}
              source={this.props.myPageTab == 'point' ?require('../../../assets/images/tabs/point2.png'):require('../../../assets/images/tabs/point.png')}
            />
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.tabButton} onPress={() => { RoutingActions.gotoTabOnMyPage('kago') }} underlayColor="#64b3bc">
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:10,fontWeight:'600',color:this.props.myPageTab=='kago'?'#66bbc6':'#9fa0a0',marginLeft:3}}>カゴ</Text>
          <FitImage
          resizeMode="contain"
            style={{width: 30,height: 30}}
            source={this.props.myPageTab == 'kago' ?require('../../../assets/images/tabs/bag2.png'):require('../../../assets/images/tabs/bag.png')}
          />
          </View>
        </TouchableHighlight>
          <TouchableHighlight style={styles.tabButton} onPress={() => { RoutingActions.gotoTabOnMyPage('favorite') }} underlayColor="#64b3bc">
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:10,fontWeight:'600',color:this.props.myPageTab=='favorite'?'#66bbc6':'#9fa0a0',marginLeft:3}}>お気に入り</Text>
          <FitImage
          resizeMode="contain"
            style={{width: 30,height: 30}}
            source={this.props.myPageTab == 'favorite' ?require('../../../assets/images/tabs/fab2.png'):require('../../../assets/images/tabs/fab.png')}
          />
          </View>
        </TouchableHighlight>
          <TouchableHighlight style={styles.tabButton} onPress={() => { RoutingActions.gotoTabOnMyPage('mycloset') }} underlayColor="#64b3bc">
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:10,fontWeight:'600',color:this.props.myPageTab=='mycloset'?'#66bbc6':'#9fa0a0',marginLeft:3}}>マイクローゼット</Text>
          <FitImage
          resizeMode="contain"
            style={{width: 30,height: 30}}
            source={this.props.myPageTab == 'mycloset' ?require('../../../assets/images/tabs/mycloset2.png'):require('../../../assets/images/tabs/mycloset.png')}
          />
          </View>
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
    paddingBottom: -10
  },
  icon: {
    width: 8,
    height: 8
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
