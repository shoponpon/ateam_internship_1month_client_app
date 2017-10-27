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

export default class PageOfThankYouForSending extends Component {
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
                    <Text style={styles.text}>３日以内に集荷員が参ります。</Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}>お送りいただくアイテムをまとめて</Text>
                    <Text style={styles.text}>お待ちください。</Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}>集荷員が来ない場合はお手数ですが</Text>
                    <Text style={styles.text}>サポートデスクまでお問い合わせください。</Text>
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
