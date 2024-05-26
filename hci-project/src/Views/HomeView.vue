<template>
  <v-app-bar title="Home"  color="#E4DCD1"/>
  <v-layout color='#E5E8DD' class="rounded rounded-md">
    <v-main color='#E5E8DD'>
      <v-row class="pa-6 scrollable" >
        <v-row class="scrollable" no-gutters>
            <v-col v-for="device in deviceStore.showInHomeDevices" :key="device.id" cols="12">
              <p>{{ device }}</p>
            </v-col>
            <v-col v-for="device in deviceStore.showInHomeDevices" :key="device.id" cols="12">
            <component
              :is="getComponent(device.type.id)"
              :device="device"
            />
            </v-col>
        </v-row>
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

const deviceStore = useDeviceStoreApi();

onMounted(() => {
  deviceStore.getAll();
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