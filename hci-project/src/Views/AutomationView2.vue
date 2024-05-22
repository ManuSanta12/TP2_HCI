<template>
  <v-layout class="rounded rounded-md">
    <v-main color='#DDEAF4'>
      <v-row class="pa-6 scrollable">
        <div class="pa-6" v-for="auto in automations" :key="auto.id">
          <AutomationsCard 
          :automation="auto" 
          @edit="handleEdit"
          />
        </div>
      </v-row>
    </v-main>
    <v-dialog v-model="dialog" max-width="1300" scrollable>
      <template v-slot:activator="{ props: addNew }">
        <v-app-bar title="Automations" color='#DDEAF4'>
          <v-btn rounded prepend-icon="mdi-plus" variant="tonal"  v-bind="addNew" @click="handleAddNew">Add new</v-btn>
        </v-app-bar>
      </template>
      <DialogComponent
        :visible="dialog"
        :automation="automationToUse"
        @update:visible="dialog = $event"
        @save="saveAutomationHander($event)" 
        @close="closeMyDialog"
      />
    </v-dialog>
  </v-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useAutomationStore } from '@/Stores/AutomationStore';
import AutomationsCard from '@/components/AutomationsCard.vue';
import DialogComponent from '@/components/DialogComponent.vue';

const dialog = ref(false); 
const store = useAutomationStore();
const { saveAutomation } = store;
const automations = store.automations;

const automationToUse = ref({});

const handleAddNew = () => {
  automationToUse.value = {}; // Reset or set to defaults for new automation
  dialog.value = true;
};
const saveAutomationHander = (automation) => {
  saveAutomation(automation);
  closeMyDialog();
};

const handleEdit = (automation) => {
  automationToUse.value = {...automation}; // Load the selected automation into the dialog
  console.log('estoy editandoOOO:', automationToUse);
  dialog.value = true; // Open the dialog
};

const closeMyDialog = () =>{
  dialog.value = false;
};


</script>