// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['v-gsap-nuxt', 'nuxt-svgo'],
  css: ['~/assets/scss/app.scss'],
  svgo: {
    global: false,
    autoImportPath: false
  }
})