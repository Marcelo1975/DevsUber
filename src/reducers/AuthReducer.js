const initialState = {
	email:'',
	status:0 //(0 -> Não verificado, 1 -> Logado, 2 -> Não logado)
};

const AuthReducer = (state = initialState, action) => {
	//Padrão
	if(action.type == 'changeEmail') {
		return {...state, email:action.payload.email};
	}

	if(action.type == 'changeStatus') {
		return {...state, status:action.payload.status};
	}

	return state;
}

export default AuthReducer;