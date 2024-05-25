<template>
  <div class="device-card">
    <v-card class="pa-3" width="300" color='#E1E3E2'>
      <v-row dense>
        <v-col>
          <v-row class="px-3">
            <v-col cols="10">
              <v-card-title class="pa-0 text-h8">{{ deviceName }}</v-card-title>
            </v-col>
            <slot name="top-right-button"></slot>
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
                v-model="showInHome"
                @click="toggleShowInHome"
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
import { useErrorStore } from '@/Stores/ErrorStore';

// Props
const props = defineProps({
  device: Object
});

onMounted(async () => {
  console.log(props.device);
  await deviceStore.setShowInHome(props.device["id"], props.device["name"], false);
});

const deviceStore = useDeviceStoreApi();
const errorStore = useErrorStore();
const deviceName = computed(() => props.device["name"] || 'Unknown Device')
const showInHome = computed(() => props.device["meta"]["showInHome"]);

async function toggleShowInHome() {
  const newValue = !props.device["meta"]["showInHome"];
  try {
    const response = await deviceStore.setShowInHome(props.device["id"], props.device["name"], newValue);
  } catch (error) {
    errorStore.showError("Couldn't update device", "Please try again.");
  }
}

async function deleteDevice() {
  try {
    const _result = await deviceStore.removeDevice(props.device.id);
    // setResult(_result);
    props.device = null;
  } catch (error) {
    errorStore.showError("Couldn't delete device", "Please try again.");
  }
}

// TODO por que????????????
// onMounted(async () => {
//   await store.getAll();
// });
</script>

<style scoped>
.device-card {
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
}
</style>
