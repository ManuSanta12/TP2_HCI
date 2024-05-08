<script>
import AutomationsCard from '@/components/AutomationsCard.vue';
import SpeakerDeviceCard from '@/components/SpeakerDeviceCard.vue';
import AirConditionerDeviceCard from '@/components/SpeakerDeviceCard.vue';
</script>
<template>
  <v-app-bar title="Home"  color='#DDEAF4'/>
  <v-layout class="rounded rounded-md">
    <v-main color='#DDEAF4'>
      <v-row class="pa-6 scrollable" >
        <SpeakerDeviceCard class="ma-2"/>
        <LightDeviceCard class="ma-2"/>
        <AirConditionerDeviceCard class="ma-2"/>
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

