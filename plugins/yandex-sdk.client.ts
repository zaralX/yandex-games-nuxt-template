export default defineNuxtPlugin((nuxtApp) => {
    if (import.meta.client) {
        const script = document.createElement('script')
        script.src = 'https://yandex.ru/games/sdk/v2'
        script.async = true
        script.onload = () => {
            console.log('Yandex SDK loaded')
        }
        document.head.appendChild(script)
    }
})