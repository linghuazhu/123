import axios from 'axios'

export const api = "http://localhost:9250/";

export function getImagePath(image){
    return api+'uploads/'+image;
}

const service = axios.create({
    baseURL: api, // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

export default service