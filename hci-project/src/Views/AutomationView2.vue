<template>
    <v-layout class="rounded rounded-md">
      <v-main color='#DDEAF4'>
        <v-row class="pa-6 scrollable" >
          <div v-for="auto in automations" :key="auto.id">
            <AutomationsCard :automation="auto" />
          </div> 
        </v-row>
      </v-main>
    </v-layout>
    <v-dialog v-model="dialog" max-width="1300" scrollable>
      <template v-slot:activator="{ props: addNew }">
        <v-app-bar title="Automations"  color='#DDEAF4'>
          <v-btn rounded prepend-icon="mdi-plus" variant="tonal" @click="openAddDialog" v-bind ="addNew">Add new</v-btn>
          <DialogComponent
                :visible="dialog"
                :automation="currentAutomation"
                @save="saveAutomation"
                @close="closeDialog"
            />
        </v-app-bar>
      </template>
    </v-dialog>
  </template>
  
  <style>
  .background{
      background-color: var(--v-background-base) !important;
  }
  .navigation-drawer-background{
      background-color:'#D8D7D7' !important;
  }
  
  .blurred{
      backdrop-filter: blur(5px);
  
  }
  .scrollable-list-card{
    max-height: 150px; min-height:75px; min-width: 300px; overflow-y: auto;
  }
  </style>
  <script>
  import { ref } from 'vue';
  import { useAutomationStore } from '@/Stores/AutomationStore';
  import AutomationsCard from '@/components/AutomationsCard.vue';
  import DialogComponent from '@components/DialogComponent.vue';
  
  export default {
    components: {
      AutomationsCard, DialogComponent
    },
   
    setup() {
      const store = useAutomationStore();
      const { dialog, currentAutomation, openDialog, closeDialog, saveAutomation } = store;
      const automations = store.automations;
  
      const openAddDialog = () => {
      openDialog('add');
        };  
      return {
        dialog,
        currentAutomation,
        openAddDialog,
        closeDialog,
        automations,
        saveAutomation
      };
    }
  };
  </script>
  