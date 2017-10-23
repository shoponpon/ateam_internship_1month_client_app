import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions
} from 'react-native';
import Item from '../components/Item';

export default class ItemsPage extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const itemWidth = Dimensions.get('window').width / 3 - 1*2; // 画面幅 / カラム数 - maring * 2(左右)
    const { items } = this.props;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    return (
      <View style={styles.container}>
        <ListView 
          style={styles.listView}
          contentContainerStyle={styles.listContentContainer}
          dataSource={ds.cloneWithRows(items)}
          renderRow={(item) => <Item item={item} itemWidth={itemWidth} onPress={()=>{}}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    flex: 1,
    backgroundColor: 'white'
  },
  listContentContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
