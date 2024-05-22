<script setup>
import {onMounted} from 'vue';
import { useDeviceStoreApi } from '@/Stores/DeviceStoreApi'
import {Device} from '@/Api/DeviceApi';
const store = useDeviceStoreApi()

onMounted(async () => {
    await store.getAll()
})
function addDevice(){
    const device = new Device(null, 'Sprinkler')
    store.addDevice(device)
}

</script>

<template>
    <v-btn @click="addDevice"> Add device</v-btn>
    <span>#Devices: {{ store.devices.length }}</span>
</template>


<!-- <template>
    <v-app>
      <NavigationBar/>
      <v-main color='#DDEAF4'>
        <RouterView/>
      </v-main>
    </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
</script> -->


