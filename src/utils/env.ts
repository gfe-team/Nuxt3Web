import { useRuntimeConfig } from '../../node_modules/nuxt/dist/app'

const { VITE_API_ENV, VITE_API_URL } = useRuntimeConfig().public

const envConfig = {
  ENV: VITE_API_ENV,
  APIURL: VITE_API_URL,
}

export default envConfig
