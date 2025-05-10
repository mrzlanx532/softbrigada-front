// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['v-gsap-nuxt', 'nuxt-svgo', '@nuxtjs/device'],
  css: ['~/assets/scss/app.scss'],
  app: {
    head: {
      link: [{ rel: 'icon', href: '/favicon.png' }],
      title: 'Разрабатываем IT-решения для бизнеса — от идеи до запуска',
      meta: [{
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      }]
    }
  },
  svgo: {
    global: false,
    autoImportPath: false
  }
})