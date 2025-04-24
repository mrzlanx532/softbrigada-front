export default () => {
    const briefIsOpen = useState('isBriefOpen', () => false)

    return {
        briefIsOpen
    }
}