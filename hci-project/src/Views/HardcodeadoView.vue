<script>
// import SpeakerDeviceCard from '@/components/Speaker.vue';
// import AirConditionerDeviceCard from '@/components/Speaker.vue';
// import SprinklerDeviceCard from '@/components/SprinklerDeviceCard.vue';
</script>
<template>
<v-app-bar title="Device"  color='#DDEAF4'/>
  <v-layout class="rounded rounded-md">
    <v-main color='#DDEAF4'>
      <v-row class="scrollable cols=3" >
        <v-col>
          <!-- <SpeakerDeviceCard class="ma-2"/>
          <SpeakerDeviceCard class="ma-2"/> -->
        </v-col>
        <v-col>
          <!-- <AirConditionerDeviceCard class="ma-2"/> -->
        </v-col>
        <v-col>
          <AutomationsCard class="ma-2"/>
        </v-col>
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

