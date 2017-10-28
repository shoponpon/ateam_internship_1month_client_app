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
import ItemActions from '../../action/ItemActions';

export default class TabOfCart extends Component {

    constructor(props) {
        super(props);
    }

    check() {
        for (let i = 0; i < this.props.cart.length; i++) {
            if (this.props.cart[i]) {

            } else {
                return true;
            }
        }
        return false;
    }

    render() {
        let sum = 0;
        for (let i = 0; i < this.props.cart.length; i++) {
            sum += this.props.cart[i].points;
            console.log(this.props.cart[i].points);
        }
        this.props['sum'] = sum;
        return (
            <View style={styles.container}>
                <View style={styles.buttonWrapper}>
                    <TouchableHighlight onPress={() => {
                        if (this.props.cart.length == 0) {
                            console.log('カートに物が入ってない');                            
                            return;
                        }
                        if (this.props.sum > this.props.user.loginInfo.point) {
                            console.log('ポイントが足りない');                            
                            this.props.navigator.push({
                                screen: 'reclo.Shortage',
                                backButtonTitle: ''
                            });
                            return;
                        }
                        if (this.check()) {
                            console.log('他の人が借りてる物が入ってる');                                                        
                            return;
                        }
                        ItemActions.rentalItems(this.props.user.loginInfo.user_id, this.props.user.loginInfo.access_tokens);
                    }} style={styles.button} underlayColor='white'>
                        <Text style={styles.buttonText}>レンタルする</Text>
                    </TouchableHighlight>
                    {(() => {
                        if(this.props.warn){
                            return <Text style={{color: 'red'}}>既に誰かがレンタルし，レンタルできない商品が含まれています。</Text>
                        }
                    })()}
                </View>
                <Text style={styles.sumOfPoint}>合計：<Text style={styles.points}>{sum}pt</Text></Text>
                <View style={styles.itemList}>
                    <OneColumnListOfItem {...this.props} />
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