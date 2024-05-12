<script>

import Light from '@/components/Light.vue';
import AirConditioner from '@/components/AirConditioner.vue'
export default {
  components: {
    Light, AirConditioner,
  },
  data() {
    return {
      lightDevice: {
        id: 'light1',
        name: 'Living Room Light',
        brightness: 50
      },
      aircon: {
        id: 'aircon1',
        name: 'My Air Conditioner'
      }
    };
  }
}
</script>
<template>
  <v-app-bar title="Home"  color='#DDEAF4'/>
  <v-layout class="rounded rounded-md">
    <v-main color='#DDEAF4'>
      <v-row class="pa-6 scrollable" >
        <Light :device="lightDevice"/>
        <AirConditioner :device="aircon"/>
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

