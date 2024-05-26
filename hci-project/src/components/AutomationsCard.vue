<template>
  <v-row dense>
    <v-col >
      <v-card class="pa-2" width="300">
        <v-row class="px-3 pt-3">
          <v-col cols="10">
            <v-card-title class="pa-0 text-h8">{{ automationName }}</v-card-title>
          </v-col>
          <v-col cols="2" class="d-flex justify-end pa-0">
            <v-btn icon :color="iconColor" @click="togglePlay" v-model="isOn">
              <v-icon>{{ icon }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-card-text class="px-3 pb-3">Includes {{ automation.actions.length()}} actions</v-card-text>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title >More</v-expansion-panel-title>
            <v-expansion-panel-content>
                <v-expansion-panel-text>
                    <v-row no-gutters>
                      <v-checkbox
                      v-model="automation.showInHome"
                      label="Show in home"
                      class="my-4"
                      ></v-checkbox>
                      <v-col >
                          <v-btn block variant="tonal" color="error" prepend-icon="mdi-trash-can-outline" @click="deleteAutomation">Delete</v-btn>
                      </v-col>
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
import { useAutomationStoreApi } from '@/Stores/AutomationStoreApi';
//import { openEditDialog } from '@/Views/AutomationView2.vue'; 

const automationStore = useAutomationStoreApi();
const errorStore = useErrorStore();

const props = defineProps({
  automation: Object
});
const automationName = computed(() => props.automation["name"] || 'Unknown Device')
// const showInHome = computed(() => props.automation["meta"]["showInHome"]);

async function deleteAutomation() {
  try {
    const _result = await automationStore.removeAutomation(props.automation.id);
    // setResult(_result);
    props.automation = null;
  } catch (error) {
    errorStore.showError("Couldn't delete device", "Please try again.");
  }
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
