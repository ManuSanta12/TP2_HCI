import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useErrorStore = defineStore('automations', () => {
    const snackbar = ref(false);
    const errorTitle = ref('There was an error!');
    const errorBody = ref('Please try again');

    function showError(title, body) {
        errorTitle.value = title;
        errorBody.value = body;
        snackbar.value = true;
    }
    return {showError, snackbar, errorTitle, errorBody}
});