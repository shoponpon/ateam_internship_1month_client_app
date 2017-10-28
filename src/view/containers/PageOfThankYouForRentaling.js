import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import FitImage from 'react-native-fit-image';

export default class PageOfThankYouForRentaling extends Component {
    constructor(props) {
        super(props);
    }

    static navigatorStyle = {
        navBarHidden: true,
    };

    render() {
        console.log(this.state);
        return (
            <View style={styles.container}>
                <Text style={styles.title}>ご利用ありがとうございます</Text>
                <View style={styles.texts}>
                    <Text style={styles.text}>返却期限は11月28日までとなります。</Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}>それ以降に返却されますと</Text>
                    <Text style={styles.text}>追加料金がかかりますのでご注意ください。</Text>
                </View>
                <FitImage
                    resizeMode="contain"
                    source={require('../../../assets/images/logotype.png')}
                    style={styles.image}
                />
                <View style={styles.buttons}>
                    <TouchableHighlight style={styles.button} onPress={() => {
                        this.props.navigator.popToRoot();
                    }} underlayColor='white'>
                        <Text style={styles.buttonText}>TOPに戻る</Text>
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
        backgroundColor: 'white',
        margin: 10
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#66bbc6',
        marginBottom: 45,
        marginTop:60
    },
    text: {
        fontSize: 14,
        margin: 5
    },
    texts: {
        margin: 20,
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 30,
        marginTop: 5,
        marginBottom: 20
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#66bbc6',
        width: Dimensions.get('window').width * 0.4,
        paddingTop: 7,
        paddingBottom: 7,
        marginTop: 50,
        marginBottom: 20
    },
    buttonText: {
        fontSize: 17,
        color: 'white',
    }
});
