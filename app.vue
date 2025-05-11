<script setup lang="ts">
import { onMounted } from 'vue'
import { useSDK } from "~/composables/useSDK";
import type {SDK} from "ysdk";

const { sdk } = useSDK()

onMounted(() => {
  const checkSDK = setInterval(() => {
    if (typeof window !== 'undefined' && (window as any).YaGames) {
      clearInterval(checkSDK);
      YaGames.init().then((ysdk: SDK) => {
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
