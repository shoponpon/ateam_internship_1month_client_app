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

export default class TabOfPoint extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.pointWrapper}>
                    <Text>現在の保有ポイント数</Text>
                    <Text style={styles.points}>3000pt</Text>
                </View>
                <TouchableHighlight onPress={()=>{}} style={styles.button} underlayColor='white'>
                    <Text style={styles.buttonText}>アイテムを送ってポイントを貰う</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>{}} style={styles.button} underlayColor='white' >
                    <Text style={styles.buttonText}>お金を払ってポイントを貰う</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 30,
        marginLeft: 30
    },
    pointWrapper:{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#595757',
        borderStyle: 'dotted',
        padding: 20,
        margin: 15,
        marginBottom: 25
    },
    points:{
        color: '#66bbc6',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#66bbc6',
        padding: 10,
        margin: 15
    },
    buttonText: {
        color: 'white',
    }
});