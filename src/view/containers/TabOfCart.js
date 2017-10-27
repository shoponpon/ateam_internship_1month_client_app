import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import {
    Router,
    Stack,
    Scene
} from 'react-native-router-flux';
import OneColumnListOfItem from '../components/OneColumnListOfItem';

export default class TabOfCart extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonWrapper}>
                    <TouchableHighlight onPress={()=>{}} style={styles.button} underlayColor='white'>
                        <Text style={styles.buttonText}>レンタルする</Text>
                    </TouchableHighlight>
                </View>
                <Text style={styles.sumOfPoint}>合計：<Text style={styles.points}>300pt</Text></Text>
                <View style={styles.itemList}>
                    <OneColumnListOfItem {...this.props}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    buttonWrapper: {
        margin: 20
    },
    button: {
        backgroundColor: '#66bbc6',
        padding: 10,
        paddingRight: 30,
        paddingLeft: 30
    },
    buttonText: {
        color: 'white',
    },
    sumOfPoint: {
        alignSelf: 'flex-start',
        marginLeft: 25
    },
    points: {
        color: 'red',
        fontSize: 18
    },
    itemList: {
        alignSelf: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 100,
        marginTop: 5
    }
});