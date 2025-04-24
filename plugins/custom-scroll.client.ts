import { DocumentScroll } from '@mrzlanx532/nuxt-3-custom-scroll-plugin'

import '@mrzlanx532/nuxt-3-custom-scroll-plugin/dist/css/common.css'
import '@mrzlanx532/nuxt-3-custom-scroll-plugin/dist/css/document-scroll.no-ssr.css'

export default defineNuxtPlugin((nuxtApp) => {
    onNuxtReady(async () => {
        window.documentScroll = new DocumentScroll

        try {
            new ResizeObserver(() => {
                window.documentScroll.updateScroll()
            }).observe(document.documentElement)
        } catch (e) {
            console.warn('Не удалось установить ResizeObserver для document')
        }
    })
})