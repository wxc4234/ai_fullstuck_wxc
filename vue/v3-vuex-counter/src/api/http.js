// 封装项目需要的http对象
// const http = axios.create({
//   baseURL: 'http://localhost:3000',
//   timeout: 1000,
//   headers: { 'X-Custom-Header': 'foobar' }
// });

import axios from 'axios';
// 配置
// 每个请求不用写完整的地址了，因为http://localhost:3000是一样的
// dev -> production douban.com 在fetch里面url都要改一遍
// 后端开发接口需要时间，自己先用localhost模拟一下
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.timeout = 10 * 1000;//超时时间
axios.defaults.maxBodyLength = 5 * 1024 * 1024;//限制最大请求体大小5M post请求上传文件、照片


const http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
      })
    });
  },
  post() {

  }
}
export default http;