//import { } from '../DevsUberAPI';

export const checkLogin = () => {
	// Incompleto
	return {
		type:'changeStatus',
		payload:{
			status:2
		}
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