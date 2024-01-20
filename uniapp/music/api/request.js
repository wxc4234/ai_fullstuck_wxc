const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' :
  'xxxxx' // 根据 process.env.NODE_ENV 的值判断当前是什么环境

export default baseUrl