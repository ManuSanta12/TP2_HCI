// stores/devices.js
import { defineStore } from 'pinia'

export const useDeviceStore = defineStore('devices', {
    state: () => ({
        devices: [],
    }),
    actions: {
        addDevice(device) {
            this.devices.push(device);
        },
        removeDevice(id) {
            this.devices = this.devices.filter(device => device.id !== id);
        },
        updateDevice(id, updates) {
            const index = this.devices.findIndex(device => device.id === id);
            if (index !== -1) {
                this.devices[index] = {...this.devices[index], ...updates};
            }
        },
    }
});
