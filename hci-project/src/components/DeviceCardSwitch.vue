<template>
  <DeviceCard :device="device">
    <template #top-right-button>
      <v-col cols="2" class="d-flex justify-end pa-0">
        <v-switch inset color="#878C61" class="small-switch" v-model="deviceStatus" @click="toggleDevice"></v-switch>
      </v-col>
    </template>
    <template #details>
      <slot name="details"></slot>
    </template>
    <template #expansion-panel>
      <slot name="expansion-panel"></slot>
    </template>
  </DeviceCard>
</template>

<script setup>
import { ref, computed } from 'vue';
import DeviceCard from './DeviceCard.vue';
import { DeviceApi } from '@/Api/DeviceApi';
import { useErrorStore } from '@/Stores/ErrorStore';
import { useDeviceStoreApi } from '@/Stores/DeviceStoreApi';

// Props
const props = defineProps({
  device: Object
});

const deviceStore = useDeviceStoreApi();
const errorStore = useErrorStore();
const deviceStatus = computed(() => props.device["state"]["status"] === 'on');

async function toggleDevice() {
  const action = deviceStatus.value ? 'turnOff' : 'turnOn';
  try {
    let response = await deviceStore.runActionNoParams(props.device["id"], action);
  } catch (error) {
    errorStore.showError("Couldn't change device status", "Please try again.");
  }
};
</script>
