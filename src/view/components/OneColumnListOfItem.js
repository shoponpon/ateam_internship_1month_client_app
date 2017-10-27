import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Dimensions
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';
import RentalItem from './RentalItem';
import PropTypes from 'prop-types';

export default class OnceColumnListOfItem extends Component{
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
{/*        <Image source={require('../../../assets/images/test.jpg')} style={styleOfItem.itemImage} />*/}
        <Text>写真</Text>
      </View>
      <View style={styleOfItem.middle}>
        <Text>テスト</Text>
      </View>
      <View style={styleOfItem.right}>
        <Text>ボタン</Text>
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
    paddingTop: 20,
    marginBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#f2f2f3'
  },
  left: {
    flex: 3,
    width: 75,
    height: 150,
    backgroundColor: 'blue',
  },
  middle: {
    flex: 5,
    backgroundColor: 'yellow',
    margin: 20
  },
  right: {
    flex: 3,
    backgroundColor: 'red'
  },
  itemImage: {
    width: '100%',
    height: '100%'
  }

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  listView: {
    flex: 1,
  }
});
