<template>
<DeviceCard :device="device" @toggle="handleToggle">
    <template #details>
    <v-slider
        prepend-icon="mdi-brightness-6"
        v-model="device.brightness"
        label="Brightness"
        min="0"
        max="100"
        thumb-label
    ></v-slider>
    </template>
    <template #expansion-panel>
    <v-row>
        <v-color-picker width="250" hide-inputs canvas-height="150"></v-color-picker>
    </v-row>
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
    device: Object
},
methods: {
    deleteDevice(id) {
    console.log(`Deleting device with id: ${id}`);
    }
}
}
</script>
