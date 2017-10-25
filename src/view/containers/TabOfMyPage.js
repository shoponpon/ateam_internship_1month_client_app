import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

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
        <Text style={styles.name}>なまえ</Text>
        <Text style={styles.point}>保有ポイント:</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});
