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
import ItemActions from '../../action/ItemActions';

export default class PageOfRentalItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageWrapper}>
				    <Image source={{url: this.props.item.photo_url}} style={styles.image} />
                    <View style={styles.iconWrapper}>
                        <TouchableHighlight onPress={()=>{}} underlayColor='white'>
                            <Image source={require('../../../assets/images/fabo.png')} style={styles.heart} />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.pointAndButtonWrapper}>
                    <Text style={styles.point}>{this.props.item.points}pt</Text>
                    <View style={styles.buttonWrapper}>
                        <TouchableHighlight onPress={() => {
                            console.log(this.props);
                            ItemActions.addCart(this.props.user.loginInfo.user_id,this.props.item.id,this.props.user.loginInfo.access_token);
                        }} style={styles.button} underlayColor='white'>
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
    imageWrapper: {
        flex: 10,
        position: 'relative',
    },
    iconWrapper: {
        position: 'absolute',        
        width: 45,
        height: 35,
        bottom: 5,
        padding: 3,
        right: 5
    },
    heart: {
        width: '100%',
        height: '100%',
    },
    image:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 455
    },
    pointAndButtonWrapper: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    point: {
        flex: 7,
        fontSize: 28,
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
