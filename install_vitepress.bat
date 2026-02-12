cd /opt/jacky/docs

apt install npm
npm init -y
npm add -D vitepress vue
npx vitepress -v



步骤 1：打开项目根目录下的 vite.config.js（或 .ts）
步骤 2：在 server 配置中添加 allowedHosts

// vite.config.js
import { defineConfig } from 'vite'
// ... 其他导入

export default defineConfig({
  server: {
    // 允许指定的 Host 访问
    allowedHosts: ['docs.oddmeta.net'],
    
    // 如果你还想通过 IP 或其他域名访问，可以加多个：
    // allowedHosts: ['docs.oddmeta.net', 'dev.oddmeta.net', '192.168.1.100'],
    
    // 可选：如果你使用了反向代理或内网穿透，可能还需要配置 host 和 port
    host: '0.0.0.0', // 允许外部访问
    port: 5173,
  },
  // ... 其他配置（build、plugins 等）
})

步骤 3：在项目根目录下运行 npm run dev 或 pnpm dev




