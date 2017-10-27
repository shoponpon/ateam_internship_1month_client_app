import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Dimensions
} from 'react-native';

export default class PageOfPointCharge extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.state);
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    購入するポイント数を選択してください。
                </Text>
                <View style={styles.buttons}>
                    <TouchableHighlight style={styles.button} onPress={() => { }} underlayColor='white'>
                        <Text style={styles.buttonText}>1000pt（￥1000）</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={() => { }} underlayColor='white'>
                        <Text style={styles.buttonText}>2000pt（￥2000）</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={() => { }} underlayColor='white'>
                        <Text style={styles.buttonText}>5000pt（￥5000）</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={() => { }} underlayColor='white'>
                        <Text style={styles.buttonText}>10000pt（￥10000）</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        margin: 50
    },
    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',        
        backgroundColor: '#66bbc6',
        width: Dimensions.get('window').width*0.5,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 20,
        marginBottom: 20
    },
    buttonText: {
        fontSize: 17,
        color: 'white',
    }
});
