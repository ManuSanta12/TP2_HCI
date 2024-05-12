<template>
  <v-app-bar title="Home"  color='#DDEAF4'/>
  <v-layout class="rounded rounded-md">
    <v-main color='#DDEAF4'>
      <v-row class="pa-6 scrollable" >
        <v-btn @click="addNewDevice">Add device</v-btn>
        <div v-for="device in devices" :key="device.id">
          <component :is="getComponent(device.type)" :device="device" />
          <pre>{{ device }}</pre>
        </div> 
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

<script>
import AirConditioner from '@/components/AirConditioner.vue';
import Sprinkler from '@/components/Sprinkler.vue';
import Speaker from '@/components/Speaker.vue';
import Light from '@/components/Light.vue';
import { useDeviceStore } from '@/Stores/DeviceStore'

export default {
  components: {
    AirConditioner,
    Light,
    Speaker,
    Sprinkler
  },
  setup() {
    const store = useDeviceStore();
    const devices = store.devices;

    function addNewDevice() {
      console.log('Current devices:', store.devices);
      store.addDevice({
        id: Date.now().toString(),
        name: 'New Device',
        type: 'light', // This would be dynamic based on user selection
        brightness: 50 // Default setting for a light device
      });
      console.log('Updated devices:', store.devices);
    } 

    function getComponent(type) {
      switch (type) {
        case 'airConditioner': return 'AirConditioner';
        case 'light': return 'Light';
        case 'speaker': return 'Speaker';
        case 'sprinkler': return 'Sprinkler';
        default: return 'div'; // Default or unknown type handler
      }
    }

    return { devices, getComponent, addNewDevice };
  }
}
</script>