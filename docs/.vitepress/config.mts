import { defineConfig } from 'vitepress'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/fpvcy/',

  title: "FPV Cyprus WiKi",
  description: "FPV Cyprus community wiki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'На главную', link: '/' },
      { text: 'Наш чат в Telegram', link: 'https://t.me/fpvcyprus' }
    ],

    sidebar: [
      {
        text: 'Важное',
        items: [
          { text: 'Регуляции', link: '/legal' },
          { text: 'Магазины', link: '/stores' },
          { text: 'Карта', link: '/map' },
        ]
      },
      {
        text: 'Гайды',
        items: [
          { text: 'Как покупать LiPo', link: '/guides/lipo-transfer' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/andreineustroev/fpvcy' }
    ]
  }
})
