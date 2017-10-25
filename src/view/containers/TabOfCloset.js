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

export default class TabOfCloset extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListOfClosetItem {...this.props} />
        );
    }
}