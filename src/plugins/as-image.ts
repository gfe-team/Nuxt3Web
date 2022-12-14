import '@awesome-image/image/dist/style.css'

// @ts-ignore
import { AsImage } from '@awesome-image/image'
import { imageUrlGeneratorFP } from '@awesome-image/services'

import type { NuxtApp } from '#app'
import { defineNuxtPlugin } from '#app'

// @ts-ignore
export default defineNuxtPlugin((nuxt: NuxtApp) => {
  nuxt.vueApp.use(AsImage, {
    imageUrlGenerator: imageUrlGeneratorFP,
  })
})
