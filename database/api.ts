import axios from 'axios'

// const path = 'http://localhost:3000/api/'
const path = 'https://caseirinhos.vercel.app/api/'

const api = axios.create({
    baseURL: path
})

export default api;