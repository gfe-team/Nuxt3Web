import type { NuxtApp } from '#app'
import { defineNuxtPlugin } from '#app'

// @ts-ignore
export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  nuxtApp.hook('page:finish', (e: any) => {
    window.scrollTo(0, 0)
  })
})
