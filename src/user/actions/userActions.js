import { UserApi } from "../../api/userApi";

//Create
export const CREATE_USER = 'CREATE_USER' 
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS' 
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR' 

//Read
export const GET_USERS = 'GET_USERS' 
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS' 
export const GET_USERS_ERROR = 'GET_USERS_ERROR' 
 
//Create
export function CreateUser(user){
        return (dispatch, getState) => {
            const userList = JSON.parse(localStorage.getItem('user list'));
            userList.push({user: user});
            localStorage.setItem('user list', JSON.stringify(userList));
            return dispatch(CreateUserSuccess(user));
        }
}

export function CreateUserSuccess(user){
    return (dispatch, getState) => {
        dispatch(GetUsers());
    }
}

// Read from API
export function GetInitialUsers(){
    return (dispatch, getState) => {
        //dispatch(GetUsersSuccess([{"users" :{}}]))
        return UserApi.getUsers().then(res => {
            localStorage.setItem('user list', JSON.stringify(res.data.results));
            dispatch(GetUsers())
        })
    }
}

// Read from local storage
export function GetUsers(){
    return (dispactch, getState) => {
        const res = localStorage.getItem('user list');
        return dispactch(GetUsersSuccess(JSON.parse(res)));
    }
}

// Read from local storage and returns filtered users
export function FilterUsers(keyword){
    return (dispatch, getState) => {
        var filteredData = JSON.parse(localStorage.getItem('user list')).filter( (user) => {
            return user.user.name.title.includes(keyword) || 
                user.user.name.first.includes(keyword) ||
                user.user.name.last.includes(keyword);
        });
        dispatch(GetUsersSuccess(filteredData));
    }
}

export function GetUsersSuccess(users){
    return {
        type:GET_USERS_SUCCESS,
        users
    }
}

export function GetUsersError(users){
    return {
        type:GET_USERS_ERROR,
        users
    }
}