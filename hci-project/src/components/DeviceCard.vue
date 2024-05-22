<template>
    <div class="device-card">
      <v-card class="pa-3" width="300"> 
        <v-row dense>
          <v-col>
            <v-row class="px-3">
              <v-col cols="10">
                <v-card-title class="pa-0 text-h8">{{ device.name }}</v-card-title>
              </v-col>
              <v-col cols="2" class="d-flex justify-end pa-0">
                <v-switch inset color="green" class="small-switch" v-model="isOn" @click="toggleDevice"></v-switch>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <slot name="details"></slot>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>More</v-expansion-panel-title>
            <v-expansion-panel-content>
                <v-expansion-panel-text>
                    <slot name="expansion-panel"></slot>
                    <v-checkbox
                        v-model="device.showInHome"
                        label="Show in home"
                        class="my-4"
                    ></v-checkbox>
                    <v-btn block prepend-icon="mdi-trash-can-outline" @click="deleteDevice">Delete</v-btn>
                </v-expansion-panel-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';
import { useDeviceStore } from '@/Stores/DeviceStore';

// Props
const props = defineProps({
  device: Object
});

const store = useDeviceStore();
const isOn = ref(false);

const deleteDevice = () => {
  store.removeDevice(props.device.id);
  console.log(store.devices, 'deleted devices');
  //esto funciona pero no se actualiza la pagina. seguro funcione con la api
};

const toggleDevice = () => {
  isOn.value = !isOn.value;
};
</script>

  
<style scoped>
  .device-card {
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
  }
</style>