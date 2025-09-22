// https://nuxt.com/docs/api/configuration/nuxt-config
import runtimeConfigPublic from './config'

export default defineNuxtConfig({
  experimental: {
    /** @ts-expect-error: Nuxt 3 пишет что такого типа нет, но он есть */
    inlineSSRStyles: false
  },
  runtimeConfig: {
    public: runtimeConfigPublic as unknown as any
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['v-gsap-nuxt', 'nuxt-svgo', '@nuxtjs/device', '@vue-final-modal/nuxt'],
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
  typescript: {
    typeCheck: false,
  },
  svgo: {
    global: false,
    autoImportPath: false
  }
})