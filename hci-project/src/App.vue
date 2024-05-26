<template>
    <v-app>
      <NavigationBar/>
      <v-main color='#DDEAF4'>
        <RouterView/>
        <v-btn @click="showError">Show Error</v-btn>
        <v-btn @click="showSuccess">Show Success</v-btn>
        <v-snackbar v-model="snackbar" vertical :color="snackbarColor">
          <div class="text-subtitle-1 pb-2">{{ errorTitle }}</div>
          <p> {{ errorBody }} </p> 
        </v-snackbar>
      </v-main>
      
    </v-app>
    
</template>

<script setup>
import NavigationBar from './components/NavigationBar.vue';
import { useErrorStore } from './Stores/ErrorStore';
import { computed, ref } from 'vue';
const errorStore = useErrorStore();

const snackbar = computed({
  get: () => errorStore.snackbar,
  set: (value) => { errorStore.snackbar = value; }
});

const snackbarColor = computed(() => errorStore.snackbarColor);
const errorTitle = computed(() => errorStore.errorTitle);
const errorBody = computed(() => errorStore.errorBody);

function showError() {;
  errorStore.showError("Error Title", "Error Body");
}
function showSuccess(){
  errorStore.showSuccess("Success Title", "Success Body");
}
</script> 


