<template>
   <DeviceCard :device="device" @toggle="handleToggle">
    <template #details>
        <v-card-actions class="justify-center">
            <v-btn icon="mdi-water" @click="open"></v-btn>
            <v-btn icon="mdi-water-off" @click="close"></v-btn>
        </v-card-actions>
        <v-col class="d-flex justify-center pa-0">
            <v-icon>mdi-water-pump</v-icon>
            <p>Current status: {{ pumpStatus }}</p>
        </v-col>
    </template>
    <template #expansion-panel>
        <v-list-item-title>Pump water</v-list-item-title> 
        <v-row>
            <v-col cols="7" class="px-1">
                <v-text-field class="my-0" label="Quantity" v-model="pumpQuantity"></v-text-field>
            </v-col>
            <v-col cols="5" class="px-0">
                <v-select label="unit" :items="units" v-model="pumpUnit"></v-select>
            </v-col>
        </v-row>
            <div class="my-0 button-container-row justify-center">
                <v-btn class="my-0" @click="dispense">Dispense water</v-btn>
        </div> 
    </template>
</DeviceCard>
</template>

<script setup>
import { ref, computed } from 'vue';
import DeviceCard from './DeviceCard.vue';
import { useErrorStore } from '@/Stores/ErrorStore';
import { useDeviceStoreApi } from '@/Stores/DeviceStoreApi';

// Props
const props = defineProps({
  device: Object,
});

const deviceStore = useDeviceStoreApi();
const errorStore = useErrorStore();

const units = [ "ml","cl","dl","l","dal","hl","kl"]
const pumpStatus = computed( () => props.device["state"]["status"])
const pumpQuantity = ref(0)
const pumpUnit = ref("ml")

async function open(){
    try{
        let response = await deviceStore.runActionNoParams(props.device["id"], "open")
    } catch(error){
        errorStore.showError("Couldn't open the sprinkler", "Please try again")
    }
}

async function close(){
    try{
        let response = await deviceStore.runActionNoParams(props.device["id"], "close")
    } catch(error){
        errorStore.showError("Couldn't close the sprinkler", "Please try again")
    }
}

async function dispense(){
    let params = [pumpQuantity.value, pumpUnit.value]
    try{
        let response = await deviceStore.runActionArray(props.device["id"], "dispense", params)
    } catch(error){
        errorStore.showError("Couldn't dispense water", "Please try again")
    }
}

</script>



  