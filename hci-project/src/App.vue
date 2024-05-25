<template>
    <v-app>
      <NavigationBar/>
      <v-main color='#DDEAF4'>
        <RouterView/>
        <v-snackbar v-model="snackbar" vertical color="error" variant="tonal">
          <div class="text-subtitle-1 pb-2">ERROR</div>
          <p> try again </p>
        </v-snackbar>
        <v-btn @click="showWarning">SHOW WARNING</v-btn>
      </v-main>
      
    </v-app>
    
</template>

<script setup>
import NavigationBar from './components/NavigationBar.vue';
import { useErrorStore } from './Stores/ErrorStore';
import { computed } from 'vue';
const errorStore = useErrorStore();

const snackbar = computed({
  get: () => errorStore.snackbar,
  set: (value) => { errorStore.snackbar = value; }
});

function showWarning(){
  errorStore.showError("ERROR", "try again");
}
</script> 


