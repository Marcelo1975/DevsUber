export const verifyLogin = function() {
    return new Promise(function(resolve, reject){
        // Temporariamente
        setTimeout(function(){
            let status = 2;
            resolve(status);
        }, 2000);
    });

};

export const makeLogin = function(email, password) {
    return new Promise(function(resolve, reject){
        //Temporariamente
        setTimeout(function(){
            let status = 1;
            resolve(status);
        }, 2000);

    });
};

export const makeRegister = function(name, email, password) {
    return new Promise(function(resolve, reject){
        //Temporariamente
        setTimeout(function(){
            let status = 2;
            resolve(status);
        }, 2000);

    });
};

export const makeForgotPass = function(email) {
    return new Promise(function(resolve, reject){
        //Temporariamente
        setTimeout(function(){
            let status = 2;
            resolve(status);
        }, 2000);

    });
};