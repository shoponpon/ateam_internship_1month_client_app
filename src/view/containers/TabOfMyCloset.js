import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import FitImage from 'react-native-fit-image';

export default class TabOfMyCloset extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <FitImage resizeMode="contain" source={require('../../../assets/images/mycloset_dummy.png')} style={{width:Dimensions.get('window').width,height:'350'}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});