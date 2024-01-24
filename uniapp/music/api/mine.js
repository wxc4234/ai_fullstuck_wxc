import baseUri from './request.js'

// 我的页面所有接口
export const apiGetUserInfo = (uid) => {
  return uni.request({
    url: `${baseUri}/user/detail`,
    method: 'GET',
    data: {
      uid: uid
    }
  })
}