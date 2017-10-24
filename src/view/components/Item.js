import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight
} from 'react-native';
import {
	Actions
} from 'react-native-router-flux';

export default class Item extends Component {
	constructor(props) {
		super(props);
		this.styles = StyleSheet.create({
			container: {
				backgroundColor: 'white',
				margin: 1,
				width: this.props.itemWidth,
				height: 180,
				overflow: 'hidden',
			},
			itemImage: {
				flex: 1,
				height: 50,
				width: 'auto',
				height: 'auto'
			},
			itemPrice: {
				fontSize: 11,
				marginBottom: 8
			},
		});
	}

	render() {

		console.log(this.props);

		const { itemImageUrl, itemPrice } = this.props.item;

		return (
			<View style={this.styles.container}>
				<TouchableHighlight onPress={()=>Actions.item(this.props)} underlayColor="white">
				<View style={this.styles.container}>
					<Image source={require('../../../assets/images/test.jpg')} style={this.styles.itemImage} />
					<Text style={this.styles.itemPrice}>{itemPrice}pt</Text>
				</View>
				</TouchableHighlight>
			</View>
		);
	}
}