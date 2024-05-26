<template>
  <v-layout class="rounded rounded-md">
    <v-main>
      <v-container>
        <v-row class="scrollable" no-gutters>
            <component
              v-for="device in store.devices" :key="device.id"
              :is="getComponent(device.type.id)"
              :device="device"
            />
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
  <v-dialog v-model="dialog" width="1300" scrollable>
    <template v-slot:activator="{ props: addNew }">
      <v-app-bar title="Devices"  color="#E4DCD1">
        <v-btn rounded prepend-icon="mdi-plus" variant="tonal"  v-bind ="addNew">Add new</v-btn>
      </v-app-bar>
    </template>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-title>Add a new device</v-card-title>
        <v-divider/>
        <v-text-field placeholder="Title" v-model="newDevice.name" class="pa-3" ></v-text-field>
        <v-select :items="deviceTypes"  v-model="newDevice.type" label="Type"class="pa-3"
        ></v-select>
        <v-row class="px-3 align-center"> 
              <v-col cols="10" class="d-flex align-center"> 
                <v-list-item class="pa-0 text-subtitle-1">Show in home</v-list-item>
              </v-col>
              <v-col cols="2" class="d-flex justify-end align-center"> 
                <v-switch inset color="green" class="small-switch align-center mt-4" v-model="newDevice.showInHome"></v-switch>
              </v-col>
        </v-row>
              <v-divider/>
              <v-card-actions>
              <v-spacer></v-spacer> 
              <v-btn variant="tonal" color="error" dark @click="cancel">Cancel</v-btn>
              <v-btn variant="tonal" color="primary" dark @click="saveDevice" :disabled="isDisabled">Save</v-btn>
          </v-card-actions>
      </v-card>
    </v-col>
    </v-row>
    </v-dialog>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import AirConditioner from '@/components/AirConditioner.vue';
import Sprinkler from '@/components/Sprinkler.vue';
import Speaker from '@/components/Speaker.vue';
import Light from '@/components/Light.vue';
import { useDeviceStoreApi } from '@/Stores/DeviceStoreApi';
import { Device } from '@/Api/DeviceApi';
import { useErrorStore } from '@/Stores/ErrorStore';

// Data
const store = useDeviceStoreApi();
const errorStore = useErrorStore();

const inputId = ref('')
const inputAction = ref('')
const inputData = ref('')
const result = ref(null)
const dialog = ref(false);
const controller = ref(null)
const deviceTypes = [
  'Light Panel', 'Sprinkler', 'Air Conditioner', 'Speaker'
];
const typeIdMap = store.typeIdMap;

getAllDevices();

const newDevice = ref({
  name: '',
  type: '',
  showInHome: false
});

const getDevId = (type) => typeIdMap[type] || null;
const isDisabled = computed(() => newDevice.value.name.length < 3)

async function saveDevice(){
  const name = newDevice.value.name;
  const deviceType = newDevice.value.type;
  const typeId = getDevId(deviceType);
  const device = new Device(undefined, name, { id: typeId }, { showInHome: newDevice.value.showInHome });
  try {
    let response = await store.addDevice(device);
    dialog.value = false;
  } catch (error) {
    errorStore.showError("Couldn't add the device", "Please try again");
  }
}

const cancel = () => {
  dialog.value = false;
};

function getComponent(type){
  switch (type) {
    case 'li6cbv5sdlatti0j': return AirConditioner;
    case 'go46xmbqeomjrsjr': return Light;
    case 'c89b94e8581855bc': return Speaker;
    case 'dbrlsh7o5sn8ur4i': return Sprinkler;
    default: return 'div';
  }
}

function runAction(id, actionName, data) {
  console.log(id, actionName, data)
  store.runAction(id, actionName, data)
}

function setResult(r){
  result.value = JSON.stringify(r, null, 2)
}
async function getAllDevices() {
    try {
        controller.value = new AbortController()
        const devices = await store.getAll(controller)
        controller.value = null
        setResult(devices)
    } catch (e) {
      setResult(e)
    }
}

onMounted(async () => {
  await store.getAll()
})
</script>
