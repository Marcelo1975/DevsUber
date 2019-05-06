import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Image, KeyboardAvoidingView, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { setEmailField, doForgotPassword } from '../actions/AuthActions'; 

export class ForgotThePassword extends Component {

	static navigationOptions = {
		
	};

	constructor(props) {
		super(props);
		this.state = {};

		this.verifyStatus = this.verifyStatus.bind(this);
		this.ForgotPassword = this.ForgotPassword.bind(this);

	}

	componentDidUpdate() {
		this.verifyStatus();
	}

	verifyStatus() {
		if(this.props.status === 1) {
			// Manda para tela Home
			alert("Manda pra tela HOME");
		}
	}

	ForgotPassword() {
		if(this.props.emailValid == true) {

			this.props.doForgotPassword(this.props.email);
		}
	}

	render() {
		let buttonOpacity = 0.2;
		if(this.props.emailValid == true) {
			buttonOpacity = 1;
		}
		return (
			<ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
				<ScrollView style={styles.scrollViewStyle}>
					<KeyboardAvoidingView style={styles.keyboardContainer} behavior="padding" enabled>
						<Text style={styles.header}>Esqueceu a Senha</Text>
						<View style={styles.fieldArea}>
							<Text style={styles.fieldTitle}>E-MAIL</Text>
							<View style={styles.fieldItemArea}>
								<TextInput style={styles.fieldItem} value={this.props.email} onChangeText={(text) => this.props.setEmailField(text)} />
								<View style={styles.fieldItemStatus}>
									{this.props.emailValid &&
										<Image style={styles.fieldItemStatusImg} source={require('../assets/checked.png')} />
									}
								</View>
							</View>
						</View>
					</KeyboardAvoidingView>
				</ScrollView>
				<TouchableHighlight underlayColor={null} style={[styles.button, {opacity:buttonOpacity}]} onPress={this.ForgotPassword}>
					<Image source={require('../assets/right.png')} style={styles.buttonImage} />
				</TouchableHighlight>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		padding:20
	},
	keyboardContainer:{
		flex:1
	},
	scrollViewStyle:{
		flex:1
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
	},
	button:{
		position:'absolute',
		bottom:20,
		right:20,
		width:80,
		height:80,
		borderRadius:40,
		backgroundColor:'#0a5360',
		justifyContent:'center',
		alignItems:'center'
	},
	buttonImage:{
		width:32,
		height:32
	}
});

const mapStateToProps = (state) => {
	return {
		email:state.auth.email,
		emailValid:state.auth.emailValid
	};
};
const ForgotThePasswordConnect = connect(mapStateToProps, {setEmailField, doForgotPassword})(ForgotThePassword);
export default ForgotThePasswordConnect;