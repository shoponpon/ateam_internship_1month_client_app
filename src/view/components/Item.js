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
				margin: 2,
				width: this.props.itemWidth,
				height: this.props.itemWidth,
				borderRadius: 2, 
				overflow: 'hidden',
				position: "relative"
			},
			itemImage: {
				flex: 1,
				height: 50,
				width: 'auto',
				height: 'auto',
				marginTop: 10,
				marginLeft: 10,
				marginRight: 10
			},
			itemTextContainer: {
				paddingTop: 3,
				position: "absolute",
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				borderTopRightRadius: 10,
				borderBottomRightRadius: 10,
				bottom: 5,
			},
			itemPrice: {
				fontSize: 11,
				color: '#ffffff',
				padding: 3,
				marginBottom: 2 
			},
		});
	}

	render() {

		console.log(this.props);

		const { itemImageUrl, itemPrice } = this.props.item;

		return (
			<View style={this.styles.container}>
				<Image source={require('../../../assets/images/test.jpg')} style={this.styles.itemImage} />
				<View style={this.styles.itemTextContainer}>
					<Text style={this.styles.itemPrice}>{itemPrice}</Text>
				</View>
			</View>
		);
	}
}