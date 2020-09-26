import axios from "axios"
const timewiseApi = axios.create({
    baseURL : 'http://localhost:3000/',
    timeout : 10000,
    headers :{
        'Authorization' : 'Bearer ' + localStorage.getItem("token")
    }
});

export default timewiseApi;