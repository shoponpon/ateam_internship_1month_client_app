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
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event){
        if(event.type == 'NavBarButtonPress'){
            if(event.id == 'kago'){
                console.log(this.state);
                this.props.navigator.push({
                    screen: 'reclo.Cart',
                    title: 'カート',
                    passProps: this.state
                });
            }else if(event.id == 'send'){
                this.props.navigator.push({
                    screen: 'reclo.Send',
                    title: 'アイテムを送る',
                    //propsをpassするとなんかこける
                });
            }else if(event.id == 'search'){

            }
        }
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

    componentWillMount(){
        if(this.state.user.loginInfo==null){
            console.log(this.props.navigator);
            this.props.navigator.push({
                screen: 'reclo.Login',
            });
        }
        ItemActions.setCart(this.state.user.loginInfo.user_id,this.state.user.loginInfo.access_token);
    }
    componentDidMount(){
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