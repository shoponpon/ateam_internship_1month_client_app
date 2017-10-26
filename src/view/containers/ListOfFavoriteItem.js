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
        const { favoriteItems } = this.props;
        return (            
            <View style={styles.container}>
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
});
