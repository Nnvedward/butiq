import axios from 'axios'

const API = 'https://butiq.onrender.com/api/'
const TOKEN = ""

export const publicRequest = axios.create({
    baseURL: API
})

export const userRequest = axios.create({
    baseURL: API,
    headers: { "Authorization": `Bearer ${TOKEN}` }
})
