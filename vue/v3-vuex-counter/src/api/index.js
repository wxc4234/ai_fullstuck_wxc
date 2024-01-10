import http from './http';

export async function getBannersData() {
  // http 模块化的http请求对象
  const { banners } = await http.get('/banner', { type: 1 });//意思是请求type=1的数据
  return banners;
}