import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
import ListOfRentalItem from '../components/ListOfRentalItem';

export default class ListOfFavoriteItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { favoriteItems, gotoItemPage } = this.props;
        return (            
            <View style={styles.container}>
                <ListOfRentalItem items={favoriteItems} onPress={gotoItemPage} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});
