// stores/Automations.js
import { defineStore } from 'pinia'
import {onMounted, ref} from 'vue'
import {Automation, AutomationApi} from '@/Api/AutomationApi'

export const useAutomationStore = defineStore('Automation', () => {
    const automations = ref([]);

    async function addAutomation(Automation) {
        const result = await AutomationApi.add(Automation)
        await getAll()
        return Object.assign(new Automation(), result)
    }
    async function modify(Automation) {
        const result = await AutomationApi.modify(Automation)
        await getAll()
        return Object.assign(new Automation(), result)
    }
    async function removeAutomation(id) {
        const result =  await AutomationApi.remove(id)
        await getAll()
        return result
    }
    async function get(id) {
        const result = await AutomationApi.get(id)
        await getAll()
        return Object.assign(new Automation(), result)
    }
    async function getAll(controller = null) {
        let result = await AutomationApi.getAll(controller);
        result = result.map((Automation) => Object.assign(new Automation(), Automation));
        automations.value = result
        return result
    }
    async function runAction(id, actionName, data = null) {
        const result = await AutomationApi.runAction(id, actionName, data)
        await getAll()
        return Object.assign(new Automation(), result)
    }
    return {Automations, typeIdMap, addAutomation, modify, get, removeAutomation, getAll, runAction}
});
