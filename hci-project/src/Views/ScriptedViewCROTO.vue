<script>
import SprinklerDeviceCard from '@/components/SprinklerDeviceCard.vue';
// import SpeakerDeviceCard from '@/components/Speaker.vue';
// import AirConditionerDeviceCard from '@/components/AirConditionerDeviceCard.vue';

export default {
  components: {
    SprinklerDeviceCard
    // SpeakerDeviceCard,
    // 
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
      // case 'Speaker':
      //   return SpeakerDeviceCard;
      // case 'AirConditioner':
      //   return AirConditionerDeviceCard;
      case 'Sprinkler':
        return SprinklerDeviceCard;
      default:
        return 'div'; // Un componente por defecto o un mensaje de error
    }
  }
}
};
</script>

<template>
  <v-app-bar title="Home" color="#DDEAF4" />
  <v-layout class="rounded rounded-md">
    <v-main color="#DDEAF4">
      <v-row class="scrollable" cols="3">
        <v-col v-for="column in device_grid">
          <!-- Itera sobre cada dispositivo en la columna -->
          <component v-for="device in column" :is="getComponent(device.type)" class="ma-2"></component>
        </v-col>
      </v-row>
    </v-main>
  </v-layout>
</template>