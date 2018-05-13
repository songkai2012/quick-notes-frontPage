import axios from 'axios'
// import store from '@/store/index'
import {apiBase} from './config'

const clientparam = {
  client: 'wh5',
  clientVersion: '1.0.0',
  loginType: 2,
  platform: 'APP/m'
}

axios.defaults.withCredentials = true
axios.defaults.timeout = 5000

axios.interceptors.request.use(config => {
  // store.commit('updateLoadingFlag', true);
  return config
}, error => {
  // store.commit('updateLoadingFlag', false);
  return Promise.reject(error)
})

function http (functionId, mapper, type = 'get') {
  const params = {
    functionId: functionId,
    body: JSON.stringify(mapper)
  }

  return axios({
    type: type,
    url: apiBase,
    params: Object.assign(params, clientparam)
  })
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      console.log(e)
    })
}

export default http
