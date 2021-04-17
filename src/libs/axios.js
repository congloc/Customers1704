'use strict'

import axios from 'axios'
import store from '@src/store'

const API_URL = process.env.VUE_APP_API_BASE_URL ? process.env.VUE_APP_API_BASE_URL : '/api/v1'

let config = {
  baseURL: API_URL,
  timeout: 60 * 1000 // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const http = axios.create(config)

http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default http
