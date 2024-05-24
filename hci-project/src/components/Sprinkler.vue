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
        <v-row>
            <v-col cols="7" class="px-1">
                <v-text-field class="my-0" label="Quantity"></v-text-field>
            </v-col>
            <v-col cols="5" class="px-0">
                <v-select  label="unit":items="units"></v-select>
            </v-col>
        </v-row>
            <div class="my-0 button-container-row justify-center">
                <v-btn class="my-0">PUMP NOW</v-btn>
        </div> 
    </template>
</DeviceCard>
</template>

<script setup>
import { ref, toRefs } from 'vue';
import DeviceCard from './DeviceCard.vue';
import { DeviceApi } from '@/Api/DeviceApi';

// Props
const props = defineProps({
  device: Object,
});
//revisar
const units = [ "ml","cl","dl","l","dal","hl","kl"]

// async function dispense(){

// }
</script>



  