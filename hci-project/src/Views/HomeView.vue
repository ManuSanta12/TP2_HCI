<template>
  <v-app-bar title="Home"  color="#E4DCD1"/>
  <v-layout color='#E5E8DD' class="rounded rounded-md">
    <v-main color='#E5E8DD'>
      <v-row class="scrollable pa-2">
        <component
          v-for="device in deviceStore.showInHomeDevices" :key="device.id"
          :is="getComponent(device.type.id)"
          :device="device"
          ></component>
      </v-row>
      <v-row class="pa-4">
        <div class="pa-2" v-for="auto in automationStore.automations" :key="auto.id">
          <AutomationsCard 
          :automation="auto" 
          />
        </div>
      </v-row> 
    </v-main>
  </v-layout>
</template>

<script setup>

import { computed, onMounted } from 'vue';
import AirConditioner from '@/components/AirConditioner.vue';
import Sprinkler from '@/components/Sprinkler.vue';
import Speaker from '@/components/Speaker.vue';
import Light from '@/components/Light.vue';
import { useDeviceStoreApi } from '@/Stores/DeviceStoreApi';
import { useAutomationStoreApi } from '@/Stores/AutomationStoreApi';

const deviceStore = useDeviceStoreApi();
const automationStore = useAutomationStoreApi();

onMounted(() => {
  deviceStore.getAll();
  automationStore.getAll();
});

function getComponent(type){
  switch (type) {
    case 'li6cbv5sdlatti0j': return AirConditioner;
    case 'go46xmbqeomjrsjr': return Light;
    case 'c89b94e8581855bc': return Speaker;
    case 'dbrlsh7o5sn8ur4i': return Sprinkler;
    default: return 'div';
  }
}
</script>