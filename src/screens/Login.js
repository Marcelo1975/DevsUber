import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Image } from 'react-native';

export default class Login extends Component {

	static navigationOptions = {
		header:null
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
				<Text style={styles.header}>Login</Text>
				<View style={styles.fieldArea}>
					<Text style={styles.fieldTitle}>E-MAIL</Text>
					<View style={styles.fieldItemArea}>
						<TextInput style={styles.fieldItem} />
						<View style={styles.fieldItemStatus}>
							<Image style={styles.fieldItemStatusImg} source={require('../assets/checked.png')} />
						</View>
					</View>
				</View>
				<View style={styles.fieldArea}>
					<Text style={styles.fieldTitle}>E-MAIL</Text>
					<View style={styles.fieldItemArea}>
						<TextInput style={styles.fieldItem} />
						<View style={styles.fieldItemStatus}>
							<Image style={styles.fieldItemStatusImg} source={require('../assets/checked.png')} />
						</View>
					</View>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		padding:20
	},
	header:{
		color:'#FFF',
		fontSize:30,
		marginBottom:50
	},
	fieldTitle:{
		color:'#FFF',
		fontSize:16
	},
	fieldItem:{
		flex:1,
		color:'#FFF',
		fontSize:17
	},
	fieldArea:{
		marginBottom:20,
		borderBottomWidth:1,
		borderBottomColor:'#FFF'
	},
	fieldItemArea:{
		flexDirection:'row',
		height:50
	},
	fieldItemStatus:{
		width:50,
		height:50,
		justifyContent:'center',
		alignItems:'center'
	},
	fieldItemStatusImg:{
		width:25,
		height:25
	}
});