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

export default class OneColumnListOfNews extends Component{
  constructor(props){
    super(props);
    this.data = [
      {
        points: 300,
        date: "2017/10/01"
      },
      {
        points: 200,
        date: "2017/09/01"
      },
      {
        points: 500,
        date: "2017/08/01"
      },
      {
        points: 200,
        date: "2017/07/01"
      },
      {
        points: 200,
        date: "2017/06/01"
      },
    ]
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
          dataSource={ds.cloneWithRows(this.data)}
          renderRow={(data) => <ItemOfList data={data}/>}
        />
      </View>
    );
  }
}

class ItemOfList extends Component{
  render(){
    return(
    <View style={styleOfItem.container}>
      <Text style={{color:'9fa0a0',fontSize:13}}>{this.props.data.date}</Text>
      <Text style={styleOfItem.name}>ポイントが付与されました！</Text>
      <Text style={styleOfItem.points}>{this.props.data.points}pt</Text>
    </View>
    );
  }
}

const styleOfItem = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    alignItems: 'flex-start',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#f2f2f3',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f3',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10
  },
  name: {
    fontSize: 13,
    marginBottom: 5
  },
  points: {
    fontSize: 15,
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
