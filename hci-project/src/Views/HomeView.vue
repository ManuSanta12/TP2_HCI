<template>
  <v-app-bar title="Home"  color="#E4DCD1"/>
  <v-layout color='#E5E8DD' class="rounded rounded-md">
    <v-main color='#E5E8DD'>
      <v-row class="pa-6 scrollable" >
        <v-row class="scrollable" no-gutters>
            <v-col v-for="device in deviceStore.devices" :key="device.id" cols="12">
              <p>{{ device }}</p>
            </v-col>
            <v-col v-for="device in store.devices" :key="device.id" cols="12" v-if="device['meta']['ShowInHome']">
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

import { computed } from 'vue';
import AirConditioner from '@/components/AirConditioner.vue';
import Sprinkler from '@/components/Sprinkler.vue';
import Speaker from '@/components/Speaker.vue';
import Light from '@/components/Light.vue';
import { useDeviceStoreApi } from '@/Stores/DeviceStoreApi';

const deviceStore = useDeviceStoreApi();

function getComponent(type) {
  switch (type) {
    case 'Air Conditioner': return AirConditioner;
    case 'Light Panel': return Light;
    case 'Speaker': return Speaker;
    case 'Sprinkler': return Sprinkler;
    default: return 'div'; // Default or unknown type handler
  }
}
</script>