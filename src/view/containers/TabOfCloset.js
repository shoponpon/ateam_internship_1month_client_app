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
import UserActions from '../../action/UserActions';
import ItemActions from '../../action/ItemActions';

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

    componentDidMount(){
        if(this.state.user.loginInfo==null){
            console.log(this.props.navigator);
            this.props.navigator.push({
                screen: 'reclo.Login',
            });
        }
    }

    render() {
        console.log(this.props);
        console.log(this.state);
        console.log(this.state.user.loginInfo);
        if(this.state.items.length == 0){
            if(this.state.user.loginInfo){
                ItemActions.setOsusume(this.state.user.loginInfo.access_token);            
            }
        }
        return (
            <ListOfClosetItem {...this.props} {...this.state}/>
        );
    }
}