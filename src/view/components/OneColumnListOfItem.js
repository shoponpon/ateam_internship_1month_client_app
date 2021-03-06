import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';
import RentalItem from './RentalItem';
import PropTypes from 'prop-types';
import ItemActions from '../../action/ItemActions';

export default class OneColumnListOfItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    console.log(this.props);
    return (
      <View style={styles.container}>
        <ListView
          style={styles.listView}
          contentContainerStyle={styles.listContentContainer}
          dataSource={ds.cloneWithRows(this.props.cart)}
          renderRow={(item) => <ItemOfList item={item} navigator={this.props.navigator} {...this.props}/>}
        />
      </View>
    );
  }
}

class ItemOfList extends Component{
  render(){
    return(
    <View style={styleOfItem.container}>
      <View style={styleOfItem.left}>
        <Image source={{url: this.props.item.photo_url}} style={styleOfItem.itemImage} />
      </View>
      <View style={styleOfItem.middle}>
        <Text style={styleOfItem.name}>{this.props.item.name}</Text>
        <Text style={styleOfItem.points}>{this.props.item.points}pt</Text>
      </View>
      <View style={styleOfItem.right}>
        <TouchableHighlight onPress={()=>{
          ItemActions.removeCart(this.props.user.loginInfo.user_id,this.props.item.id,this.props.user.loginInfo.access_token);
        }} style={styleOfItem.button} underlayColor='#ffffff' >
          <Text style={styleOfItem.buttonText}>消去</Text>
        </TouchableHighlight>
      </View>
    </View>
    );
  }
}

const styleOfItem = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    alignItems: 'center',
    paddingTop: 10,
    marginBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#f2f2f3',
    height: 150
  },
  left: {
    flex: 3,
  },
  middle: {
    flex: 5,
    margin: 20
  },
  right: {
    flex: 2,
    alignSelf: 'flex-end'
  },
  itemImage: {
    width: '100%',
    height: '100%'
  },
  name: {
    fontSize: 13,
    marginBottom: 5
  },
  points: {
    fontSize: 15,
    marginTop: 5
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: '#aaaaaa',
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 50
  },
  buttonText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold'
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    flex: 1,
  }
});
