import { LoginApi } from "../../api/loginApi";
import * as UserActions from "../../user/actions/userActions";

//LOGIN
export const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN' 
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' 
export const LOGIN_ERROR = 'LOGIN_ERROR' 

// Read from API
export function attemptLogin(data){
    return (dispatch, getState) => {
        const res =  LoginApi.checkLogin(data)
        if(res === true){
            dispatch(UserActions.GetInitialUsers());
            dispatch(LoginSuccess());
        } else {
            dispatch(LoginFailure());
        }
    }
}

export function LoginSuccess(){
    return {
        type:LOGIN_SUCCESS,
        isLoggedIn: true
    }        
}

export function LoginFailure(){
    return {
        type:LOGIN_ERROR,
        isLoggedIn: false
    }
}
