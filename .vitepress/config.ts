import path from 'path'


const nav = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '文档',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: '入门', link: '/getting-started' },
      { text: '高级用法', link: '/advanced-usage/' }
    ]
  }
]


export default {
  lang: 'zh-CN',
  title: 'Soketi',
  description: 'Soketi is your simple, fast, and resilient open-source WebSockets server.',
  srcDir: 'src',
  srcExclude: [],
  scrollOffset: 'header',

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'twitter:site', content: '@larvacent' }],
    ['meta', { name: 'twitter:card', content: 'larva' }]
  ],

  themeConfig: {
    nav,

    algolia: {
      indexName: 'easywechat',
      appId: 'X3KJL5SQXD',
      apiKey: '5c5ba71b35c48411f245bef4c695fc36'
      // searchParameters: {
      //   facetFilters: ['version:v3']
      // }
    },

    // carbonAds: {
    //   code: '',
    //   placement: ''
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/larvatecn/soketi-docs-zh-cn' }
    ],

    editLink: {
      pattern:
        'https://github.com/larvatecn/soketi-docs-zh-cn/edit/src/:path',
      text: '帮助我们改善此页面！'
    },

    license: {
      text: 'MIT License',
      link: 'https://opensource.org/licenses/MIT'
    },
    copyright: `Copyright © 2013-${new Date().getFullYear()} 拉瓦科技 <a class="ml-4" href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备19007076号-4</a>`
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: []
    },
    // @ts-ignore
    ssr: {
      external: []
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  }
}
