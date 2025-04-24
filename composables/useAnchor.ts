export default () => {
    const goToAnchor = (id: string) => {
        const a = document.createElement('a')
        a.href = `#${id}`
        a.click()

        window.history.pushState('', document.title, window.location.pathname)
    }

    return {
        goToAnchor
    }
}