import axios from 'axios'

const API = 'https://nnv-butiq.herokuapp.com/api/'
let TOKEN = ''

if(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser) {
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token
}

export const publicRequest = axios.create({
    baseURL: API
})

export const userRequest = axios.create({
    baseURL: API,
    headers: { "Authorization": `Bearer ${TOKEN}` }
})