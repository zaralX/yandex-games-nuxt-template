export default defineNuxtPlugin((nuxtApp) => {
    if (import.meta.client) {
        const script = document.createElement('script')
        script.src = import.meta.dev ? 'https://yandex.ru/games/sdk/v2' : '/sdk.js'
        script.async = true
        script.onload = () => {
            console.log('Yandex SDK loaded')
        }
        document.head.appendChild(script)
    }
})