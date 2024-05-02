<template>
  <v-layout class="rounded rounded-md">
    <NavigationBar/>
    <v-app-bar title="Home"  :order="order" color='#DDEAF4'/>
    <v-main color='#DDEAF4'>
      <v-row class="pa-6 scrollable" >
        <SpeakerDeviceCard class="ma-2"/>
        <LightDeviceCard class="ma-2"/>
        <AirConditionerDeviceCard class="ma-2"/>
        <AutomationsCard class="ma-2"/>
        <EditAutomation />
      </v-row>
    </v-main>
  </v-layout>
</template>

<script>
import AutomationsCard from './components/AutomationsCard.vue';
import EditAutomation from './components/EditAutomation.vue';
import NavigationBar from './components/NavigationBar.vue';
import SpeakerDeviceCard from './components/SpeakerDeviceCard.vue';
import AirConditionerDeviceCard from './components/SpeakerDeviceCard.vue';
</script>
<style>
.background{
    background-color: var(--v-background-base) !important;
}
.navigation-drawer-background{
    background-color:'#D8D7D7' !important;
}
</style>

