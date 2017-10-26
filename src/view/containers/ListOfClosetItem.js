import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
import ListOfRentalItem from '../components/ListOfRentalItem';

export default class ListOfClosetItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { items, gotoItemPage } = this.props;
        return (            
            <View style={styles.container}>
                <View style={styles.advertisementWrapper}>
                    <Image source={require('../../../assets/images/ad.png')} style={styles.advertisementImage} />
                </View>
                <View style={styles.listNameWrapper}>
                    <Text style={styles.listName}>新着</Text>
                </View>
                <ListOfRentalItem items={items} onPress={gotoItemPage} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: 'white'
    },
    advertisementWrapper: {
        height: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        backgroundColor: '#595757'
    },
    advertisementImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch'
    },
    listNameWrapper: {
        alignItems: 'center',
        borderColor: '#f2f2f3',
        borderWidth: 1,
        padding: 7
    },
    listName: {
        fontFamily: 'Hiragino Sans',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'normal',
        backgroundColor: 'white',
        textDecorationLine: 'underline',
    }
});