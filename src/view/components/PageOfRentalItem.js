import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableHighlight
} from 'react-native';

export default class PageOfRentalItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {item} = this.props;
        console.log(item);
        return (
            <View style={styles.container}>
				<Image source={require('../../../assets/images/test.jpg')} style={styles.image} />
                <View style={styles.pointAndButtonWrapper}>
                    <Text style={styles.point}>{item.itemPrice}pt</Text>
                    <View style={styles.buttonWrapper}>
                        <TouchableHighlight onPress={() => { }} style={styles.button} >
                            <Text style={styles.buttonText}>カートに入れる</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => { }} style={styles.buttonReverse} >
                            <Text style={styles.buttonTextReverse}>お気に入り追加</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 5
    },
    image:{
        flex: 10,
        width: '100%',
        height: 500
    },
    pointAndButtonWrapper: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    point: {
        flex: 7,
        fontSize: 30,
    },
    buttonWrapper: {
        flex: 5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#64b3bc',
        borderColor: '#64b3bc',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        margin: 5,
        width: '100%'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    buttonReverse: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#64b3bc',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        margin: 2,
        width: '100%'
    },
    buttonTextReverse: {
        color: '#64b3bc',
        fontWeight: 'bold'
    }
});
