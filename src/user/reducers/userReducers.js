import * as UserActions from '../actions/userActions'

export function UserReducer(state = [], action) {
    switch (action.type) {
        case UserActions.CREATE_USER_SUCCESS: {
            return action.user;
        }
        case UserActions.GET_USERS_SUCCESS: {
            return action.users;
        }         
        default:
            return state
    }
}