import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSprinklerStore = defineStore('sprinkler', () => {
    // Composicion con el deviceStore como base

    //Definicion de campos y metodos propios
    const pumpStatus = ref("NO DATA");

    function startPump() {
        pumpStatus.value = "RUNNING";
    }

    function stopPump() {
        pumpStatus.value = "NOT RUNNING";
    }

    // Usar spread-operator (...) retorna TODAS las propiedades del baseStore.
    // Entonces, al usar sprinklerOperator, se tiene acceso a todas las propiedades y 
    // métodos de useDeviceStore en conjunto a las propias de sprinkler. Desde afuera,
    // se verá como un unico store!! Mismo comportamiento que la herencia de clases.
    return { ...baseStore, pumpStatus, startPump, stopPump };
});
