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
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/6fec6604850242451a5cba9d48674a8.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/8fa8b1c5babb044938e7c6b5f05a725.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-09-16%20232448.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-09-16%20232702.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-09-16%20232857.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-09-16%20233146.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-09-16%20233448.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/refs/heads/main/pics/22cb88192f4f6a29cfafb3bf0d14158.webp",
        "https://raw.githubusercontent.com/xjtu-wjz/void2004/refs/heads/main/pics/a0aa378d81c4bb376f545c273863ee7.webp",
        
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
      serverURL: 'https://void2024.vercel.app/',
      emoji: [/*  */],
      pageview: true,
    }),
  ],


})