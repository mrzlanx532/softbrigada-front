export default () => {
    const scrollY = useState('scrollY', () => null)

    const setY = () => {

        if (scrollY.value === null) {
            scrollY.value = window.scrollY
        }

        return scrollY.value
    }

    const getY = () => {
        const value = scrollY.value

        scrollY.value = null

        return value
    }

    return {
        setY,
        getY
    }
}