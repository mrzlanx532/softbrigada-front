// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['v-gsap-nuxt', 'nuxt-svgo'],
  css: ['~/assets/scss/app.scss'],
  app: {
    head: {
      link: [{ rel: 'icon', href: '/favicon.png' }],
      title: 'Разрабатываем IT-решения для бизнеса — от идеи до запуска'
    }
  },
  svgo: {
    global: false,
    autoImportPath: false
  }
})