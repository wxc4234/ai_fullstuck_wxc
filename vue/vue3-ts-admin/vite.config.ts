import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 引入了path模块，用于处理路径
// ts -> js ->es5 是babel转义的
import AutoImport from 'unplugin-auto-import/vite'
// 引入自动引入插件
import Components from 'unplugin-vue-components/vite'
// 引入组件插件
import {ElementPlusResolve} from 'unplugin-vue-components/resolvers'
// 自动引入Element Plus样式

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      views: path.resolve(__dirname, './src/views'),
      interfaces: path.resolve(__dirname, './src/interfaces'),
    }
  },

})
