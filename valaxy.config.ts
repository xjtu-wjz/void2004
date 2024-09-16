import { defineConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-hairy'
import { addonWaline } from 'valaxy-addon-waline'
import { addonMeting } from 'valaxy-addon-meting'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: 'hairy',
  url: 'http://www.void2024.top/',
  themeConfig:{
    theme: 'dark',
    home: {
      title:"void's blog",
      headline:"void's Blog",
      description:"My name is void, welcome.",
      images: [ 
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/atri.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/bocchi_the_rock.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/color.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/genshin.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/hollow_knight.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/li.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/miku1.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/miku3.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/shanjing.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/water_world.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/windows.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/yireyna.webp",
        "https://pic.axi404.top/93141803_p0.ic1wc5z17.webp",
        "https://pic.axi404.top/93141612_p0.54xox14iok.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/frelian.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/landscape.webp",
        "pics/6fec6604850242451a5cba9d48674a8.webp",
        "pics/8fa8b1c5babb044938e7c6b5f05a725.webp",
        "pics/miku.webp",
        "pics/屏幕截图 2024-09-16 232448.webp",
        "pics/屏幕截图 2024-09-16 232702.webp",
        "pics/屏幕截图 2024-09-16 232857.webp",
        "pics/屏幕截图 2024-09-16 233146.webp",
        "pics/屏幕截图 2024-09-16 233448.webp",
      ]
    },
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'i-material-symbols-home-work-sharp',
      },
      {
        text: 'About',
        link: '/about',
        icon: 'i-material-symbols-recent-actors-rounded',
      },
      {
        text: 'Posts',
        link: '/archives/',
        icon: 'i-material-symbols-import-contacts-rounded',
      },
      {
        text: 'Links',
        link: '/links/',
        icon: 'i-material-symbols-monitor-heart',
      },
      {
        text: 'CV',
        link: 'https://xjtu-wjz.github.io/',
        icon: 'i-ri-sd-card-mini-fill',
      },
      {
        text: 'Github',
        link: 'https://github.com/xjtu-wjz',
        icon: 'i-ri-github-fill',
      },
    ],

    footer: {
      since: 2024,
      beian: {
        enable: false,
        icp: '',
      },
      powered: true,
    },


  },




  addons: [
    addonMeting({
      global: false,
      props: {
        // 设置你的网易云/qq或其他歌单 ID
        id: '5312894314',
        type: 'playlist',
        autoplay: false,
        theme: 'var(--hy-c-primary)',
      },
    }),
    // 请参考 https://waline.js.org/ 设置 serverURL 地址
    addonWaline({
      comment: true,
      serverURL: '...',
      emoji: [/*  */],
      pageview: true,
    }),
  ],


})