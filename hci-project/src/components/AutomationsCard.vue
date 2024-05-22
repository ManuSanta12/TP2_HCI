<template>
  <v-row dense>
    <v-col >
      <v-card class="pa-2" width="300">
        <v-row class="px-3 pt-3">
          <v-col cols="10">
            <v-card-title class="pa-0 text-h8">{{automation.name }}</v-card-title>
          </v-col>
          <v-col cols="2" class="d-flex justify-end pa-0">
            <v-btn icon :color="iconColor" @click="togglePlay" v-model="isOn">
              <v-icon>{{ icon }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-card-subtitle class="px-3">{{automation.startersLength ? "Scheduled" : "Not Scheduled"}}</v-card-subtitle>
        <v-card-text class="px-3 pb-3">Includes {{ automation.actionsLength }} actions</v-card-text>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>More</v-expansion-panel-title>
            <v-expansion-panel-content>
                <v-expansion-panel-text>
                    <v-row no-gutters>
                      <v-col >
                        <v-sheet class="px-2 ma-2">
                          <v-btn  variant="tonal" color="error" min-width="100" @click="deleteAuto(automation.id)">Delete</v-btn>
                        </v-sheet>
                      </v-col>
                      <v-checkbox
                                    v-model="automation.showInHome"
                                    label="Show in home"
                                    class="my-4"
                        ></v-checkbox>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
  </v-row>
</template>

<script setup>
import { defineEmits, ref } from 'vue'; 
import { useAutomationStore } from '@/Stores/AutomationStore';
//import { openEditDialog } from '@/Views/AutomationView2.vue'; 

const { removeAutomation} = useAutomationStore();


const props = defineProps({
  automation: Object
});

const deleteAuto = (id) =>{
  console.log('auto id', id);
  removeAutomation(id);
}


const isOn = ref(false);
let icon = 'mdi-pause';
let iconColor = 'red';


const togglePlay = () => {
  isOn.value = !isOn.value;
  icon = icon === 'mdi-pause' ? 'mdi-play' : 'mdi-pause';
  iconColor = icon === 'mdi-pause' ? 'red' : 'green';
};
</script>
