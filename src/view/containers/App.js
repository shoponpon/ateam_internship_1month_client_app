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
import Top from './Top';
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
          <Scene key="routing" component={RoutingPage} {...this.state} title="routing"/>
          <Scene key="test" component={TestPage} title="" {...this.state} hideNavBar />

          <Scene key="top" component={Top} title="Top" {...this.state} hideNavBar initial/>
          <Scene key="login" component={LoginPage} title="新規会員登録" {...this.state} hideNavBar />
        </Stack>
      </Router>
    );
  }
}