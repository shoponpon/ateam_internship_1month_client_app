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

export default class OneColumnListOfFavoriteItem extends Component{
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
          dataSource={ds.cloneWithRows(this.props.items)}
          renderRow={(item) => <ItemOfList item={item} navigator={this.props.navigator} />}
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
        <TouchableHighlight onPress={()=>{}} style={styleOfItem.iconWrapper} underlayColor='#ffffff' >
          <Image source={require('../../../assets/images/fabo.png')} style={styleOfItem.heart}/>
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
  },
  iconWrapper: {
    position: 'absolute',        
    width: 45,
    height: 35,
    bottom: -10,
    padding: 3,
    right: 30
  },
  heart: {
    width: '70%',
    height: '70%',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    flex: 1,
  }
});
