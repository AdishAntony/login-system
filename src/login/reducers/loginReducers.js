import * as LoginAction from '../actions/loginActions'

export function LoginReducer(state = { isLoggedIn : false }, action) {
    switch (action.type) {
        case LoginAction.LOGIN_SUCCESS: {
                return {
                    isLoggedIn : action.isLoggedIn
                };
        } 
        case LoginAction.LOGIN_ERROR: {
            return {
                isLoggedIn : action.isLoggedIn
            };
        }                 
        default:
            return state
    }
}