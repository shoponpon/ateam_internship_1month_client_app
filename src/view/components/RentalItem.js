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
		const { itemImageUrl, itemPrice } = this.props.item;
		return (
			<View style={this.styles.container}>
				<TouchableHighlight onPress={this.props.onPress} underlayColor="white">
				<View style={this.styles.container}>
					<Image source={require('../../../assets/images/test.jpg')} style={this.styles.itemImage} />
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