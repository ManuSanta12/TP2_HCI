<script>
import AutomationsCard from '@/components/AutomationsCard.vue';
</script>

<template>
<v-app-bar title="Automations"  color='#DDEAF4'>
    <router-link to="/editAutomation" style="text-decoration: none;">
        <v-btn rounded prepend-icon="mdi-plus" variant="tonal">
          Add new
        </v-btn>
      </router-link>
</v-app-bar>
  <v-layout class="rounded rounded-md">
    <v-main color='#DDEAF4'>
      <v-row class="pa-6 scrollable" >
        <AutomationsCard class="ma-2"/>
        <AutomationsCard class="ma-2"/>
        <AutomationsCard class="ma-2"/>
      </v-row>
    </v-main>
  </v-layout>
</template>

<style>
.background{
    background-color: var(--v-background-base) !important;
}
.navigation-drawer-background{
    background-color:'#D8D7D7' !important;
}
</style>