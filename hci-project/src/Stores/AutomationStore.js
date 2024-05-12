// stores/automations.js
import { defineStore } from 'pinia'

export const useAutomationStore = defineStore('automations', {
    state: () => ({
        automations: []
    }),
    actions: {
        addAutomation(automation) {
            this.automations.push(automation);
        },
        removeAutomation(id) {
            this.automations = this.automations.filter(automation => automation.id !== id);
        },
        updateAutomation(id, updates) {
            const index = this.automations.findIndex(automation => automation.id === id);
            if (index !== -1) {
                this.automations[index] = {...this.automations[index], ...updates};
            }
        }
    }
});
