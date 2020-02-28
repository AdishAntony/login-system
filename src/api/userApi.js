import {HttpClient} from './httpClient' 

// This is the API. The backend root URL can be set from here.
const API = 'https://randomuser.me/api'

//Setting the user URI
const USER_API = `${API}/0.8/?results=20`

//Read
const getUsers = () => {
    return HttpClient.get(USER_API)
}

//Encapsulating in a JSON object
const UserApi = {getUsers}

export {UserApi}