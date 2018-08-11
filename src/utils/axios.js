import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Response interceptor
instance.interceptors.response.use(response => response, error => {
  const {status} = error.response
  if (status === 500) {
    // error handling
  }
  return Promise.reject(error)
})

export default instance
