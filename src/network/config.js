import axios from "axios"
const timewiseApi = axios.create({
    baseURL : 'http://localhost:3000/',
    timeout : 10000,
});

timewiseApi.interceptors.request.use(function(config){
    const token = localStorage.getItem("token");
    config.headers = {
        'Authorization' : `Bearer ${token}`,
        'Accept' : 'application/json',
    }
    return config;
}, function(error){
    return Promise.reject(error);
});

export default timewiseApi;