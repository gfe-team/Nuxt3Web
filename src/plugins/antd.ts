import 'ant-design-vue/dist/antd.css'

import { Button, ConfigProvider, Image, Card, Table } from 'ant-design-vue'

// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ConfigProvider).use(Button).use(Image).use(Card).use(Table)
})
