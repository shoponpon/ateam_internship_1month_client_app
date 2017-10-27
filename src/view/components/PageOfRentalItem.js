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
        return (
            <View style={styles.container}>
				<Image source={{url: this.props.photo_url}} style={styles.image} />
                <View style={styles.pointAndButtonWrapper}>
                    <Text style={styles.point}>{this.props.points}pt</Text>
                    <View style={styles.buttonWrapper}>
                        <TouchableHighlight onPress={() => { }} style={styles.button} underlayColor='white'>
                            <Image source={require('../../../assets/images/in_bx160.png')} style={styles.buttonImage}/>
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
        flex: 6,
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        width: '100%'
    },
    buttonImage: {
        width: '100%',
    }
});
