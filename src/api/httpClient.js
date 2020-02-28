import axios from 'axios' 

//Create a Http Client using Axios. Further modifications in this layer can be done later like Authorization.

const post = (url = '', data = '', config = {}) => {
    return axios.post(url, data, config)
}

const get = (url) => {
    return axios(url)
}

const put = (url = '', data = '', config = {}) => {
    return axios.put(url, data, config)
}

const del = (url = '', config = {}) => {
    return axios.delete(url, config)
}

const HttpClient = {
    post,
    get,
    put,
    delete: del
}

export {HttpClient}