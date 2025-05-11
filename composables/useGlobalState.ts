export default () => {
    const briefIsOpen = useState('briefIsOpen', () => false)
    const burgerMenuIsOpen = useState('burgerMenuIsOpen', () => false)
    const widgetIsVisible = useState('widgetIsVisible', () => true)

    return {
        briefIsOpen,
        burgerMenuIsOpen,
        widgetIsVisible
    }
}