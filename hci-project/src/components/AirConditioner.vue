<template>
<DeviceCardSwitch :device="device" @toggle="handleToggle">
    <template #details>
        <v-col class="d-flex justify-center pa-0">
            <v-card-actions class="pa-0">
                <v-btn density="compact" icon="mdi-minus" @click="decrementTemp"></v-btn>
                <v-card-text class="text-h6">{{ temp }}°C</v-card-text>
                <v-btn density="compact" icon="mdi-plus" @click="incrementTemp"></v-btn>
            </v-card-actions>
        </v-col>
    </template>
    <template #expansion-panel>
        <div class="button-container-row ">
          <v-btn-toggle v-model="selectedMode">
            <v-btn value="cool" @click="setMode('cool')">Cool</v-btn>
            <v-btn value="fan" @click="setMode('fan')">Fan</v-btn>
            <v-btn value="heat" @click="setMode('heat')">Heat</v-btn>
          </v-btn-toggle>
        </div>
    <v-row class="align-center pa-0">
        <v-col cols="auto" class="d-flex align-center">
            <v-list-item-title>Fan Speed</v-list-item-title> 
        </v-col>
        <v-col class="d-flex justify-end align-center pa-0">
            <v-btn density="compact" icon="mdi-minus" @click="decrementFanSpeed"></v-btn>
            <div class="d-flex align-center justify-center" style="width: 50px;">
                <v-list-item-title class="text-h7">{{ device["state"]["fanSpeed"]}}{{ device["state"]["fanSpeed"]=="auto"? "":"%" }} </v-list-item-title>
            </div>
            <v-btn density="compact" icon="mdi-plus" @click="incrementFanSpeed"></v-btn>
        </v-col>
    </v-row>
    <v-row class="align-center pa-0">
        <v-col cols="auto" class="d-flex align-center">
            <v-list-item-title>H-Swing</v-list-item-title> 
        </v-col>
        <v-col class="d-flex justify-end align-center pa-0">
            <v-btn density="compact" icon="mdi-minus" @click="decrementHSwing"></v-btn>
            <div class="d-flex align-center justify-center" style="width: 50px;">
                <v-list-item-title class="text-h7">{{ device["state"]["horizontalSwing"] }}{{device["state"]["horizontalSwing"] == "auto" ? "": "°"  }}</v-list-item-title> 
            </div>
            <v-btn density="compact" icon="mdi-plus" @click="incrementHSwing"></v-btn>
        </v-col>
    </v-row>
    <v-row class="align-center pa-0">
        <v-col cols="auto" class="d-flex align-center">
            <v-list-item-title >V-Swing</v-list-item-title> 
        </v-col>
        <v-col class="d-flex justify-end align-center pa-0">
            <v-btn density="compact" icon="mdi-minus" @click="decrementVSwing"></v-btn>
            <div class="d-flex align-center justify-center" style="width: 50px;">
                <v-list-item-title class="text-h7">{{ device["state"]["verticalSwing"] }}{{device["state"]["verticalSwing"] == "auto" ? "": "°"  }}</v-list-item-title> 
            </div>
            <v-btn density="compact" icon="mdi-plus" @click="incrementVSwing"></v-btn>
        </v-col>
    </v-row>
    </template>
</DeviceCardSwitch>
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

const validHSwings = ["auto", "-90", "-45", "0", "45", "90"];
const validFanSpeeds = ["auto", "25", "50", "75", "100"];
const minTemp = 18;
const maxTemp = 38;
const validVSwings = ["auto", "22", "45", "67", "90"];

const deviceStore = useDeviceStoreApi();
const errorStore = useErrorStore();
const selectedMode = computed(() => props.device["state"]["mode"]);;
const temp = computed(() => props.device["state"]["temperature"]);

async function setMode(mode){
  try{
    let response = await deviceStore.runAction(props.device["id"], "setMode", mode)
  } catch(error) {
    errorStore.showError("Couldn't change mode", "Please try again.")
  }
}

async function incrementTemp() {
  let currentTemp = temp.value;
  if (currentTemp < maxTemp) {
    try {
      let response = await deviceStore.runAction(props.device["id"], "setTemperature", ++currentTemp);
    } catch(error){
      errorStore.showError("Couldn't increase temperature", "Please try again.")
    } 
  }
}

async function decrementTemp(){
  let currentTemp = props.device["state"]["temperature"];
  try {
    if (currentTemp > minTemp) {
      let response = await deviceStore.runAction(props.device["id"], "setTemperature", --currentTemp);
    }
  } catch(error){
    errorStore.showError("Couldn't decrease temperature", "Please try again.");
  }
}

async function incrementFanSpeed(){
  const currentFanSpeed = props.device["state"]["fanSpeed"];
  const currentIndex = validFanSpeeds.indexOf(currentFanSpeed);
  if (currentIndex < validFanSpeeds.length - 1) {
    try {
      const newFanSpeed = validFanSpeeds[currentIndex + 1];
      let response = await deviceStore.runAction(props.device["id"], "setFanSpeed", newFanSpeed);
    } catch(error){
      errorStore.showError("Couldn't increase fan speed", "Please try again.")
    }
  }
}

async function decrementFanSpeed(){
  const currentFanSpeed = props.device["state"]["fanSpeed"];
  const currentIndex = validFanSpeeds.indexOf(currentFanSpeed);
  if (currentIndex > 0) {
    try {
      const newFanSpeed = validFanSpeeds[currentIndex - 1];
      let response = await deviceStore.runAction(props.device["id"], "setFanSpeed", newFanSpeed);
    } catch(error){
      errorStore.showError("Couldn't decrease fan speed", "Please try again.")
    }
  }
}

async function incrementVSwing(){
  const currentVSwing = props.device["state"]["verticalSwing"];
  const currentIndex = validVSwings.indexOf(currentVSwing);
  if (currentIndex < validVSwings.length - 1) {
    try{
      const newVSwing = validVSwings[currentIndex + 1];
      let response = await deviceStore.runAction(props.device["id"],"setVerticalSwing", newVSwing);
    } catch(error){
      errorStore.showError("Couldn't increase vertical swing", "Please try again.")
    }
  }
}

async function decrementVSwing(){
  const currentVSwing = props.device["state"]["verticalSwing"];
  const currentIndex = validVSwings.indexOf(currentVSwing);
  if (currentIndex > 0) {
    try {
      const newVSwing = validVSwings[currentIndex - 1];
      let response = await deviceStore.runAction(props.device["id"],"setVerticalSwing", newVSwing);
    } catch(error){
      errorStore.showError("Couldn't decrease vertical swing", "Please try again.")
    }
  }
}

async function incrementHSwing(){
  const currentHSwing = props.device["state"]["horizontalSwing"];
  const currentIndex = validHSwings.indexOf(currentHSwing);
  if (currentIndex < validHSwings.length - 1) {
    try {
      const newHSwing = validHSwings[currentIndex + 1];
      let response = await deviceStore.runAction(props.device["id"],"setHorizontalSwing", newHSwing);
    } catch(error){
      errorStore.showError("Couldn't increase horizontal swing", "Please try again.")
    }
  }
}

async function decrementHSwing(){
  const currentHSwing = props.device["state"]["horizontalSwing"];
  const currentIndex = validHSwings.indexOf(currentHSwing);
  if (currentIndex > 0) {
    try {
      const newHSwing = validHSwings[currentIndex - 1];
      let response = await deviceStore.runAction(props.device["id"],"setHorizontalSwing", newHSwing);
    } catch(error){
      errorStore.showError("Couldn't decrease horizontal swing", "Please try again.")
    }
  }
}

</script>


<style>
.button-container-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    margin-top: 10px;
  }

</style>
 
  
