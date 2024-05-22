// stores/devices.js
import { defineStore } from 'pinia'
import {ref} from 'vue'
import {Device, DeviceApi} from '@/Api/DeviceApi'

export const useDeviceStoreApi = defineStore('device', () => {
    const devices = ref([])
     
    async function addDevice(device) {
        const result = await DeviceApi.add(device)
        await getAll()
        return Object.assign(new Device(), result)
    }
    async function modify(device) {
        const result = await DeviceApi.modify(device)
        await getAll()
        return Object.assign(new Device(), result)
    }
    async function removeDevice(id) {
        const result =  await DeviceApi.remove(id)
        await getAll()
        return result
    }
    async function get(id) {
        const result = await DeviceApi.get(id)
        await getAll()
        return Object.assign(new Device(), result)
    }
    async function getAll() {
        let response = await DeviceApi.getAll();
        console.log("API getAll response:", response); 
        let result = response.result.map(device => Object.assign(new Device(), device));
        devices.value = result;
        return result;
    }
    return {devices, addDevice, modify, get, removeDevice, getAll}
});
