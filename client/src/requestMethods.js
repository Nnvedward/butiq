import axios from 'axios'

const API = 'http://localhost:4000/api/'

export const publicRequest = axios.create({
    baseURL: API
})