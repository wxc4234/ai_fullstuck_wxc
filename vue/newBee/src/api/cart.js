// 获取购物车页面的信息
import axios from "./axios.js";

export function getCart() {
  return axios.get('/shop-cart')
}

export function addCart(params) {
  return axios.post('/shop-cart', params)
}