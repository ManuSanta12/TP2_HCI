import { defineStore } from 'pinia'
import {onMounted, ref} from 'vue'
import {Device, DeviceApi} from '@/Api/DeviceApi'

export const useDeviceStoreApi = defineStore('device', () => {
    const devices = ref([]);
    const showInHomeDevices = ref([]);
    const typeIdMap = {
        'Speaker': "c89b94e8581855bc",
        'Sprinkler': "dbrlsh7o5sn8ur4i",
        'Light Panel': "go46xmbqeomjrsjr",
        'Air Conditioner': "li6cbv5sdlatti0j"
      };

    async function addDevice(device) {
        const result = await DeviceApi.add(device)
        await getAll()
        return result;
    }
    async function modify(device) {
        const result = await DeviceApi.modify(device)
        await getAll()
        return Object.assign(new Device(), result)
    }
    async function removeDevice(id) {
        const result = await DeviceApi.remove(id)
        await getAll()
        return result
    }
    async function get(id) {
        const result = await DeviceApi.get(id)
        await getAll()
        return Object.assign(new Device(), result)
    }
    async function getAll(controller = null) {
        let result = await DeviceApi.getAll(controller);
        let newDevices = [];
        let newShowInHomeDevices = [];
        for (let i = 0; i < result.length; i++) {
          let device = result[i];
          newDevices.push(Object.assign(new Device(), device));
          if(device.meta && device.meta.showInHome) {
            newShowInHomeDevices.push(Object.assign(new Device(), device));
          }
        }
        devices.value = newDevices
        showInHomeDevices.value = newShowInHomeDevices
        return result
    }
    
    async function runAction(id, actionName, data = null) {
        const result = await DeviceApi.runAction(id, actionName, data)
        await getAll()
        return result
    }
    async function runActionArray(id, actionName, data) {
        const result = await DeviceApi.runActionArray(id, actionName, data)
        await getAll()
        return result
    }
    async function runActionNoParams(id, actionName) {
        const result = await DeviceApi.runActionNoParams(id, actionName)
        await getAll()
        return result
    }
    async function setShowInHome(id, name, showInHome) {
        const result = await DeviceApi.update(id, `{ "name": "${name}", "meta": {"showInHome": ${showInHome}} }`)
        await getAll()
        return result
    }
    return {devices, showInHomeDevices, typeIdMap, addDevice, modify, get, removeDevice, getAll, runAction, runActionNoParams, runActionArray, setShowInHome}
});