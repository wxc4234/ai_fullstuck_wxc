// 获取购物车页面的信息
import axios from "./axios.js";

export function getCart() {
  return axios.get('/shop-cart')
}

export function addCart(params) {
  return axios.post('/shop-cart', params)
}

export function modifyCart(params) {
  return axios.put('/shop-cart', params)
}

export function deleteCartItem(params) {
  return axios.delete(`/shop-cart/${params}`)
}

export function getCartItemIds(params) {
  return axios.get('/shop-cart/settle', {params})
}