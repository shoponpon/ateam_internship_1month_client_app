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
        console.log(this.props);
        return (
            <View style={styles.container}>
                <View style={styles.listNameWrapper}>
                    <Text style={styles.listName}>あなたへのおすすめ</Text>
                </View>
                <ListOfRentalItem {...this.props}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    listNameWrapper: {
        alignItems: 'center',
    },
    listName: {
        fontFamily: 'Hiragino Sans',
        fontSize: 16,
        fontWeight: 'normal',
        backgroundColor: 'white',
        padding: 20,
        paddingBottom: 10
    }
});
