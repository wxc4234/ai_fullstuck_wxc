import axios from 'axios'

export const get = (id) => {
  return axios.get(`/api/oss/fireVideo/${id}`)
}

