export default () => {
    const goToAnchor = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return {
        goToAnchor
    }
}