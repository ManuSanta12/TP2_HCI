<template>
  <v-row dense>
    <v-col >
      <v-card class="pa-2" width="300">
        <v-row class="px-3 pt-3">
          <v-col cols="10">
            <v-card-title class="pa-0 text-h8">{{automation.name}}</v-card-title>
          </v-col>
          <v-col cols="2" class="d-flex justify-end pa-0">
            <v-btn icon :color="iconColor" @click="togglePlay" v-model="isOn">
              <v-icon>{{ icon }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-card-subtitle class="px-3">Not Scheduled</v-card-subtitle>
        <v-card-text class="px-3 pb-3">Includes {{ automation.actions }} actions</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {ref} from 'vue'
import { useAutomationStore } from '@/Stores/AutomationStore';

export default {
  props: {
    automation: Object
  },
  data() {
    return {
      icon: 'mdi-pause',
      iconColor: 'red',
    };
  },
  setup(props){
    const store = useAutomationStore();
    const isOn = ref(false);
    function togglePlay(){
      isOn.value = !isOn.value;
      this.icon = this.icon === 'mdi-pause' ? 'mdi-play' : 'mdi-pause';
      this.iconColor = this.icon == 'mdi-pause' ? 'green' : 'red';
    }
    return {
      isOn,
      togglePlay

    }
  }
};
</script>
