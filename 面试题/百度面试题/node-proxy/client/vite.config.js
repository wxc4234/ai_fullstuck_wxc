import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 后端服务实际地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 去掉/api
      }
    }
  }
})
//

// axios.get('./api')
// vite帮我们启动了一个node服务，且帮我们朝 'http://localhost:3000' 发送了请求，因为后端没有同源策略
// 所有vite里面的node服务能直接请求到数据，再提供给前端
// 但是