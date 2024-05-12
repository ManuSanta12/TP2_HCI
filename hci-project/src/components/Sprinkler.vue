<template>
   <DeviceCard :device="device" @toggle="handleToggle">
    <template #details>
        <v-card-actions>
            <v-btn icon="mdi-water"></v-btn>
            <v-btn icon="mdi-water-off"></v-btn>
        </v-card-actions>
        <v-col class="d-flex justify-center pa-0">
            <v-icon>mdi-water-pump</v-icon>
            <p>Current status: {{ pump_status }}</p>
        </v-col>
    </template>
    <template #expansion-panel>
        <v-list-item-title>Pump water</v-list-item-title> 
        <v-text-field class="my-0" label="Quantity in ml."></v-text-field>
        <div class="my-0 button-container-row justify-center">
            <v-btn class="my-0">PUMP NOW</v-btn>
        </div> 
    </template>
</DeviceCard>
</template>

<script>
import DeviceCard from './DeviceCard.vue';
export default {
    components: {
        DeviceCard
    },
    props: {
        device: Object,
        initialData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      device_name: this.initialData.device_name || "NO DATA",
      toggle_status: this.initialData.toggle_status || false,
      pump_status: this.initialData.pump_status || "NO DATA"
    };
  }
};
</script>


  