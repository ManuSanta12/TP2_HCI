<template>
    <v-layout class="rounded rounded-md">
      <NavigationBar/>
      <v-app-bar title="Home" :order="order" color="blue"/>
      <v-main>
          <DeviceCard class="ma-2"/>
          <AutomationsCard class="ma-2"/>
      </v-main>
    </v-layout>
  </template>
  
  
  <script>
  import AutomationsCard from "./src/components/AutomationsCard.vue";
  import NavigationBar from './src/components/NavigationBar.vue';
  import DeviceCard from "./src/components/DeviceCard.vue";
  </script>

  
  