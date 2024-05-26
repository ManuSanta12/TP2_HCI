<template>
  <!-- <v-app-bar title="Home" text="Automations and devices with 'Show in Home' enabled will be shown in this screen" color="#E4DCD1"/> -->
    <v-app-bar color="#E4DCD1">
    <v-app-bar-title>
      Home
      <span class="subtitle">Automations and devices with 'Show in Home' enabled will be shown in this screen</span>
    </v-app-bar-title>
  </v-app-bar>
  <v-layout color='#E5E8DD' class="rounded rounded-md">
    <v-main color='#E5E8DD'>
      <v-row class="scrollable px-8 py-7">
        <component
          v-for="device in deviceStore.showInHomeDevices" :key="device.id"
          :is="getComponent(device.type.id)"
          :device="device"
          ></component>
      </v-row>
      <v-row class="px-10">
        <div class="pa-4" v-for="auto in automationStore.automations" :key="auto.id">
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

<style scoped>
.subtitle {
  font-style: italic;
  font-size: 14px;
  margin-left: 8px;
}
</style>