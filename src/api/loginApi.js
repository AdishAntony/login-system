//checkLogin
const checkLogin = data => {
    if( (data.username === "admin") && (data.password === "password"))
        return true;
    else 
        return false;
}

//Encapsulating in a JSON object
const LoginApi = {checkLogin}

export {LoginApi}