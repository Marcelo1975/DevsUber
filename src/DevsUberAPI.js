export const verifyLogin = function() {
    return new Promise(function(resolve, reject){
        // Temporariamente
        setTimeout(function(){
            let status = 1;
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
            resolve();
        }, 2000);

    });
};

export const makeLocationSearch = function(locTxt){
    return new Promise(function(resolve, reject){
        //Temporariamente
        setTimeout(function(){
            let array = [
                {id:1,label:'Rua alguma 100', lat:-10, lng:-11},
                {id:2, label:'Rua de teste 150', lat:-23.6992435, lng:-46.8019848},
                {id:3, label:'Rua alguma2 10', lat:-60, lng:-61},
                {id:4, label:'Rua alguma3 500', lat:-40, lng:-41}
            ];
            resolve(array);
        }, 500);

    });
};

export const makeTripSearch = function(origin, dest){
    return new Promise(function(resolve, reject){
        //Temporariamente
        setTimeout(function(){
            let array = [
                {id:1, type:'Barato', price:12},
                {id:2, type:'Medio', price:15},
                {id:3, type:'Caro', price:25}
            ];
            resolve(array);
        }, 2000);

    });
};