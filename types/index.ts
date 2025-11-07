export interface CustomRuntimeConfigPublic {
    baseURL: string,
    email: string,
    phone: string,
    telegram: string,
    whatsapp: string,
    address: string,
    yandexMetrikaId: string | undefined,
    legal: {
        organization: string,
        inn: string,
        ogrn: string,
    }
}

export interface CustomRuntimeConfig {
    public: CustomRuntimeConfigPublic
}