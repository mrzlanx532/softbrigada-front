// https://nuxt.com/docs/api/configuration/nuxt-config
import runtimeConfigPublic from './config'
import { type CustomRuntimeConfigPublic } from '~/types'

export default defineNuxtConfig({
  routeRules: {
    '/': { static: true },
  },
  experimental: {
    /** @ts-expect-error: Nuxt 3 пишет что такого типа нет, но он есть */
    inlineSSRStyles: false
  },
  runtimeConfig: {
    public: runtimeConfigPublic as unknown as CustomRuntimeConfigPublic
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    'v-gsap-nuxt',
    'nuxt-svgo',
    '@nuxtjs/device',
    '@vue-final-modal/nuxt',
    'nuxt-yandex-metrika'
  ],
  yandexMetrika: {
    id: runtimeConfigPublic.yandexMetrikaId,
    options: {
      webvisor: true
    }
  },
  css: ['~/assets/scss/app.scss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      link: [
        { rel: 'icon', href: '/favicon.png' },
        { rel: 'preload', href: '/images/gradients/hero-section-gradient.png', as: 'image', fetchpriority: 'high'},
        { rel: 'preload', href: '/fonts/Hauora-Medium.otf', as: 'font', type: 'font/otf' },
        { rel: 'preload', href: '/fonts/Hauora-SemiBold.otf', as: 'font', type: 'font/otf' },
      ],
      title: 'Разрабатываем IT-решения для бизнеса — от идеи до запуска',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        },
        {
          name: 'description',
          content: 'Создание современных IT-продуктов с нуля: интернет-магазины, корпоративные веб-сервисы, CRM и SaaS-решения от SoftBrigada с полным циклом разработки'
        }
      ]
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