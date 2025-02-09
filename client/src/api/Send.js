import axios from 'axios'

const instance = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  contentType: 'application/json',
  accessControlAllowOrigin : '*',
  withCredentials: false
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response) => {
    return response
  },

  (error) => {
    return Promise.reject(error)
  },
)

export default instance
