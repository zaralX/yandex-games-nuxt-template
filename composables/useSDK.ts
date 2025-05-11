import { ref } from 'vue';

const sdk = ref(null);

export const useSDK = () => {

    return { sdk };
};
