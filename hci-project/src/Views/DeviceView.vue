
<template>
  <v-layout class="rounded rounded-md">
    <v-main color='#DDEAF4'>
      <v-row class="pa-6 scrollable" >
        <SpeakerDeviceCard class="ma-2"/>
        <LightDeviceCard class="ma-2"/>
        <AirConditionerDeviceCard class="ma-2"/>
        <SprinklerDeviceCard class="ma-2"/>
      </v-row>
    </v-main>
  </v-layout>
  <v-dialog v-model="dialog" max-width="1300" scrollable>
    <template v-slot:activator="{ props: addNew }">
      <v-app-bar title="Devices"  color='#DDEAF4'>
        <v-btn rounded prepend-icon="mdi-plus" variant="tonal"  v-bind ="addNew">Add new</v-btn>
      </v-app-bar>
    </template>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-title>Add a new device</v-card-title>
        <v-divider/>
        <v-text-field placeholder="Title"  class="pa-3" ></v-text-field>
        <v-row class="px-3 py-1 align-center"> <!-- Adjust vertical padding and alignment -->
              <v-col cols="10" class="d-flex align-center"> <!-- Use flexbox to align items vertically -->
                <v-list-item class="pa-0 text-subtitle-1">Show in home</v-list-item>
              </v-col>
              <v-col cols="2" class="d-flex justify-end align-center"> <!-- Ensure vertical alignment -->
                <v-switch inset color="green" class="small-switch align-center"></v-switch>
              </v-col>
            </v-row>
        <v-select
              :items="deviceTypes"
              label="Type"
              class="pa-3"
            ></v-select>
        <v-divider/>
        <v-card-actions>
              <v-btn prepend-icon="mdi-delete" variant="tonal" small color="error" dark @click="dialog = false">Delete</v-btn>
              <v-spacer></v-spacer> 
              <v-btn variant="tonal" color="secondary" dark @click="cancel">Cancel</v-btn>
              <v-btn variant="tonal" color="primary" dark @click="dialog = false">Save</v-btn>
          </v-card-actions>
      </v-card>
    </v-col>
    </v-row>
    </v-dialog>
</template>
<style>
.background{
    background-color: var(--v-background-base) !important;
}
.navigation-drawer-background{
    background-color:'#D8D7D7' !important;
}
</style>

<script>
import SpeakerDeviceCard from '@/components/SpeakerDeviceCard.vue';
import AirConditionerDeviceCard from '@/components/SpeakerDeviceCard.vue';
import SprinklerDeviceCard from '@/components/SprinklerDeviceCard.vue';
export default {
  data() {
    return {
      dialog: false,
      deviceTypes: [
        'Light Panel', 'Control Panel', 'Air Conditioner', 'Speaker', 'Vacuum', 'Oven', 'Fridge'
      ]
    };
  },
  methods: {
    cancel() {
      this.dialog = false;
    }
  }
};
</script>