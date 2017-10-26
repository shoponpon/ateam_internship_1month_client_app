import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import UserStore from '../../store/UserStore';
import ItemStore from '../../store/ItemStore';
import AppStore from '../../store/AppStore';
import PageOfMyPage from './PageOfMyPage';


export default class TabOfMyPage extends Component {
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
        return (
            <PageOfMyPage {...this.state}/>
        );
    }
}