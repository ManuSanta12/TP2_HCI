<template>
  <DeviceCard :device="device">
    <template #top-right-button>
      <v-col cols="2" class="d-flex justify-end pa-0">
        <v-switch inset color="green" class="small-switch" v-model="switchStatus" @click="toggleDevice"></v-switch>
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
import { ref } from 'vue';
import DeviceCard from './DeviceCard.vue';
import { DeviceApi } from '@/Api/DeviceApi';
import { useErrorStore } from '@/Stores/ErrorStore';

// Props
const props = defineProps({
  device: Object
});

const switchStatus = ref(props.device["state"]["status"] == "on");
const errorStore = useErrorStore();

async function toggleDevice() {
  const action = switchStatus.value ? 'turnOff' : 'turnOn';
  try {
    let response = await DeviceApi.runActionNoParams(props.device["id"], action);
  } catch (error) {
    switchStatus.value = !switchStatus.value;
    errorStore.showError("Couldn't change device status", "Please try again.");
  }
};
</script>
