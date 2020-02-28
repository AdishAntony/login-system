import {combineReducers} from 'redux';
import {LoginReducer} from '../login/reducers/loginReducers';
import {UserReducer} from '../user/reducers/userReducers';

//One root reducer for the whole app. This is done so that the app will have one single reducer to manage lots of other resources.
// And also communication between the reducers will be easier to maintain.
 
const rootReducer = combineReducers({
    login : LoginReducer,
    user : UserReducer
})

export default rootReducer