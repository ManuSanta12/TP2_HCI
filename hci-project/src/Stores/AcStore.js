import { defineStore } from 'pinia';

export const useAirConditionerStore = defineStore('airConditioner', {
  state: () => ({
    airConditioners: []
  }),
  getters: {
    getItems: (state) => {return state.airConditioners},
    findIndex(){
      return (ac) => {
        return this.airConditioners.findIndex(item => item.id == ac.id)
      }
    }
  },
  actions: {
    addAirConditioner(ac) {
      this.airConditioners.push(ac);
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