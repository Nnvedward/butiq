import axios from 'axios'

const API = 'http://localhost:4000/api/'
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token

export const publicRequest = axios.create({
    baseURL: API
})

export const userRequest = axios.create({
    baseURL: API,
    headers: { "Authorization": `Bearer ${TOKEN}` }
})