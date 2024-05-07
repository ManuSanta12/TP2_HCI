<script>
import AutomationsCard from '@/components/AutomationsCard.vue';
import EditAutomationCard from '@/components/EditAutomationCard.vue';
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-main color='#DDEAF4'>
      <v-row class="pa-6 scrollable" >
        <AutomationsCard class="ma-2"/>
        <AutomationsCard class="ma-2"/>
        <AutomationsCard class="ma-2"/>
      </v-row>
    </v-main>
  </v-layout>
  <v-dialog max-width="1200">
    <template v-slot:activator="{ props: addNew }">
      <v-app-bar title="Automations"  color='#DDEAF4'>
            <v-btn rounded prepend-icon="mdi-plus" variant="tonal"  v-bind ="addNew">
                Add new
              </v-btn>
      </v-app-bar>

   
  </template>

  <template v-slot:default="{ isActive }">
    <EditAutomationCard class="ma-2"/>
  
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
</style>