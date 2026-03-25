import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    server: {
      port: 3001,
      host: '0.0.0.0',
      allowedHosts: ['docs.oddmeta.net','docs.oddmeta.com'],
      fs: {
        // 拒绝访问 .git 目录
        deny: ['.git', 'node_modules', '.venv'],
      },
      hmr: {
        overlay: false // 添加这一行来禁用错误覆盖层
      }
    }
  },
  title: "小奥文档",
  description: "小落同学文档中心。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '开源项目', items: 
        [
          { text: '点滴清单', link: '/products/reminders/index' },
          { text: '小落同学', link: '/story' },
        ]
      },

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

      { text: '开源组件', items: 
        [
          { text: 'OddAgent', link: '/products/oddagent' },
          { text: 'OddAsr', link: '/products/oddasr' },
          { text: 'OddTTS', link: '/products/oddtts' },
          { text: 'OddNotifier', link: '/products/oddnotifier' }
        ]
      },

      {
        text: "联系我们",
        link: "https://oddmeta.net/contact",
      },

      {
        text: "关于我们",
        link: "https://oddmeta.net/about",
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
        text: '点滴清单',
        items: [
          { text: '项目介绍', link: '/products/reminders/index' },
          { text: '隐私政策', link: '/products/reminders/privacy_policy' },
          { text: '用户协议', link: '/products/reminders/user_agreement' },
          { text: '用户手册', link: '/products/reminders/user_manual-v1.3.0' },
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
      copyright: "<div style='display: flex; justify-content: center; align-items: center; gap: 4px; text-align: center;'><span>Copyright © 2023-present OddMeta.</span></div><div style='display: flex; justify-content: center; align-items: center; gap: 4px; margin: 4px 0;'><a href='https://beian.mps.gov.cn/#/query/webSearch?code=31011302008989' rel='noreferrer' target='_blank' style='display: flex; align-items: center; text-decoration: none; color: inherit;'><img src='https://beian.mps.gov.cn/web/assets/logo01.6189a29f.png' width='24' height='24' style='vertical-align: middle; margin-right: 4px;' alt='police badge'>      <span>沪公网安备31011302008989号</span></a></div><div style='margin: 4px 0;'><a href='https://beian.miit.gov.cn/' rel='external nofollow' target='_blank'>沪ICP备18041804号</a></div>",
    },
  }
})