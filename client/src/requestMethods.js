import axios from 'axios'

const API = 'https://nnv-butiq.herokuapp.com/api/'
const TOKEN = ""

export const publicRequest = axios.create({
    baseURL: API
})

export const userRequest = axios.create({
    baseURL: API,
    headers: { "Authorization": `Bearer ${TOKEN}` }
})