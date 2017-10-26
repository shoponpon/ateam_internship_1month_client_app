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
import ListOfFavoriteItem from './ListOfFavoriteItem';
import PageOfRentalItem from '../components/PageOfRentalItem';

export default class TabOfFavoriteItems extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListOfFavoriteItem {...this.props} />
        );
    }
}