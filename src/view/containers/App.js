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
import UserStore from '../../store/UserStore';

export default class App extends Component {

  static getStores() {
    return [UserStore];
  }

  static calculateState(prevState) {
    return Object.assign(
      {
      },
      UserStore.getState()
    );
  }

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={TestPage} title="" hideNavBar initial />
        </Stack>
      </Router>
    );
  }
}