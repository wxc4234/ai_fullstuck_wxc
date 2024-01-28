import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://mock.presstime.cn/mock/65ae5dbfb02591272cc4c893/partner',
  timeout: 1000
})

export const fetchDataMen = () => {
  return instance.get('/man')
}
export const fetchDataWomen = () => {
  return instance.get('/women')
}