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
import PropTypes from 'prop-types';

export default class RentalItem extends Component {
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
		const { itemName, itemImageUrl, itemPrice } = this.props.item;
		return (
			<View style={this.styles.container}>
				<TouchableHighlight onPress={
					()=>{
						console.log(this.props);
						this.props.navigator.push({
							screen: 'reclo.item',
							title: itemName,
							passProps: this.props.item,
						});
					}
				} underlayColor="white">
				<View style={this.styles.container}>
					<Image source={{uri: 'https://s3-ap-northeast-1.amazonaws.com/ateam-demoapp/%E3%82%BF%E3%83%BC%E3%83%88%E3%83%AB%E3%83%8D%E3%83%83%E3%82%AF%E3%83%8B%E3%83%83%E3%83%88.jpg'}} style={this.styles.itemImage} />
					<Text style={this.styles.itemPrice}>{itemPrice}pt</Text>
				</View>
				</TouchableHighlight>
			</View>
		);
	}
}

RentalItem.proptypes = {
	onPress: PropTypes.func
}