import path from 'path'
import versions from './versions'

const latest = versions[0]

const nav = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '文档',
    activeMatch: `^/([0-9]\.x)/`,
    items: versions.map((version) => ({
      text: version,
      link: `/${version}/`
    }))
  },
]

export const sidebar = versions.reduce(
  (sidebars, version) => ({
    ...sidebars,
    [`/${version}/`]: require(path.join(
      __dirname,
      `../src/${version}/sidebar`
    ))
  }),
  {}
)

export default {
  lang: 'zh-CN',
  title: 'Soketi',
  description: 'Soketi 是您简单、快速且有弹性的开源 WebSockets 服务器。',
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
    sidebar,

    algolia: {
      indexName: 'lll',
      appId: '123123',
      apiKey: '123123'
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
