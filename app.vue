<script setup lang="ts">
import { onMounted } from 'vue'
import { useSDK } from "~/composables/useSDK";

const { sdk } = useSDK()

onMounted(() => {
  const checkSDK = setInterval(() => {
    if (typeof window !== 'undefined' && (window as any).YaGames) {
      clearInterval(checkSDK);
      (window as any).YaGames.init().then((ysdk: any) => {
        console.log('Yandex SDK инициализирован', ysdk)
        sdk.value = ysdk;
      })
    }
    }, 100)
})

</script>

<template>
  <div class="min-h-screen w-full">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
