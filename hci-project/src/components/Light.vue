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
// Props
const props = defineProps({
  device: Object
});

async function setColor(){
  console.log(props.device.state.color)
  const currentColor = props.device.state.color.slice(1)
  let response = await DeviceApi.runAction(props.device["id"], "setColor", currentColor)
   props.device["state"]["color"] = response ? currentColor : response
   if (!response){
    console.log('HELP')
   }
}

async function setBrightness (){
  const currentBrightness = props.device.state.brightness
  let response = await DeviceApi.runAction(props.device["id"], "setBrightness", currentBrightness)
   props.device["state"]["brightness"] = response ?currentBrightness : response
   if (!response){
    console.log('HELP')
   }
}
</script>
