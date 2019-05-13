import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Image, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import { setEmailField, setPasswordField, doLogin } from '../actions/AuthActions'; 

export class Login extends Component {

	static navigationOptions = {
		header:null
	};

	constructor(props) {
		super(props);
		this.state = {};

		this.forgotPassword = this.forgotPassword.bind(this);
		this.register = this.register.bind(this);
		this.loginAction = this.loginAction.bind(this);
		this.verifyStatus = this.verifyStatus.bind(this);
	}

	register() {
		this.props.navigation.navigate('Register');
	}

	forgotPassword() {
		this.props.navigation.navigate('ForgotThePassword');
	}

	loginAction() {
		if(this.props.emailValid == true && this.props.passValid == true) {
			this.props.doLogin(this.props.email, this.props.pass);
		}
	}
	
	componentDidUpdate() {
		this.verifyStatus();
	}

	verifyStatus() {
		if(this.props.status === 1) {
			// Manda para tela Home
			this.props.navigation.dispatch(StackActions.reset({
				index:0,
				actions:[
					NavigationActions.navigate({routeName:'HomeNav'})
				]
			}));
		}
	}

	render() {
		let buttonOpacity = 0.2;
		if(this.props.emailValid == true && this.props.passValid == true) {
			buttonOpacity = 1;
		}
		return (
			<ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
				<KeyboardAvoidingView style={styles.keyboardContainer} behavior="padding" enabled>
					<Text style={styles.header}>Login</Text>
					<View style={styles.fieldArea}>
						<Text style={styles.fieldTitle}>E-MAIL -> {this.props.status}</Text>
						<View style={styles.fieldItemArea}>
							<TextInput style={styles.fieldItem} value={this.props.email} onChangeText={(text) => this.props.setEmailField(text)} />
							<View style={styles.fieldItemStatus}>
								{this.props.emailValid &&
									<Image style={styles.fieldItemStatusImg} source={require('../assets/checked.png')} />
								}
							</View>
						</View>
					</View>
					<View style={styles.fieldArea}>
						<Text style={styles.fieldTitle}>SENHA</Text>
						<View style={styles.fieldItemArea}>
							<TextInput style={styles.fieldItem} secureTextEntry={true} value={this.props.pass} onChangeText={(text) => this.props.setPasswordField(text)} />
							<View style={styles.fieldItemStatus}>
								{this.props.passValid &&
									<Image style={styles.fieldItemStatusImg} source={require('../assets/checked.png')} />
								}
							</View>
						</View>
					</View>
					<View style={styles.bArea}>
						<TouchableHighlight underlayColor={null} onPress={this.forgotPassword} style={styles.bText}>
							<Text style={styles.bTextInt}>Esqueceu a senha?</Text>
						</TouchableHighlight>
						<TouchableHighlight underlayColor={null} onPress={this.register} style={styles.bText}>
							<Text style={styles.bTextInt}>Cadastre-se</Text>
						</TouchableHighlight>
					</View>
					<TouchableHighlight underlayColor={null} style={[styles.button, {opacity:buttonOpacity}]} onPress={this.loginAction}>
						<Image source={require('../assets/right.png')} style={styles.buttonImage} />
					</TouchableHighlight>
				</KeyboardAvoidingView>
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
		bottom:0,
		right:0,
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
	},
	bArea:{
		flexDirection:'row'
	},
	bText:{
		flex:1,
		height:36,
		justifyContent:'center',
		alignItems:'center'
	},
	bTextInt:{
		color:'#FFF',
		fontSize:15
	}
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status,
		email:state.auth.email,
		pass:state.auth.pass,
		emailValid:state.auth.emailValid,
		passValid:state.auth.passValid
	};
};
const LoginConnect = connect(mapStateToProps, {setEmailField, setPasswordField, doLogin})(Login);
export default LoginConnect;