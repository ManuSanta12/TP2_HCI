<template>
  <v-layout class="rounded rounded-md">
    <v-main color='#DDEAF4'>
      <v-row class="pa-6 scrollable">
        <div class="pa-6" v-for="auto in automations" :key="auto.id">
          <AutomationsCard 
          :automation="auto" 
          @edit = editHandler($event);
          />
        </div>
      </v-row>
    </v-main>
    <v-dialog v-model="dialog" max-width="1300" scrollable>
      <template v-slot:activator="{ props: addNew }">
        <v-app-bar title="Automations" color='#DDEAF4'>
          <v-btn rounded prepend-icon="mdi-plus" variant="tonal"  v-bind="addNew">Add new</v-btn>
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
const { currentAutomation, closeDialog, saveAutomation } = store;
const automations = store.automations;
const automationToUse = ref({ name: '', starters: [], actions: [] });

const openDialog = (data) => {
  dialog.value = true;
};

const closeMyDialog = () =>{
  dialog.value = false;
};

const saveAutomationHander = (automation) => {
  saveAutomation(automation);
  closeMyDialog();
  restoreAutomationToUse();
};

const editHandler = (automation) => {
  automationToUse.value = automation;
  openDialog();
};

const restoreAutomationToUse = () => {
   automationToUse.value = { name: '', starters: [], actions: [] };
};

const getAutomation = () => {
  return automationToUse;
};

</script>
