import { verifyLogin, makeLogin, makeRegister, makeForgotPass } from '../DevsUberAPI';

export const checkLogin = () => {

	return (dispatch) => {
		verifyLogin()
		.then(function(status){
			dispatch({
				type:'changeStatus',
				payload:{
					status
				}
			});
		})
		.catch(function(){
			dispatch({
				type:'changeStatus',
				payload:{
					status:2
				}
			});
		});
	};
};
export const doLogin = (email, password) => {
	return (dispatch) => {
		makeLogin(email, password)
			.then(function(status){
				if(status == 2) {
					alert("E-mail e/ou senha errados!");
				}
				dispatch({
					type:'changeStatus',
					payload:{
						status
					}
				});
			})
			.catch(function(){
				alert("Tente novamente mais tarde.");
			});
	};
};
export const doRegister = (name, email, password) => {
	return (dispatch) => {
		makeRegister(name, email, password)
			.then(function(status){
				if(status == 2) {
					alert("E-mail Já está Cadastrado!");
				}
				dispatch({
					type:'changeStatus',
					payload:{
						status
					}
				});
			})
			.catch(function(){
				alert("Tente novamente mais tarde.");
			});
	};
};
export const doForgotPassword = (email) => {
	return (dispatch) => {
		makeForgotPass(email)
			.then(function(){

				alert("Foi enviado um de recuperação de senha para sua caixa de entrada!");
				
			})
			.catch(function(){
				alert("Tente novamente mais tarde.");
			});
	};
};
export const setNameField = (name) => {
	return {
		type:'setNameField',
		payload:{
			name
		}
	};
};
export const setEmailField = (email) => {
	return {
		type:'setEmailField',
		payload:{
			email
		}
	};
};
export const setPasswordField1 = (pass1) => {
	return {
		type:'setPasswordField1',
		payload:{
			pass1
		}
	};
};
export const setPasswordField = (pass) => {
	return {
		type:'setPasswordField',
		payload:{
			pass
		}
	};
};