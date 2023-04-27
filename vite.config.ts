import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/smart-code',
  plugins: [vue()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.json', '.vue']
  }
})
