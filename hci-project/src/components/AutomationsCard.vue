<template>
  <v-row dense>
    <v-col>
      <v-card class="pa-3" width="300" color='#E1E3E2'>
        <v-row class="px-3 pt-3">
          <v-col cols="10">
            <v-card-title class="pa-0 text-h8">{{ automationName }}</v-card-title>
          </v-col>
          <v-col cols="2" class="d-flex justify-end pa-0">
            <v-btn icon :color="iconColor" @click="executeAutomation">
              <v-icon>mdi-play</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-card-text class="px-3 pb-3">Includes {{ automation.actions.length }} {{ automation.actions.length >1 ? "actions":"action" }}</v-card-text>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>More</v-expansion-panel-title>
              <v-expansion-panel-content>
                <v-expansion-panel-text>
                  <v-list-title>List of Actions</v-list-title>
                    <v-list-item v-for="(action, index) in props.automation.actions" :key="index">
                    {{ action.device.name }} - {{ action.actionName }}
                    </v-list-item>    
                  <v-col>
                    <v-btn block variant="tonal" color="error" prepend-icon="mdi-trash-can-outline" @click="deleteAutomation">Delete</v-btn>
                  </v-col>
                </v-expansion-panel-text>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          </v-card>
        </v-col>
  </v-row>
</template>

<script setup>
import { ref , computed} from 'vue'; 
import { useAutomationStoreApi } from '@/Stores/AutomationStoreApi';
import { useErrorStore } from '@/Stores/ErrorStore';
const automationStore = useAutomationStoreApi();
const errorStore = useErrorStore();

const props = defineProps({
  automation: Object
});
const automationName = computed(() => props.automation["name"] || 'Unknown Device')

async function executeAutomation() {
  try {
    await automationStore.executeAutomation(props.automation.id);
    errorStore.showSuccess("Automation executed", `${props.automation["name"]} was executed successfully.`);
  } catch (error) {
    errorStore.showError(`Couldn't execute ${props.automation["name"]}`, "Please try again.");
  }
}

async function deleteAutomation() {
  try {
    const _result = await automationStore.removeAutomation(props.automation.id);
    props.automation = null;
  } catch (error) {
    errorStore.showError("Couldn't delete device", "Please try again.");
  }
}

const togglePlay = () => {
  isOn.value = !isOn.value;
  icon = icon === 'mdi-pause' ? 'mdi-play' : 'mdi-pause';
  iconColor = icon === 'mdi-pause' ? 'red' : 'green';
};
</script>
