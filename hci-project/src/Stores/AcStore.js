import { defineStore } from 'pinia';
import { AirConditioner } from '@/Stores/Models/AirConditioner';

export const useAirConditionerStore = defineStore('airConditioner', {
  state: () => ({
    airConditioners: []
  }),
  actions: {
    addAirConditioner(id) {
      const newAC = new AirConditioner(id);
      this.airConditioners.push(newAC);
    },
    toggleAC(id) {
        const ac = this.airConditioners.find(ac => ac.id === id);
        console.log(this.airConditioners, 'acs')
        ac.status = ac.status === 'off' ? 'on' : 'off';
        console.log(ac, 'ac1')
    },
    setTemperature(id, temperature) {
      const ac = this.airConditioners.find(ac => ac.id === id);
      ac.temperature = temperature;
    },
    setName(id, name){
        const ac = this.airConditioners.find(ac => ac.id === id);
        ac.name = name;
    }
  }
});