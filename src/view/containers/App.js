import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Router,
  Stack,
  Scene
} from 'react-native-router-flux';
import TestPage from '../components/TestPage';
import LoginPage from '../components/LoginPage';
import RoutingPage from '../components/RoutingPage';
import ItemsPage from './ItemsPage';
import UserStore from '../../store/UserStore';
import ItemStore from '../../store/ItemStore';

export default class App extends Component {

  static getStores() {
    return [UserStore,ItemStore];
  }

  static calculateState(prevState) {
    return Object.assign(
      {
      },
      UserStore.getState(),
      ItemStore.getState()
    );
  }

  render() {
    console.log(this.state);
    return (
      <Router>
        <Stack key="root">
          <Scene key="routing" component={RoutingPage} title="routing" initial/>
          <Scene key="test" component={TestPage} title="" hideNavBar />
          <Scene key="login" component={LoginPage} title="新規会員登録" hideNavBar />
          <Scene key="items" component={ItemsPage} title="Items" {...this.state}/>
        </Stack>
      </Router>
    );
  }
}