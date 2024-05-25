<template>
    <div class="device-card" >
      <v-card class="pa-3" width="300" color='#E1E3E2' > 
        <v-row dense>
          <v-col>
            <v-row class="px-3">
              <v-col cols="10">
                <v-card-title class="pa-0 text-h8">{{ device.name }}</v-card-title>
              </v-col>
              <v-col cols="2" class="d-flex justify-end pa-0">
                <v-switch inset color="green" class="small-switch" v-model="switchStatus" @click="toggleDevice"></v-switch>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <slot name="details"></slot>
        <v-expansion-panels >
          <v-expansion-panel >
            <v-expansion-panel-title>More</v-expansion-panel-title>
            <v-expansion-panel-content >
                <v-expansion-panel-text>
                    <slot name="expansion-panel"></slot>
                    <v-checkbox
                        v-model="device.showInHome"
                        label="Show in home"
                        class="my-4"
                    ></v-checkbox>
                    <v-btn block variant="tonal" color="error" prepend-icon="mdi-trash-can-outline" @click="deleteDevice">Delete</v-btn>
                </v-expansion-panel-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted, computed } from 'vue';
import { useDeviceStoreApi } from '@/Stores/DeviceStoreApi';
import { DeviceApi } from '@/Api/DeviceApi';
import { useErrorStore } from '@/Stores/ErrorStore';

// Props
const props = defineProps({
  device: Object
});
const store = useDeviceStoreApi();
const result = ref(null)
const switchStatus = ref(props.device["state"]["status"] == "on");
const errorStore = useErrorStore();

function setResult(r){
  result.value = JSON.stringify(r, null, 2)
}

async function deleteDevice() {
  try {
    const _result = await store.removeDevice(props.device.id)
        setResult(_result)
        props.device = null
    } catch (e) {
        setResult(e)
    }
}

onMounted(async () => {
  await store.getAll()
})

async function toggleDevice() {
  const action = switchStatus.value ? 'turnOff' : 'turnOn';
  try{
    let response = await DeviceApi.runActionNoParams(props.device["id"], action);
  } catch(error){
    switchStatus.value = !switchStatus.value;
    errorStore.showError("Couldn't change device status", "Please try again.")
  }
};
</script>

  
<style scoped>
  .device-card {
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
  }
</style>