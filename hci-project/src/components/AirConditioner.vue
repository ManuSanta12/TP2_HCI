<template>
<DeviceCard :device="device" @toggle="handleToggle">
    <template #details>
        <v-col class="d-flex justify-center pa-0">
            <v-card-actions class="pa-0">
                <v-btn density="compact" icon="mdi-minus" @click="decrementTemp"></v-btn>
                <v-card-text class="text-h6">{{ device["state"]["temperature"] }}°C</v-card-text>
                <v-btn density="compact" icon="mdi-plus" @click="incrementTemp"></v-btn>
            </v-card-actions>
        </v-col>
    </template>
    <template #expansion-panel>
        <div class="button-container-row ">
            <v-btn>Cool</v-btn>
            <v-btn>Fan</v-btn>
            <v-btn>Heat</v-btn>
        </div>
    <v-row class="align-center pa-0">
        <v-col cols="auto" class="d-flex align-center">
            <v-list-item-title>Fan Speed</v-list-item-title> 
        </v-col>
        <v-col class="d-flex justify-end align-center pa-0">
            <v-btn density="compact" icon="mdi-minus" @click="decrementFanSpeed"></v-btn>
            <div class="d-flex align-center justify-center" style="width: 50px;">
                <v-list-item-title class="text-h7">{{ device["state"]["fanSpeed"] }} {{ device["state"]["fanSpeed"]=="auto"? "":"%" }} </v-list-item-title>
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
                <v-list-item-title class="text-h7">{{ displayHSwing }}</v-list-item-title> 
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
                <v-list-item-title class="text-h7">{{ displayVSwing }}</v-list-item-title> 
            </div>
            <v-btn density="compact" icon="mdi-plus" @click="incrementVSwing"></v-btn>
        </v-col>
    </v-row>
    </template>
</DeviceCard>
</template>


<script setup>
import { ref, computed } from 'vue';
import DeviceCard from './DeviceCard.vue';
import { DeviceApi } from '@/Api/DeviceApi';
import { useDeviceStoreApi } from '@/Stores/DeviceStoreApi';

// Props
const props = defineProps({
  device: Object
});

const store = useDeviceStoreApi();
const validHSwings = ["auto", "-90", "-45", "0", "45", "90"];
const HSwing = ref(0);
const validFanSpeeds = ["auto", "25", "50", "75", "100"];
const minTemp = 18;
const validVSwings = ["auto", "22", "45", "67", "90"];
const VSwing = ref(45);
const maxTemp = 38;

async function incrementTemp() {
  // Usamos [] ya que la propiedad "state" no esta declarada explicitamente en el codigo (llega de la api!!!)
  let currentTemp = props.device["state"]["temperature"];
  if (currentTemp < maxTemp) {
    let response = await DeviceApi.runAction(props.device["id"], "setTemperature", ++currentTemp);
    props.device["state"]["temperature"] = response ? currentTemp: response;
    if(!response){
      console.log("NO SE PUDO ACTUALIZAR LA TEMPERATURA");
    }
  }
}

async function decrementTemp(){
  let currentTemp = props.device["state"]["temperature"];
  if (currentTemp > minTemp) {
    let response = await DeviceApi.runAction(props.device["id"], "setTemperature", --currentTemp);
    props.device["state"]["temperature"] = response ? currentTemp: response;
    if(!response){
      console.log("NO SE PUDO ACTUALIZAR LA TEMPERATURA");
    }
  }
}

async function incrementFanSpeed(){
  const currentFanSpeed = props.device["state"]["fanSpeed"];
  const currentIndex = validFanSpeeds.indexOf(currentFanSpeed);
  if (currentIndex < validFanSpeeds.length - 1) {
    const newFanSpeed = validFanSpeeds[currentIndex + 1];
    let response = await DeviceApi.runAction(props.device["id"], "setFanSpeed", newFanSpeed);
    props.device["state"]["fanSpeed"] = response ? newFanSpeed: response;
    if(!response){
      console.log("NO SE PUDO ACTUALIZAR LA VELOCIDAD DEL VENTILADOR");
    }
  }
}

async function decrementFanSpeed(){
  const currentFanSpeed = props.device["state"]["fanSpeed"];
  console.log(currentFanSpeed)
  const currentIndex = validFanSpeeds.indexOf(currentFanSpeed);
  if (currentIndex > 0) {
    const newFanSpeed = validFanSpeeds[currentIndex - 1];
    console.log(newFanSpeed)
    let response = await DeviceApi.runAction(props.device["id"], "setFanSpeed", newFanSpeed);
    props.device["state"]["fanSpeed"] = response ? newFanSpeed: response;
    if(!response){
      console.log("NO SE PUDO ACTUALIZAR LA VELOCIDAD DEL VENTILADOR");
    }
  }
}


// async function incrementVSwing() {
//   let currentVSwing = props.device["state"]["verticalSwing"];
//   const currentIndex = validVSwings.indexOf(currentVSwing);
//   if (currentIndex < validVSwings.length - 1) {
//     const newVSwing = validVSwings[currentIndex + 1];
//     let response = await DeviceApi.runAction(props.device["id"], "setVerticalSwing", newVSwing);
//     if (response) {
//       VSwing.value = newVSwing;
//     } else {
//       console.log("NO SE PUDO ACTUALIZAR LA CUCHILLA VERTICAL");
//     }
//   }
// }

const incrementVSwing = () => {
  const currentIndex = validVSwings.indexOf(VSwing.value);
  if (currentIndex < validVSwings.length - 1) {
    VSwing.value = validVSwings[currentIndex + 1];
  }
};

const decrementVSwing = () => {
  const currentIndex = validVSwings.indexOf(VSwing.value);
  if (currentIndex > 0) {
    VSwing.value = validVSwings[currentIndex - 1];
  }
};

const displayVSwing = computed(() => {
  return VSwing.value === 1 ? 'auto' : `${VSwing.value}°`;
});


const incrementHSwing = () => {
  const currentIndex = validHSwings.indexOf(HSwing.value);
  if (currentIndex < validHSwings.length - 1) {
    HSwing.value = validHSwings[currentIndex + 1];
  }
};

const decrementHSwing = () => {
  const currentIndex = validHSwings.indexOf(HSwing.value);
  if (currentIndex > 0) {
    HSwing.value = validHSwings[currentIndex - 1];
  }
};

const displayHSwing = computed(() => {
  return HSwing.value === 1 ? 'auto' : `${HSwing.value}°`;
});

</script>


<style>
.button-container-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    margin-top: 10px;
  }

</style>
 
  
