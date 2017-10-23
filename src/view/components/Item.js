import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

export default class Item extends Component {
	constructor(props) {
		super(props);
		this.styles = StyleSheet.create({
			container: {
				backgroundColor: 'white',
				margin: 1,
				width: this.props.itemWidth,
				height: 150,
				overflow: 'hidden',
			},
			itemImage: {
				flex: 1,
				height: 50,
				width: 'auto',
				height: 'auto'
			},
			itemTextContainer: {
			},
			itemPrice: {
				fontSize: 11,
				marginBottom: 2
			},
		});
	}

	render() {

		console.log(this.props);

		const { itemImageUrl, itemPrice } = this.props.item;

		return (
			<View style={this.styles.container}>
				<View style={this.styles.container}>
					<Image source={require('../../../assets/images/test.jpg')} style={this.styles.itemImage} />
					<View style={this.styles.itemTextContainer}>
						<Text style={this.styles.itemPrice}>{itemPrice}pt</Text>
					</View>
				</View>
			</View>
		);
	}
}