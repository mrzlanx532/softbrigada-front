export default () => {
    const briefIsOpen = useState('briefIsOpen', () => false)
    const burgerMenuIsOpen = useState('burgerMenuIsOpen', () => false)
    const widgetIsVisible = useState('widgetIsVisible', () => true)
    const modalIsOpen = useState('modalIsOpen', () => false)

    const scrollBarWidthWasRead = useState('scrollBarWidthWasRead', () => false)
    const scrollBarWidth = useState('scrollBarWidth', () => 0)

    watch(modalIsOpen, (val) => {
        if (!(scrollBarWidthWasRead.value)) {
            scrollBarWidth.value = window.innerWidth - document.documentElement.clientWidth
            scrollBarWidthWasRead.value = true
        }
    })

    watch(briefIsOpen, (val) => {

        if (!(scrollBarWidthWasRead.value)) {
            scrollBarWidth.value = window.innerWidth - document.documentElement.clientWidth
            scrollBarWidthWasRead.value = true
        }

        if (val) {
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = scrollBarWidth.value + 'px'
            return
        }

        setTimeout(() => {
            document.body.style.overflow = ''
            document.body.style.paddingRight = ''
        }, 250)

    })

    return {
        scrollBarWidth,
        briefIsOpen,
        modalIsOpen,
        burgerMenuIsOpen,
        widgetIsVisible
    }
}