import { type CustomRuntimeConfigPublic } from '~/types'

type CustomRuntimeConfigAdvanced = CustomRuntimeConfigPublic & {
    formattedPhone: string
}

export default () => {
    const runtimeConfig = useRuntimeConfig()

    const config = runtimeConfig.public as unknown as CustomRuntimeConfigAdvanced

    const formatPhone = (phone: string) => {
        const digits = phone.replace(/\D/g, '');

        const countryCode = '+7';
        const areaCode = digits.slice(1, 4);
        const part1 = digits.slice(4, 7);
        const part2 = digits.slice(7, 9);
        const part3 = digits.slice(9, 11);

        return `${countryCode} (${areaCode}) ${part1}-${part2}-${part3}`;
    }

    config.formattedPhone = formatPhone(config.phone)

    return config
}