import path from 'path'
import { loadEnv } from 'vite'
import { version } from './package.json'

// import { IntlifyModuleOptions } from '@intlify/nuxt3';
// import Components from 'unplugin-vue-components/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// const isProd = process.env.NODE_ENV === 'production';
// const isDev = process.env.NODE_ENV === 'development';

// declare module '@nuxt/schema' {
//     interface NuxtConfig {
//         intlify?: IntlifyModuleOptions
//     }
// }

const envScript = process.env.npm_lifecycle_script?.split(' ')
interface VITE_ENV_CONFIG {
  VITE_API_ENV: string
  VITE_API_URL: string
}
// @ts-ignore
const envName = envScript[envScript.length - 1]
const envData = loadEnv(envName, 'env') as unknown as VITE_ENV_CONFIG

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      ...envData,
    },
  },
  srcDir: 'src',
  css: ['ant-design-vue/dist/antd.css', '~/assets/sass/app.scss'],
  plugins: ['@/plugins/antd'],
  // modules:["@nuxt/content"],
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxt/content', '@intlify/nuxt3'],
  // app
  app: {
    head: {
      title: 'Nuxt3',
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, user-scalable=0',
        },
        {
          name: 'keywords',
          content: 'nuxt3,antd-design',
        },
        {
          name: 'description',
          content: 'content content content content',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        {
          id: 'vscp',
          src: `/scripts/version.js?v=${version}`,
        },
      ],
    },
  },
  // meta: {

  // },
  build: {
    transpile: ['@juggle/resize-observer', '@awesome-image/image'],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        jsx: 'preserve',
        strict: true,
        types: ['@pinia/nuxt', './type.d.ts'],
      },
    },
  },
  // auto import components
  components: true,
  vite: {
    logLevel: 'info',
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svgs/')],
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    optimizeDeps: {
      // include: isDev ? ['date-fns-tz/esm/formatInTimeZone'] : []
    },
    envDir: '~/env',
  },
  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'zh-CN',
      fallbackLocale: 'zh-CN',
      availableLocales: ['zh-CN', 'en'],
    },
  },
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // content
  content: {},
})
