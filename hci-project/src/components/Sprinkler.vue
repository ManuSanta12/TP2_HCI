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

<script setup>
import { ref, toRefs } from 'vue';
import DeviceCard from './DeviceCard.vue';

// Props
const props = defineProps({
  device: Object,
  initialData: {
    type: Object,
    default: () => ({})
  }
});
//revisar

</script>



  