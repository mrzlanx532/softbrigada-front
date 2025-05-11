export default () => {
    const briefIsOpen = useState('isBriefOpen', () => false)
    const burgerMenuIsOpen = useState('isBurgerMenuOpen', () => false)

    return {
        briefIsOpen,
        burgerMenuIsOpen
    }
}