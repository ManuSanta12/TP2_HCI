import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDeviceStore = defineStore('device', () => {
        const deviceStatus = ref(false);
        const deviceName = ref("NAME - NO DATA");

        function toggleDeviceStatus(){
            deviceStatus.value = !(deviceStatus.value);
        };

        // Se retorna un objeto con las propiedades y métodos que se desean exponer
        return { deviceStatus, toggleDeviceStatus , deviceName};
    })