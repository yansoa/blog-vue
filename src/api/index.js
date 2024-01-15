import axios from 'axios';
const request = (url = '' ,data ={} ,method = 'get', timeout = 5000) =>{
    return new Promise((resolve, reject) => {
        axios({
            url,
            method,
            data,
            timeout,
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}