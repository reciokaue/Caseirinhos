import axios from 'axios'

export const path = 'http://localhost:3000/api/'
// export const path = 'https://caseirinhos.vercel.app/api/'

const api = axios.create({
    baseURL: 'http://localhost:3000/api/'
})

export default api;