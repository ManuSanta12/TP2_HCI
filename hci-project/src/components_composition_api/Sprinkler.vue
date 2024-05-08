<script lang="ts" setup>
import { ref, onMounted, onUpdated } from 'vue';
import SprinklerStatus from '@/scripting/SprinklerStatus.ts'

// Recibir props utilizando `defineProps`
const props = defineProps({
    status: {
        type: SprinklerStatus,
        default: () => ({
            device_name: "NO DATA",
            toggle_status: false,
            show_in_home: false,
            pump_status: "NO DATA"}),
        required: true
    }
});

//  Usar ref() le dice a vue que es una variable reactiva y debe chequear y updatear su valor constantemente!
const device_name = ref(props.status.device_name);
const toggle_status = ref(props.status.toggle_status);
const show_in_home = ref(props.status.show_in_home);
const pump_status = ref(props.status.pump_status);

function alternate_toggle_status(){
    toggle_status.value = !toggle_status.value;
}

onMounted(() => {
    console.log("COMPONENT MOUNTED | Sprinkler.vue - status: ", props.status);
});

onUpdated(() => {
    console.log("COMPONENT UPDATED | Sprinkler.vue - status: ", props.status);
});
</script>


<template>
    <v-card class="pa-3" width="300"> 
        <v-row class="px-3">
            <v-col cols="10">
                <v-card-title class="pa-0 text-h8">{{ device_name }}</v-card-title>
            </v-col>
            <v-col cols="2" class="d-flex justify-end pa-0">
                <v-switch inset :model-value="toggle_status" color="green" class="small-switch" @change="alternate_toggle_status"></v-switch>
            </v-col>
        </v-row>
        <v-col class="d-flex justify-center pa-0">
            <v-card-actions>
                <v-btn icon="mdi-water"></v-btn>
                <v-btn icon="mdi-water-off"></v-btn>
            </v-card-actions>
        </v-col>
        <v-col class="d-flex justify-center pa-0">
            <v-icon>mdi-water-pump</v-icon>
            <p>Current status: {{ pump_status }}</p>
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


 
  