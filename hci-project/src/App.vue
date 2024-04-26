<template>
  <v-layout class="rounded rounded-md">
    <NavigationBar/>
    <v-app-bar title="Home"/>
    <v-main class="background">
        <DeviceCard class="ma-2"/>
        <AutomationsCard class="ma-2"/>
    </v-main>
  </v-layout>
</template>


<script>
import AutomationsCard from './components/AutomationsCard.vue';
import NavigationBar from './components/NavigationBar.vue';
import DeviceCard from './components/DeviceCard.vue';
</script>
<style>
.background{
    background-color: var(--v-background-base) !important;
}
.navigation-drawer-background{
    background-color:'#D8D7D7' !important;
}
</style>

