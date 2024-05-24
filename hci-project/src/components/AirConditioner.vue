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
          <v-btn-toggle v-model="selectedMode" @click="setMode">
            <v-btn value="cool">Cool</v-btn>
            <v-btn value="fan">Fan</v-btn>
            <v-btn value="heat">Heat</v-btn>
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
</DeviceCard>

<v-snackbar v-model="snackbar" >
    {{ snackbarText }}
</v-snackbar>
</template>


<script setup>
import { ref } from 'vue';
import DeviceCard from './DeviceCard.vue';
import { DeviceApi } from '@/Api/DeviceApi';

// Props
const props = defineProps({
  device: Object
});

const snackbar = ref(false);
const snackbarText = ref("Action failed. Please try again");


const validHSwings = ["auto", "-90", "-45", "0", "45", "90"];
const validFanSpeeds = ["auto", "25", "50", "75", "100"];
const minTemp = 18;
const maxTemp = 38;
const validVSwings = ["auto", "22", "45", "67", "90"];
const selectedMode = ref('cool')

async function setMode(){
  let response = await DeviceApi.runAction(props.device["id"], "setMode", selectedMode.value )
  handleError(response)
}

async function incrementTemp() {
  // Usamos [] ya que la propiedad "state" no esta declarada explicitamente en el codigo (llega de la api!!!)
  const currentTemp = props.device["state"]["temperature"];
  if (currentTemp < maxTemp) {
    let response = await DeviceApi.runAction(props.device["id"], "setTemperature", ++currentTemp);
    props.device["state"]["temperature"] = response ? currentTemp: response;
    handleError(response)
  }
}

async function decrementTemp(){
  let currentTemp = props.device["state"]["temperature"];
  if (currentTemp > minTemp) {
    let response = await DeviceApi.runAction(props.device["id"], "setTemperature", --currentTemp);
    props.device["state"]["temperature"] = response ? currentTemp: response;
    handleError(response)
  }
}

async function incrementFanSpeed(){
  const currentFanSpeed = props.device["state"]["fanSpeed"];
  const currentIndex = validFanSpeeds.indexOf(currentFanSpeed);
  if (currentIndex < validFanSpeeds.length - 1) {
    const newFanSpeed = validFanSpeeds[currentIndex + 1];
    let response = await DeviceApi.runAction(props.device["id"], "setFanSpeed", newFanSpeed);
    props.device["state"]["fanSpeed"] = response ? newFanSpeed: response;
    handleError(response)
  }
}

async function decrementFanSpeed(){
  const currentFanSpeed = props.device["state"]["fanSpeed"];
  const currentIndex = validFanSpeeds.indexOf(currentFanSpeed);
  if (currentIndex > 0) {
    const newFanSpeed = validFanSpeeds[currentIndex - 1];
    let response = await DeviceApi.runAction(props.device["id"], "setFanSpeed", newFanSpeed);
    props.device["state"]["fanSpeed"] = response ? newFanSpeed: response;
    handleError(response)
  }
}

async function incrementVSwing(){
  const currentVSwing = props.device["state"]["verticalSwing"];
  const currentIndex = validVSwings.indexOf(currentVSwing);
  if (currentIndex < validVSwings.length - 1) {
    const newVSwing = validVSwings[currentIndex + 1];
    let response = await DeviceApi.runAction(props.device["id"],"setVerticalSwing", newVSwing);
    props.device["state"]["verticalSwing"] = response ? newVSwing: response;
    handleError(response)
  }
}

async function decrementVSwing(){
  const currentVSwing = props.device["state"]["verticalSwing"];
  const currentIndex = validVSwings.indexOf(currentVSwing);
  if (currentIndex > 0) {
    const newVSwing = validVSwings[currentIndex - 1];
    let response = await DeviceApi.runAction(props.device["id"],"setVerticalSwing", newVSwing);
    props.device["state"]["verticalSwing"] = response ? newVSwing: response;
    handleError(response)
  }
}

async function incrementHSwing(){
  const currentHSwing = props.device["state"]["horizontalSwing"];
  const currentIndex = validHSwings.indexOf(currentHSwing);
  if (currentIndex < validHSwings.length - 1) {
    const newHSwing = validHSwings[currentIndex + 1];
    let response = await DeviceApi.runAction(props.device["id"],"setHorizontalSwing", newHSwing);
    props.device["state"]["horizontalSwing"] = response ? newHSwing: response;
    handleError(response)
  }
}

async function decrementHSwing(){
  const currentHSwing = props.device["state"]["horizontalSwing"];
  const currentIndex = validHSwings.indexOf(currentHSwing);
  if (currentIndex > 0) {
    const newHSwing = validHSwings[currentIndex - 1];
    let response = await DeviceApi.runAction(props.device["id"],"setHorizontalSwing", newHSwing);
    props.device["state"]["horizontalSwing"] = response ? newHSwing: response;
    handleError(response)
  }
}

function handleError(response){
  if(!response){
      console.log("NO SE PUDO ACTUALIZAR LA VELOCIDAD DEL VENTILADOR");
      snackbar.value= true;
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
 
  
