// stores/devices.js
import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import { Device, DeviceApi } from '@/Api/DeviceApi'
import { useErrorStore } from './ErrorStore';

export const useDeviceStoreApi = defineStore('device', () => {
    const devices = ref({});
    const errorStore = useErrorStore();
    const typeIdMap = {
        'Speaker': "c89b94e8581855bc",
        'Sprinkler': "dbrlsh7o5sn8ur4i",
        'Light Panel': "go46xmbqeomjrsjr",
        'Air Conditioner': "li6cbv5sdlatti0j"
    };

    async function addDevice(device) {
        try{
            const result = await DeviceApi.add(device)
            devices.value[result.id] = Object.assign(new Device(), result);
            return devices.value[result.id];
        } catch(error){
            errorStore.showError("Error adding a new device", "Please try again.");
        }
    }

    async function modify(device) {
        const result = await DeviceApi.modify(device)
        devices.value[result.id] = Object.assign(new Device(), result);
        return devices.value[result.id];
    }

    async function removeDevice(id) {
        try {
            const result = await DeviceApi.remove(id)
            await getAll();
            return result;
        } catch(error){
            errorStore.showError("Error removing device", "Please try again.");
        }
    }

    async function getAll(controller = null) {
        let result = await DeviceApi.getAll(controller);
        devices.value = {};
        result.forEach(device => {
            devices.value[device.id] = Object.assign(new Device(), device);
        });
        return devices.value;
    }

    async function runAction(id, actionName, data = null) {
        const result = await DeviceApi.runAction(id, actionName, data)
        console.log("se ejecuto la accion", actionName, "con resultado", result)
        getAll();
        console.log(devices.value[id])
        return devices.value[id];
    }

    async function runActionNoParams(id, actionName) {
        const result = await DeviceApi.runActionNoParams(id, actionName)
        getAll();
        return devices.value[id];
    }

    return { devices, typeIdMap, addDevice, modify, removeDevice, getAll, runAction, runActionNoParams }
});
