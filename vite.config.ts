import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 将 base 设置为你的 GitHub Pages 仓库名路径：/ecobaseweb/
export default defineConfig({
  base: '/ecobaseweb/',
  plugins: [react()],
})