<template>
  <v-layout class="rounded rounded-md">
    <v-main color='#DDEAF4'>
      <v-row class="pa-6 scrollable">
        <div class="pa-6" v-for="auto in automations" :key="auto.id">
          <AutomationsCard :automation="auto" />
        </div>
      </v-row>
    </v-main>
    <v-dialog v-model="dialog" max-width="1300" scrollable>
      <template v-slot:activator="{ props: addNew }">
        <v-app-bar title="Automations" color='#DDEAF4'>
          <v-btn rounded prepend-icon="mdi-plus" variant="tonal" @click="openAddDialog" v-bind="addNew">Add new</v-btn>
        </v-app-bar>
      </template>
      <DialogComponent
        :visible="dialog"
        :automation=automationToUse()
        @update:visible="dialog = $event"
        @save="saveAutomation" 
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
const { currentAutomation, openDialog, closeDialog, saveAutomation } = store;
const automations = store.automations;

const openEditDialog = (data) => {
  dialog.value = true;
};

const closeMyDialog = () =>{
  dialog.value = false;
};



const automationToUse = () => {
  // Use currentAutomation if it exists, otherwise create a new object with default values
  return currentAutomation || { name: '', starters: [], actions: [] };
};


</script>
