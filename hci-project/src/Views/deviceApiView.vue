<script setup>
import {onMounted} from 'vue';
import { useDeviceStore } from '@/Stores/DeviceStore'
import {Device } from '@/Api/DeviceApi';
const store = useDeviceStore()
onMounted(async () => {
    await store.getAll()
})
function addDevice(){
    const device = new Device(null, 'Sprinkler')
    store.add(device)
}

</script>

<template>
    <v-btn @click="addDevice"> Add device</v-btn>
    <span>#Devices: {{ store.devices.length }}</span>
</template>