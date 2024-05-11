<script lang="ts" setup>
import { ref, onMounted, onUpdated } from 'vue';
import { useSprinklerStore }  from '@/Stores/SprinklerStore'

// Recibir props utilizando `defineProps`
const store = useSprinklerStore();
</script>


<template>
    <v-card class="pa-3" width="300"> 
        <v-row class="px-3">
            <v-col cols="10">
                <v-card-title class="pa-0 text-h8">{{ store.deviceName }}</v-card-title>
            </v-col>
            <v-col cols="2" class="d-flex justify-end pa-0">
                <v-switch inset :model-value="store.deviceStatus" color="green" class="small-switch" @change="store.toggleDeviceStatus"></v-switch>
            </v-col>
        </v-row>
        <v-col class="d-flex justify-center pa-0">
            <v-card-actions>
                <v-btn icon="mdi-water" @click="store.startPump"></v-btn>
                <v-btn icon="mdi-water-off" @click="store.stopPump"></v-btn>
            </v-card-actions>
        </v-col>
        <v-col class="d-flex justify-center pa-0">
            <v-icon>mdi-water-pump</v-icon>
            <p>Current status: {{ store.pumpStatus }}</p>
        </v-col>
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-title>More</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-expansion-panel-content class="pa-1">
                        <div>  
                            <v-list-item-title>Pump water</v-list-item-title> 
                            <v-text-field class="my-0" label="Quantity in ml."></v-text-field>
                            <div class="my-0 button-container-row justify-center">
                                <v-btn class="my-0">PUMP NOW</v-btn>
                            </div> 
                        </div>
                        <v-col class="d-flex justify-center pa-1">
                            <v-checkbox density="compact" label="Show in home"></v-checkbox>
                        </v-col>
                        <v-btn block prepend-icon="mdi-trash-can-outline">Delete</v-btn>
                    </v-expansion-panel-content>
                </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
    </v-card>
</template>


 
  