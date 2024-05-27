<template>
<DeviceCardSwitch :device="device" @toggle="handleToggle">
    <template #details>
    <v-slider
        prepend-icon="mdi-brightness-6"
        v-model="device.state.brightness"
        label="Brightness"
        min="0"
        max="100"
        thumb-label
        @click="setBrightness"
    ></v-slider>
    </template>
    <template #expansion-panel>
    <v-row>
        <v-color-picker width="250" hide-inputs canvas-height="150" v-model="device.state.color" @click="setColor" @change="setColor"></v-color-picker>
    </v-row>
    </template>
</DeviceCardSwitch>
</template>

<script setup>
import DeviceCard from './DeviceCard.vue';
import { DeviceApi } from '@/Api/DeviceApi';
import { useErrorStore } from '@/Stores/ErrorStore';
import { useDeviceStoreApi } from '@/Stores/DeviceStoreApi';

// Props
const props = defineProps({
  device: Object
});

const errorStore = useErrorStore();
const deviceStore = useDeviceStoreApi();

async function setColor(){
  const currentColor = props.device["state"]["color"].slice(1)
  try {
    let response = await deviceStore.runAction(props.device["id"], "setColor", currentColor)
  } catch(error) {
    errorStore.showError("Couldn't set color", "Please try again")
  }
}

async function setBrightness (){
  const currentBrightness = props.device["state"]["brightness"]
  try{
    let response = await deviceStore.runAction(props.device["id"], "setBrightness", currentBrightness)
  } catch(error){
    errorStore.showError("Couldn't set brightness", "Please try again")
  }
}
</script>
