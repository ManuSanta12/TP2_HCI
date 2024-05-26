import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useErrorStore = defineStore('automations', () => {
    const snackbar = ref(false);
    const errorTitle = ref('There was an error!');
    const errorBody = ref('Please try again');
    const snackbarColor = ref('red');

    function showError(title, body) {
        errorTitle.value = title;
        errorBody.value = body;
        snackbarColor.value = 'error';
        snackbar.value = true;
    }
    function showSuccess(title, body) {
        errorTitle.value = title;
        errorBody.value = body;
        snackbarColor.value = 'green';
        snackbar.value = true;
    }

    return {showError, showSuccess, snackbar, snackbarColor, errorTitle, errorBody}
});