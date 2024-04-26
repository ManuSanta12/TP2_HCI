<template>
  <v-app>
    <v-main class="background">
        <NavigationBar/>
        <DeviceCard class="ma-2"/>
        <AutomationsCard class="ma-2"/>
    </v-main>
  </v-app>
</template>

<script setup>
import AutomationsCard from './components/AutomationsCard.vue';
import DeviceCard from './components/DeviceCard.vue';
import NavigationBar from './components/NavigationBar.vue';
</script>
<style>
.background{
    background-color: var(--v-background-base) !important;
}

</style>
