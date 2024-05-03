<script>
import AutomationsCard from '@/components/AutomationsCard.vue';
import SpeakerDeviceCard from '@/components/SpeakerDeviceCard.vue';
import AirConditionerDeviceCard from '@/components/AirConditionerDeviceCard.vue';

export default {
  components: {
    AutomationsCard,
    SpeakerDeviceCard,
    AirConditionerDeviceCard
  },
  data() {
    return {
      devices: [
        { type: 'Speaker', id: 1 },
        { type: 'Speaker', id: 2 },
        { type: 'AirConditioner', id: 3 },
        { type: 'AirConditioner', id: 3 },
        { type: 'AirConditioner', id: 3 },
        { type: 'AirConditioner', id: 3 },
        { type: 'AirConditioner', id: 3 },
        { type: 'Automation', id: 4 }
      ]
    };
  },
  methods: {
  getComponent(type) {
    switch (type) {
      case 'Speaker':
        return SpeakerDeviceCard;
      case 'AirConditioner':
        return AirConditionerDeviceCard;
      case 'Automation':
        return AutomationsCard;
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
      <v-row class="scrollable cols=4">
        <v-col v-for="device in devices" :key="device.id" class="ma-2">
          <component :is="getComponent(device.type)"></component>
        </v-col>
      </v-row>
    </v-main>
  </v-layout>
</template>