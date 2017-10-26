import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import {
    Router,
    Stack,
    Scene
} from 'react-native-router-flux';
import UserStore from '../../store/UserStore';
import ItemStore from '../../store/ItemStore';
import AppStore from '../../store/AppStore';
import ListOfClosetItem from './ListOfClosetItem';

export default class TabOfCloset extends Component {
    constructor(props) {
        super(props);
    }

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
        console.log(this.props);
        console.log(this.state);
        return (
            <ListOfClosetItem {...this.props} {...this.state}/>
        );
    }
}