import type { CustomRuntimeConfigPublic } from '~/types'

const config: CustomRuntimeConfigPublic = {
  baseURL: "https://api.example.ru",
  email: "info@gmail.com",
  phone: "79999999999",
  telegram: "https://t.me/example",
  whatsapp: "https://wa.me/79999999999",
  address: "г. Москва, ул. Ленина, д. 1",
  legal: {
    organization: 'ИП Иванов Иван Иванович',
    inn: '777777777777',
    ogrn: '32222222222222'
  }
}

export default config