// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false, // обязательный параметр для SPA
  app: {
    baseURL: './', // важно для корректной работы ссылок в архиве
    cdnURL: './' // Для относительных путей у всего
  },
  nitro: {
    preset: 'static'
  },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image']
})