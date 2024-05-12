<template>
  <v-app-bar title="Home"  color='#DDEAF4'/>
  <v-layout class="rounded rounded-md">
    <v-main color='#DDEAF4'>
      <v-row class="pa-6 scrollable" >
        <div v-for="device in devices" :key="device.id">
          <div v-if="device.showInHome">
            <component :is="getComponent(device.type)" :device="device" />
          </div>
        </div> 
      </v-row>
    </v-main>
  </v-layout>
</template>
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
  
    function getComponent(type) {
      switch (type) {
        case 'Air Conditioner': return 'AirConditioner';
        case 'Light Panel': return 'Light';
        case 'Speaker': return 'Speaker';
        case 'Sprinkler': return 'Sprinkler';
        default: return 'div'; // Default or unknown type handler
      }
    }

    return { devices, getComponent};
  }
}
</script>