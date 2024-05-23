<template>
  <v-app-bar title="Home"  color='#DDEAF4'/>
  <v-layout class="rounded rounded-md">
    <v-main color='#DDEAF4'>
      <v-row class="pa-6 scrollable" >
        <div v-for="item in filteredItems" :key="item.id">
          <div >
                <component
                :is="getComponent(item.type)"
                v-if="isDevice(item)"
                :device="item"
              />
              <AutomationsCard
                v-else
                :automation="item"
              />
          </div>
        </div> 
      </v-row>
    </v-main>
  </v-layout>
</template>


<script setup>

import { computed } from 'vue';
import AirConditioner from '@/components/AirConditioner.vue';
import Sprinkler from '@/components/Sprinkler.vue';
import Speaker from '@/components/Speaker.vue';
import Light from '@/components/Light.vue';
// import { useDeviceStore } from '@/Stores/DeviceStore';
import { useAutomationStore } from '@/Stores/AutomationStore';

// const deviceStore = useDeviceStore();
const automationStore = useAutomationStore();
const devices = computed(() => deviceStore.devices);
const automations = computed(() => automationStore.automations);

function getComponent(type) {
  switch (type) {
    case 'Air Conditioner': return AirConditioner;
    case 'Light Panel': return Light;
    case 'Speaker': return Speaker;
    case 'Sprinkler': return Sprinkler;
    default: return 'div'; // Default or unknown type handler
  }
}
const isDevice = (item) => {
  return item && (item.type === 'Air Conditioner' || item.type === 'Light Panel' || item.type === 'Speaker' || item.type === 'Sprinkler');
}

const filteredItems = computed(() => {
  const filteredDevices = devices.value.filter(device => device.showInHome);
  const filteredAutomations = automations.value.filter(automation => automation.showInHome);
  return [...filteredDevices, ...filteredAutomations];
});
</script>