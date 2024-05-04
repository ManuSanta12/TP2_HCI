<script>
import SprinklerDeviceCard from '@/components/SprinklerDeviceCard.vue';
import SpeakerDeviceCard from '@/components/SpeakerDeviceCard.vue';
import AirConditionerDeviceCard from '@/components/AirConditionerDeviceCard.vue';

export default {
  components: {
    SprinklerDeviceCard,
    SpeakerDeviceCard,
    AirConditionerDeviceCard
  },
  data() {
    return {
      device_grid: [
        [{ type: 'Speaker', id: 1}, { type: 'Speaker', id: 2}],
        [{ type: 'AirConditioner', id: 3}, { type: 'AirConditioner', id: 4}, { type: 'AirConditioner', id: 5}],
        [{type:'Sprinkler', id: 6}, {type:'Sprinkler', id: 7}, {type:'Sprinkler', id: 8}]
      ]
    };
  },
  methods: {
  //TODO podria hacer un mapa mas que un switch! gpt daun
  getComponent(type) {
    switch (type) {
      case 'Speaker':
        return SpeakerDeviceCard;
      case 'AirConditioner':
        return AirConditionerDeviceCard;
      case 'Sprinkler':
        return SprinklerDeviceCard;
      default:
        return 'div'; // Un componente por defecto o un mensaje de error
    }
  }
}
};
</script>

<!-- Clave de Columna: :key="'col-' + index" proporciona una clave única para cada columna basada en su posición en el arreglo. Esto es crucial para ayudar a Vue a identificar y gestionar eficientemente cada columna durante las actualizaciones.
Clave de Dispositivo: :key="device.id" se usa para cada dispositivo dentro de la columna, permitiendo que Vue rastree individualmente cada dispositivo, lo cual es esencial si los dispositivos son agregados, eliminados o reordenados dentro de la columna. -->
<!-- Eficiencia de Renderizado: Al utilizar claves únicas tanto para columnas como para dispositivos, Vue puede manejar de manera más eficiente las actualizaciones a la interfaz sin necesidad de re-renderizar todo el contenido innecesariamente.
Escalabilidad: Este enfoque escala bien a medida que agregas más tipos de dispositivos o cambias la estructura de los datos, manteniendo la capacidad de Vue de gestionar estos cambios sin pérdida de rendimiento. -->

<template>
  <v-app-bar title="Home" color="#DDEAF4" />
  <v-layout class="rounded rounded-md">
    <v-main color="#DDEAF4">
      <v-row class="scrollable" cols="3">
        <!-- Itera sobre cada columna en devices -->
        <v-col v-for="(column, index) in device_grid" :key="'col-' + index">
          <!-- Itera sobre cada dispositivo en la columna -->
          <component v-for="device in column" :is="getComponent(device.type)" :key="device.id" class="ma-2"></component>
        </v-col>
      </v-row>
    </v-main>
  </v-layout>
</template>
