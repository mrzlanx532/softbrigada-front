import type { CustomRuntimeConfig } from '~/types'

export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig() as unknown as CustomRuntimeConfig

    const data = await $fetch('common/definitions', {
        baseURL: config.public.baseURL
    })

    useState('definitions', () => {
        return data
    })
})