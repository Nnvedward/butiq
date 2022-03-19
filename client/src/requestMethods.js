import axios from 'axios'

const API = 'http://localhost:4000/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzVkYmE3ZTAyMjljZGZmNmY4MWY3NyIsInJvbGUiOiI2MjFkZjhkM2M1ZWQ0NTdmNmYyOTI3NGMiLCJpYXQiOjE2NDc2OTY4MDh9.__XzYTJjVlyyImIhD0WLMTPWLThesactcLy8gn1EqEg'

export const publicRequest = axios.create({
    baseURL: API
})

export const userRequest = axios.create({
    baseURL: API,
    header: { token: `Bearer ${TOKEN}` }
})