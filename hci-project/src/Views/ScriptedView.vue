<script>
import SprinklerDeviceCard from '@/components/SprinklerDeviceCard.vue';
import Sprinkler from '@/components_composition_api/Sprinkler.vue';
import SpeakerDeviceCard from '@/components/SpeakerDeviceCard.vue';
import AirConditionerDeviceCard from '@/components/AirConditionerDeviceCard.vue';

export default {
  components: {
    SprinklerDeviceCard,
    Sprinkler,
    SpeakerDeviceCard,
    AirConditionerDeviceCard
  }
//   data() {
//     return {
//       device_grid: [
//         [{type:'AirConditioner', id: 0}],
//         [{type:'AirConditioner', id: 1}],
//         [{type:'AirConditioner', id: 3}],
//       ]
//     };
//   },
//   methods: {
//   getComponent(type) {
//     const componentMap = {
//       Speaker: SpeakerDeviceCard,
//       AirConditioner: AirConditionerDeviceCard,
//       SprinklerCard: SprinklerDeviceCard,
//       Sprinkler: Sprinkler
//     };
//     return componentMap[type] || 'div'; // Un componente por defecto o un mensaje de error
//   },
//   addDevice(device, columnIndex) {
//     this.device_grid[columnIndex].push(device);
//   }
// }
};
</script>

<!-- Clave de Columna: :key="'col-' + index" proporciona una clave única para cada columna basada en su posición en el arreglo. Esto es crucial para ayudar a Vue a identificar y gestionar eficientemente cada columna durante las actualizaciones.
Clave de Dispositivo: :key="device.id" se usa para cada dispositivo dentro de la columna, permitiendo que Vue rastree individualmente cada dispositivo, lo cual es esencial si los dispositivos son agregados, eliminados o reordenados dentro de la columna. -->
<!-- Eficiencia de Renderizado: Al utilizar claves únicas tanto para columnas como para dispositivos, Vue puede manejar de manera más eficiente las actualizaciones a la interfaz sin necesidad de re-renderizar todo el contenido innecesariamente.
Escalabilidad: Este enfoque escala bien a medida que agregas más tipos de dispositivos o cambias la estructura de los datos, manteniendo la capacidad de Vue de gestionar estos cambios sin pérdida de rendimiento. -->

<template>
  <v-app-bar title="Home -- SCRIPTED" color="#DDEAF4" />
  <v-layout class="rounded rounded-md">
    <v-main color="#DDEAF4">
      <v-row class="scrollable" cols="3">
        <AirConditionerDeviceCard/>
        <!-- Itera sobre cada columna en devices -->
        
      </v-row>
      <button @click="addDevice({ type: 'Speaker'}, 0)">Add Speaker to First Column</button>
    </v-main>
  </v-layout>
</template>
