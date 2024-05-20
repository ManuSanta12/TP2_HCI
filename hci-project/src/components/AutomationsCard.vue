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
        <!--Aca hay que cambiar para que se imprima bien-->
        <v-card-subtitle class="px-3">Not Scheduled</v-card-subtitle>
        <v-card-text class="px-3 pb-3">Includes {{ automation.actionsLength }} actions</v-card-text>
        <v-btn min-width="200" @click="handleEdit">Edit Automation</v-btn>
        <v-btn class="mt-3" variant="tonal" color="error" min-width="200" @click="deleteAuto">Delete Automation</v-btn>

      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { defineEmits, ref } from 'vue'; 
import { useAutomationStore } from '@/Stores/AutomationStore';
//import { openEditDialog } from '@/Views/AutomationView2.vue'; 

const { openDialog, removeAutomation} = useAutomationStore();

const emit = defineEmits(['edit']);

const props = defineProps({
  automation: Object
});

const deleteAuto = () =>{
  console.log(props.automation.id);
  removeAutomation(props.automation.id);
}

const handleEdit = () => {
    emit('edit', props.automation);
  };

const isOn = ref(false);
let icon = 'mdi-pause';
let iconColor = 'red';


const togglePlay = () => {
  isOn.value = !isOn.value;
  icon = icon === 'mdi-pause' ? 'mdi-play' : 'mdi-pause';
  iconColor = icon === 'mdi-pause' ? 'red' : 'green';
};
</script>
