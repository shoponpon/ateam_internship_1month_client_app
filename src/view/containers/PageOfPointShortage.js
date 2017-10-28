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

export default class TabOfPointShortage extends Component {
    constructor(props) {
        super(props);
    }

    static navigatorStyle = {
        navBarHidden: false,
    };

    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text style={styles.title}>ポイントが不足しています。</Text>
                <View style={styles.pointWrapper}>
                    <Text>現在の保有ポイント数</Text>
                    <Text style={styles.points}>{this.props.user.point}pt</Text>
                    <Text>不足ポイント数</Text>
                    <Text style={styles.shortagePoints}>{this.props.shortage}pt</Text>
                </View>
                <View style={styles.buttons}>
                <Text style={styles.comment}>使ってない服がある方はこちら</Text>
                <TouchableHighlight onPress={()=>{
                    this.props.navigator.push({
                        screen: 'reclo.Send',
                        title: 'アイテムを送る',
                        backButtonTitle: ''
                    });
                }} style={styles.button} underlayColor='white'>
                    <Text style={styles.buttonText}>アイテムを送ってポイントを貰う</Text>
                </TouchableHighlight>
                <Text style={styles.comment}>今すぐ服を借りたい方はこちら</Text>
                <TouchableHighlight onPress={()=>{
                    this.props.navigator.push({
                        screen: 'reclo.PointCharge',
                        title: 'ポイントを購入する',
                        backButtonTitle: ''
                    });
                }} style={styles.button} underlayColor='white' >
                    <Text style={styles.buttonText}>お金を払ってポイントを貰う</Text>
                </TouchableHighlight>
                </View>
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
        padding: 10,
        paddingTop: 20,
        margin: 15,
        marginBottom: 50
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
        backgroundColor: '#66bbc6',
        padding: 10,
        marginBottom: 15,
        marginTop: 5
    },
    buttons:{
        width: '80%',
    },
    buttonText: {
        color: 'white',
    },
    shortagePoints: {
        color: '#ed7768',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#66bbc6'
    },
    comment: {
        fontSize: 12,
        alignSelf: 'flex-start'
    }
    
});