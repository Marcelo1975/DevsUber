const initialState = {
	name:'',
	email:'123',
	pass1:'',
	pass:'',
	emailValid:false,
	pass1Valid:false,
	passValid:false,
	status:0 //(0 -> Não verificado, 1 -> Logado, 2 -> Não logado)
};

const AuthReducer = (state = initialState, action) => {

	if(action.type == 'setNameField') {
		return {...state, name:action.payload.name};
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

	if(action.type == 'setPasswordField1') {
		let isValid1 = false;
		if(action.payload.pass1.length >= 5) {
			isValid1 = true;
		}
		return {...state, pass1:action.payload.pass1, pass1Valid:isValid1};
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