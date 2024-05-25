// stores/Automations.js
import { defineStore } from 'pinia'
import {onMounted, ref} from 'vue'
import { Automation, AutomationsApi } from '@/Api/AutomationsApi';

export const useAutomationStoreApi = defineStore('Automation', () => {
    const automations = ref([]);

    async function addAutomation(Automation) {
        const result = await AutomationsApi.add(Automation)
        await getAll()
        return Object.assign(new Automation(), result)
    }
    async function modifyAutomation(Automation) {
        const result = await AutomationsApi.modify(Automation)
        await getAll()
        return Object.assign(new Automation(), result)
    }
    async function removeAutomation(id) {
        const result =  await AutomationsApi.remove(id)
        await getAll()
        return result
    }
    async function getAutomation(id) {
        const result = await AutomationsApi.get(id)
        await getAll()
        return Object.assign(new Automation(), result)
    }
    async function getAll(controller = null) {
        let result = await AutomationsApi.getAll(controller);
        result = result.map((Automation) => Object.assign(new Automation(), Automation));
        automations.value = result
        return result
    }
    async function executeAutomation(id, controller = null) {
        const result = await AutomationsApi.execute(id, controller);
        await getAll(controller);
        return Object.assign(new Automation(), result);
    }

    return {
        automations,
        addAutomation,
        modifyAutomation,
        removeAutomation,
        getAutomation,
        getAll,
        executeAutomation
    }
});
