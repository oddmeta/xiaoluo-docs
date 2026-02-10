import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    server: {
      port: 3001,
      host: '0.0.0.0'
    }
  },
  title: "小奥文档",
  description: "小落同学文档中心。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '如何使用？', link: '/how-to-use' },
      { text: '关于小落同学', link: '/story' }, 
      { text: '典型场景', items: 
        [
          { text: '个人空间', link: '/scenarios/personal' },
          { text: '明星名人', link: '/scenarios/celebrity' },
          { text: '虚拟老婆', link: '/scenarios/virtual-wife' },
          { text: '客户支持', link: '/scenarios/customer-support' },
          { text: '个人健康顾问', link: '/scenarios/healthcare' },
          { text: '旅行助手', link: '/scenarios/travel' },
        ]
      },
      { text: '开源项目', items: 
        [
          { text: 'OddAgent', link: '/products/oddagent' },
          { text: 'OddAsr', link: '/products/oddasr' },
          { text: 'OddTTS', link: '/products/oddtts' },
          { text: 'OddNotifier', link: '/products/oddnotifier' }
        ]
      }
    ],

    sidebar: [
      {
        text: '小落同学文档',
        items: [
          { text: '如何使用', link: '/how-to-use' },
          { text: '注册账号', link: '/how-to-use/register' },
          { text: '创建角色', link: '/how-to-use/role-create' },
          { text: '记忆管理', link: '/how-to-use/role-memory' },
          { text: '角色对话', link: '/how-to-use/role-play' },
          { text: '角色发布', link: '/how-to-use/role-publish' },
        ]
      },

      {
        text: '典型场景',
        items: [
          { text: '个人空间', link: '/scenarios/personal' },
          { text: '明星名人', link: '/scenarios/celebrity' },
          { text: '虚拟老婆', link: '/scenarios/virtual-wife' },
          { text: '客户支持', link: '/scenarios/customer-support' },
        ]
      },

      {
        text: '开源项目',
        items: [
          { text: 'OddAsr', link: '/products/oddasr' },
          { text: 'OddTTS', link: '/products/oddtts' },
          { text: 'OddAgent', link: '/products/oddagent' },
          { text: 'OddNotifier', link: '/products/oddnotifier' }
        ]
      },

      {
        text: 'FAQ 常见问题',
        items: [
          { text: '如何上传自定义的Live2D模型', link: '/how-to-use/live2d_model_file_upload' },
          { text: '如何在Ubuntu上安装docker', link: '/faq/install_docker_on_ubuntu' },
          { text: '大模型兼容情况', link: '/faq/llm_models' },
          { text: 'ASR 支持的模型', link: '/faq/asr_engines' },
          { text: '代理设定', link: '/faq/proxy-setting' }
        ]
      },

      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },

      {
        text: "关于我们",
        link: "https://www.oddmeta.net/about",
      },

      { text: "更新日志", link: "/changelog" }
  
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oddmeta/xiaoluo-docs' }
    ],

    // 站点页脚配置
    footer: {
      // message: "Released under the MIT License",
      copyright: "Copyright © 2023-present OddMeta.<br>沪ICP备18041804号",
    },
  }
})