import { defineConfig } from 'vitepress'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FPV Cyprus WiKi",
  description: "FPV Cyprus community wiki",
  head: [
      ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
      ["meta", { name: "google-site-verification", content: "IL6cbU7y0Jwf2HW2WpS03ZSyNyTTW6nqZq8kp7Ovmhk" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'На главную', link: '/' }
    ],
    logo: "/favicon.svg",
    editLink: {
      pattern: "https://github.com/andreineustroev/fpvcy/edit/main/docs/:path",
      text: "Редактировать эту страницу на GitHub",
    },
    sidebar: [
      {
        text: 'Важное',
        items: [
          { text: 'Регуляции', link: '/legal' },
          { text: 'Магазины', link: '/stores' },
          { text: 'Карта', link: '/map' },
          { text: 'GPS спуфинг', link: '/gps-spoofing' },
          { text: 'Совместные полёты', link: '/how-to-fly-together' },
        ]
      },
      {
        text: 'Гайды',
        items: [
          { text: 'Начало', link: '/guides/neophyte' },
          { text: 'Первый полёт', link: '/guides/first-flight' },
          { text: 'Как покупать LiPo', link: '/guides/lipo-transfer' },
          { text: 'Как перевозить LiPo', link: '/guides/lipo-flight' },
        ]
      },
      {
        text: 'Прочее',
        items: [
          { text: 'Видео полётов', link: '/other/creators' },
          { text: 'О сайте', link: '/other/about' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/andreineustroev/fpvcy' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>',
        },
        link: "https://t.me/fpvcyprus",
      },
    ]
  },
  sitemap: {
    hostname: 'https://fpvcy.com'
  }
})
