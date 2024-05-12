<template>
    <div class="device-card">
      <v-card class="pa-3" width="300"> 
        <v-row dense>
          <v-col>
            <v-row class="px-3">
              <v-col cols="10">
                <v-card-title class="pa-0 text-h8">{{ device.name }}</v-card-title>
              </v-col>
              <v-col cols="2" class="d-flex justify-end pa-0">
                <v-switch inset color="green" class="small-switch" v-model="isOn" @click="toggleDevice"></v-switch>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <slot name="details"></slot>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>More</v-expansion-panel-title>
            <v-expansion-panel-content>
                <v-expansion-panel-text>
                    <slot name="expansion-panel"></slot>
                    <v-checkbox
                        v-model="device.showInHome"
                        label="Show in home"
                        class="my-4"
                    ></v-checkbox>
                    <v-btn block prepend-icon="mdi-trash-can-outline">Delete</v-btn>
                </v-expansion-panel-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </div>
  </template>
  
<script>
  export default {
    props: {
      device: Object
    },
    data() {
      return {
        isOn: false
      };
    },
    methods: {
      toggleDevice() {
        this.isOn = !this.isOn;
        this.$emit('toggle', this.isOn);
      }
    }
  }
</script>
  
<style scoped>
  .device-card {
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
  }
</style>
  