import { defineStore } from 'pinia'

export const useAirConditionerStore = defineStore('airConditioners', {
    state: () => ({
        airConditioners: []
    }),
    actions: {
        addAirConditioner(airConditioner) {
            this.airConditioners.push(airConditioner)
        },
        removeAirConditioner(id) {
            this.airConditioners = this.airConditioners.filter(ac => ac.id !== id)
        },
        updateAirConditioner(id, updates) {
            const index = this.airConditioners.findIndex(ac => ac.id === id)
            if (index !== -1) {
                this.airConditioners[index] = { ...this.airConditioners[index], ...updates }
            }
        }
    }
});
