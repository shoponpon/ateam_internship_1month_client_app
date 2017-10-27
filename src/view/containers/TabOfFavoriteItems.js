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
import OneColumnListOfFavoriteItem from '../components/OneColumnListOfFavoriteItem';

export default class TabOfFavoriteItems extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.list}>
                <OneColumnListOfFavoriteItem {...this.props} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex:1,
        margin: 20
    }
});