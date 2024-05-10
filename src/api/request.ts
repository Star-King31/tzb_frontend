import axios from 'axios'
import { message } from '@/utils'
import { BASE_URL, TIMEOUT } from '@/config'




const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
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

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      message.error("响应错误:"+response.data.msg)
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
