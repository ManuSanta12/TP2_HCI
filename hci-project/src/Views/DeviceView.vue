<!-- <div v-for="device in devices" :key="device.id">
  <component :is="getComponent(device.type)" :device="device" />
</div>  -->
<template>
  <v-layout class="rounded rounded-md">
    <v-main color='#DDEAF4'>
      <!-- El container hace que este todo centrado en la pagina -->
      <v-container>
        <v-row class="scrollable" no-gutters>
          <v-col cols="4">
            <p>COL 0</p>
            <component v-for="device in devices.slice(0, Math.ceil(devices.length / 3))" :key="device.id" :is="getComponent(device.type)" :device="device" />
          </v-col>
          <v-col cols="4">
            <p>COL 1</p>
            <component v-for="device in devices.slice(Math.ceil(devices.length / 3), Math.ceil(2 * devices.length / 3))" :key="device.id" :is="getComponent(device.type)" :device="device" />
          </v-col>
          <v-col cols="4">
            <p>COL 2</p>
            <component v-for="device in devices.slice(Math.ceil(2 * devices.length / 3), devices.length)" :key="device.id" :is="getComponent(device.type)" :device="device" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
  <v-dialog v-model="dialog" max-width="1300" scrollable>
    <template v-slot:activator="{ props: addNew }">
      <v-app-bar title="Devices"  color='#DDEAF4'>
        <v-btn rounded prepend-icon="mdi-plus" variant="tonal"  v-bind ="addNew" @click="openDialog">Add new</v-btn>
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
              <v-btn variant="tonal" color="secondary" dark @click="cancel">Cancel</v-btn>
              <v-btn variant="tonal" color="primary" dark @click="saveDevice">Save</v-btn>
          </v-card-actions>
      </v-card>
    </v-col>
    </v-row>
    </v-dialog>
</template>

<script>
import { ref } from 'vue';
import AirConditioner from '@/components/AirConditioner.vue';
import Sprinkler from '@/components/Sprinkler.vue';
import Speaker from '@/components/Speaker.vue';
import Light from '@/components/Light.vue';
import { useDeviceStore } from '@/Stores/DeviceStore'

export default {
  components: {
    AirConditioner,
    Light,
    Speaker,
    Sprinkler
  },
  data() {
    return {
      dialog: false,
      deviceTypes: [
        'Light Panel', 'Sprinkler', 'Air Conditioner', 'Speaker'
      ]
    };
  },
  setup() {
    const store = useDeviceStore();
    const devices = store.devices;
    const dialog = ref(false);

    const newDevice = ref({
      id: '',
      name: '',
      type: '',
      showInHome: false
    });

    function openDialog() {
      newDevice.value = {
        id: Date.now().toString(),
        name: '',
        type: '',
        showInHome: false
      };
      dialog.value = true;
    }

    function saveDevice() {
      store.addDevice(newDevice.value);
      console.log(store.devices, 'devices')
      dialog.value = false;
    }

    function cancel() {
      dialog.value = false;
    }
    return {
      devices,
      newDevice,
      dialog,
      openDialog,
      saveDevice,
      cancel,
      getComponent(type) {
        switch (type) {
          case 'Air Conditioner': return AirConditioner;
          case 'Light Panel': return Light;
          case 'Speaker': return Speaker;
          case 'Sprinkler': return Sprinkler;
          default: return 'div';
        }
      }
    };
  }
};
</script>