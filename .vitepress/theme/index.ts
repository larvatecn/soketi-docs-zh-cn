import './styles/index.css'
import { h, App } from 'vue'
import SponsorsAside from './components/SponsorsAside.vue'
import Footer from './components/Footer.vue'
import DefaultTheme from 'vitepress/theme'

export default Object.assign({
  ...DefaultTheme,
  Layout: () => {
    // @ts-ignore
    return h(DefaultTheme.Layout, null, {
      // banner: () => h(Banner),
      'aside-mid': () => h(SponsorsAside),
      'layout-bottom': () => h(Footer)
    })
  }
})
