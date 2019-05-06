const initialState = {
	name:'',
	email:'',
	pass:'',
	nameValid:false,
	emailValid:false,
	pass1Valid:false,
	passValid:false,
	status:0 //(0 -> Não verificado, 1 -> Logado, 2 -> Não logado)
};

const AuthReducer = (state = initialState, action) => {

	if(action.type == 'setNameField') {
		let isValid = false;
		let re = /[a-z ]{2,}/;
		if(re.test(action.payload.name.toLowerCase())) {
			isValid = true;
		}
		return {...state, name:action.payload.name, nameValid:isValid};
	}

	if(action.type == 'changeStatus') {
		return {...state, status:action.payload.status};
	}

	if(action.type == 'setEmailField') {
		let isValid = false;
		let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		if(re.test(action.payload.email.toLowerCase())) {
			isValid = true;
		}
		return {...state, email:action.payload.email, emailValid:isValid};
	}

	if(action.type == 'setPasswordField') {
		let isValid = false;
		if(action.payload.pass.length >= 5) {
			isValid = true;
		}
		return {...state, pass:action.payload.pass, passValid:isValid};
	}

	return state;
}

export default AuthReducer;