import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
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
import ItemPage from './ItemPage';

export default class Top extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router>
              <Stack key="root">
                <Scene key="routing" component={RoutingPage} {...this.props} title="routing"/>
                <Scene key="test" component={TestPage} title="" {...this.props} hideNavBar />
      
                <Scene key="top" component={Top} title="Top" {...this.props} hideNavBar initial/>
                <Scene key="login" component={LoginPage} title="新規会員登録" {...this.props} hideNavBar />
                <Scene key="item" component={ItemPage} title={this.props.item.name} {...this.props} navigationBarStyle={{backgroundColor:'white'}}/>
              </Stack>
            </Router>
          );
    }
}
