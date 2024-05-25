import { defineStore } from 'pinia'
import { ref } from 'vue'
import { AutomationsApi, Automation} from '@/Api/AutomationsApi'

export const useAutomationStoreApi = defineStore('automations', () => {
    const automations = ref([]);
    
    //Porque en DeviceStoreApi no ponen los controller? 
    async function addAutomation(automation, controller = null) {
        const result = await AutomationsApi.add(automation, controller);
        await getAll(controller);
        return Object.assign(new Automation(), result);
    }

    async function modifyAutomation(automation, controller = null) {
        const result = await AutomationsApi.modify(automation.id, automation, controller);
        await getAll(controller);
        return Object.assign(new Automation(), result);
    }

    async function removeAutomation(id, controller = null) {
        const result = await AutomationsApi.remove(id, controller);
        await getAll(controller);
        return result;
    }

    async function getAutomation(id, controller = null) {
        const result = await AutomationsApi.get(id, controller);
        await getAll(controller);
        return Object.assign(new Automation(), result);
    }

    async function getAll(controller = null) {
        let result = await AutomationsApi.getAll(controller);
        result = result.map((automation) => Object.assign(new Automation(), automation));
        automations.value = result;
        return result;
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
