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
import ListOfClosetItem from './ListOfClosetItem';
import PageOfRentalItem from '../components/PageOfRentalItem';


export default class TabOfCloset extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="list" component={ListOfClosetItem} {...this.props} hideNavBar initial />
                    <Scene key="item" component={PageOfRentalItem} title={this.props.item.name} {...this.props} navigationBarStyle={{ backgroundColor: 'white' }} />
                </Stack>
            </Router>
        );
    }
}