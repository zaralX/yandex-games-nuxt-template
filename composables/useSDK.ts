import { ref } from 'vue';
import type { SDK } from 'ysdk';

const sdk = ref<SDK | null>(null);

export const useSDK = () => {
    return { sdk };
};