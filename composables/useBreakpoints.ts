import { useBreakpoints } from '@vueuse/core'

export default () => {
    const breakpoints = useBreakpoints({
        mobile: 0,
        desktop: 640
    })

    const currentBreakpoint = breakpoints.active()

    return {
        currentBreakpoint
    }
}