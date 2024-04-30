import axios from 'axios'

const BASE_URL = 'http://localhost:8080'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

axiosInstance.interceptors.request.use(
  (config) => {
    //TODO 添加token
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
