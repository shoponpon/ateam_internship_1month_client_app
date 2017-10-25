import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import PageOfMyPage from './PageOfMyPage';


export default class TabOfMyPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PageOfMyPage {...this.props}/>
        );
    }
}