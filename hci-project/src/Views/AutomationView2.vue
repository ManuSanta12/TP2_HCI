<template>
  <v-layout class="rounded rounded-md">
    <v-main color='#DDEAF4'>
      <v-row class="pa-6 scrollable">
        <!-- <div class="pa-6" v-for="auto in automations" :key="auto.id">
          <AutomationsCard 
          :automation="auto" 
          />
        </div> -->
      </v-row>
    </v-main>
    <v-dialog v-model="dialog" width="1300" scrollable>
      <template v-slot:activator="{ props: addNew }">
        <v-app-bar title="Automations" color="#E4DCD1">
          <v-btn rounded prepend-icon="mdi-plus" variant="tonal" v-bind="addNew" @click="handleAddNew">Add new</v-btn>
        </v-app-bar>
      </template>
      <v-card>
        <v-card-title>
          Add Automation
        </v-card-title>
        <v-divider />
        <v-card-text>
          <v-text-field label="Name" v-model="automation.name" outlined dense />
          <v-divider class="my-4" />
          <v-subheader>Actions</v-subheader>
          <v-row v-for="(action, index) in automation.actions" :key="index">
            <v-col>
              <v-select
                :items="devices"
                label="Device"
                item-title="name"
                v-model="action.device"
                outlined
                dense
                return-object
                @change="(device) => getActionsForDevice(device.id, index)"
              />
              <p>{{ action.device.id }}</p>
            </v-col>
            <v-col cols="5">
              <v-select
                :items="actionsByDevice[action.device?.type?.id] || []"
                label="Action Type"
                v-model="action.actionName"
                outlined
                dense
              />
            </v-col>
            <v-col v-if="action.actionName === 'Select Light Color'">
              <v-color-picker hide-canvas hide-inputs color-picker-controls-padding="0"></v-color-picker>
            </v-col>
            <v-col v-if="action.actionName === 'Select Light Brightness'">
              <v-list-item-title class="pa-0">Brightness</v-list-item-title>
              <v-slider dense :max="100" :min="0" thumb-label></v-slider>
            </v-col>
          </v-row>
          <v-btn small class="ml-3" @click="addAction">Add Action</v-btn>
          <v-divider class="my-4" />
          <v-row>
            <v-col cols="10" class="d-flex align-center">
              <v-list-item class="pa-0 text-subtitle-1">Show in home</v-list-item>
            </v-col>
            <v-col cols="2" class="d-flex justify-end align-center">
              <v-switch inset color="green" class="small-switch align-center" v-model="automation.showInHome"></v-switch>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="tonal" color="error" text @click="closeDialog">Cancel</v-btn>
          <v-btn variant="tonal" color="primary" text @click="saveAutomation">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAutomationStoreApi } from '@/Stores/AutomationStoreApi';
import AutomationsCard from '@/components/AutomationsCard.vue';
import { DeviceApi } from '@/Api/DeviceApi';
import { useDeviceStoreApi } from '@/Stores/DeviceStoreApi';

const dialog = ref(false); 
const store = useAutomationStoreApi();
const automations = store.automations;
const devices = ref([]);
const deviceStore = useDeviceStoreApi();

const actions = ['Select Light Color', 'Select Light Brightness'];

const automation = ref({
  name: '',
  actions: [{ device: {}, actionName: '', params: [] }],
  showInHome: false
});

const actionsByDevice = ref({
  'go46xmbqeomjrsjr': ['Select Light Color', 'Select Light Brightness'],
  'c89b94e8581855bc': ['Speaker'],
  'dbrlsh7o5sn8ur4i': ['Sprinkler'],
  'li6cbv5sdlatti0j': ['AC']
});

function saveAutomation() {
  // Lógica para guardar la automatización
  dialog.value = false;
}

const addAction = () => {
  automation.value.actions.push({ device: {}, actionName: '', params: [] });
}

const deleteAction = (index) => {
  automation.value.actions.splice(index, 1);
}

function getActionsForDevice(deviceID, index) {
  const device = devices.value.find(device => device.id === deviceID);
  if (device) {
    automation.value.actions[index].device = device;
    automation.value.actions[index].actionName = '';
  }
}

onMounted(async () => {
  await deviceStore.getAll();
  devices.value = deviceStore.devices;
});

function closeDialog() {
  dialog.value = false;
}
</script>

<style>
.time-input {
  font-size: 1.4em; /* Larger text size */
  padding: 10px 20px; /* Larger padding for better touch interaction */
  border: 2px solid #ccc; 
  border-radius: 5px; /* Rounded corners for aesthetic */
  width: 100%; /* Full width of the column, adjust as needed */
  max-width: 200px; /* Maximum width, adjust based on your layout */
  box-sizing: border-box; /* Includes padding and border in the element's total width and height */
}
</style>
