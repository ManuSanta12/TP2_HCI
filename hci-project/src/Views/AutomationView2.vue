<template>
  <v-layout class="rounded rounded-md"> 
    <v-main >
      <v-container>
        <v-row class="scrollable" no-gutters>
          <div class="pa-2" v-for="auto in store.automations" :key="auto.id">
            <AutomationsCard 
            :automation="auto" 
            />
          </div> 
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
    <v-dialog v-model="dialog" width="1300" scrollable>
      <template v-slot:activator="{ props: addNew }">
        <v-app-bar title="Automations" color="#E4DCD1">
          <v-btn rounded prepend-icon="mdi-plus" variant="tonal" v-bind="addNew" @click="handleAddNew">Add new</v-btn>
        </v-app-bar>
      </template>
      <v-card>
        <v-card-title>
          Add Automation
        </v-card-title>
        <v-divider />
        <v-card-text>
          <v-text-field label="Name" v-model="automation.name" outlined dense />
          <v-divider class="my-4" />
          <v-subheader>Actions</v-subheader>
          <v-row v-for="(action, index) in automation.actions" :key="index">
            <v-col>
              <v-select
                :items="devices"
                label="Device"
                item-title="name"
                item-value="id"
                v-model="action.device"
                outlined
                dense
                return-object
                @change="(device) => {getActionsForDevice(device.id, index)}"
              />
            </v-col>
            <v-col cols="3">
              <v-select
                :items="actionsByDevice[action.device?.type?.id] || []"
                label="Action Type"
                v-model="action.actionName"
                outlined
                dense
              />
            </v-col>
            <v-col v-if="action.actionName === 'setColor'">
              <v-color-picker hide-inputs color-picker-controls-padding="0" v-model="action.params[0]" ></v-color-picker>
            </v-col>
            <v-col v-if="action.actionName === 'setBrightness'">
              <v-list-item-title class="pa-0">Brightness</v-list-item-title>
              <v-slider dense :max="100" :min="0" thumb-label v-model="action.params[0]"></v-slider>
            </v-col>
            <v-col v-if="action.actionName === 'setVolume'" class="align-center">
              <v-slider dense :max="10" :min="0" thumb-label v-model="action.params[0]"></v-slider>            
            </v-col>
            <v-col v-if="action.actionName === 'setGenre'" class="align-center">
              <v-select dense solo hide-details outlined compact
              v-model="action.params[0]"
              :items="genres"
              label="Pick Genre"
      ></v-select>         
            </v-col>
            <v-col v-if="action.actionName == 'setTemperature'">
              <v-slider 
                dense 
                :max="38" 
                :min="18" 
                thumb-label 
                v-model="action.params[0]"
                step="1"
              ></v-slider>
            </v-col>
            <v-col v-if="action.actionName == 'dispense'" >
              <v-row>
                <v-col cols="5" class="px-1">
                  <v-text-field class="my-0" label="Quantity" v-model="action.params[0]"></v-text-field>
                </v-col>
                <v-col cols="5" class="px-0">
                  <v-select label="unit" :items="units" v-model="action.params[1]"></v-select>
                </v-col>
              </v-row>
            </v-col>
            <v-col v-if="action.actionName == 'setMode'">
              <v-btn-toggle v-model="action.params[0]">
              <v-btn value="cool">Cool</v-btn>
              <v-btn value="fan">Fan</v-btn>
              <v-btn value="heat">Heat</v-btn>
            </v-btn-toggle>
            </v-col>
            <v-col v-if="action.actionName == 'setFanSpeed'">
              <v-select dense solo hide-details outlined compact
              v-model="action.params[0]"
              :items="fanSpeeds"
              label="Pick Speed"> 
              </v-select>
            </v-col>
            <v-col v-if="action.actionName == 'setVerticalSwing'">
              <v-select dense solo hide-details outlined compact
                v-model="action.params[0]"
                :items="VSwings"
                label="Pick V-Swing"> 
              </v-select>
            </v-col>
            <v-col v-if="action.actionName == 'setHorizontalSwing'">
              <v-select dense solo hide-details outlined compact
                v-model="action.params[0]"
                :items="HSwings"
                label="Pick H-Swing"> 
              </v-select>
            </v-col>
            <v-col cols="1">
              <v-btn icon="mdi-trash-can" color="error" @click="deleteAction(index)"></v-btn>
            </v-col>
          </v-row>
          <v-btn small class="ml-3" @click="addAction">Add Action</v-btn>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="tonal" color="error" text @click="cancel">Cancel</v-btn>
          <v-btn variant="tonal" color="primary" text @click="saveAutomation">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAutomationStoreApi } from '@/Stores/AutomationStoreApi';
import AutomationsCard from '@/components/AutomationsCard.vue';
import { DeviceApi } from '@/Api/DeviceApi';
import { useDeviceStoreApi } from '@/Stores/DeviceStoreApi';
import { useErrorStore } from '@/Stores/ErrorStore';
import { Automation, Action } from '@/Api/AutomationsApi';

const errorStore = useErrorStore();
const dialog = ref(false); 
const store = useAutomationStoreApi();
const genres = ['classical', 'country', 'dance', 'latina', 'pop', 'rock'];
const units = [ "ml","cl","dl","l","dal","hl","kl"]
const fanSpeeds = ["auto", "25", "50", "75", "100"];
const VSwings = ["auto", "22", "45", "67", "90"];
const HSwings = ["auto", "-90", "-45", "0", "45", "90"];

//const automations = store.automations;
const devices = ref([]);
const deviceStore = useDeviceStoreApi();
getAllAutomations()
const result = ref(null)
const automation = ref({
  name: '',
  actions: [{ device: null, actionName: '', params: [] }],
});

const actionsByDevice = ref({
  'go46xmbqeomjrsjr': ['setColor', 'setBrightness','turnOn', 'turnOff'],
  'c89b94e8581855bc': ['setVolume', 'play', 'pause', 'stop', 'previousSong', 'nextSong', 'setGenre'],
  'dbrlsh7o5sn8ur4i': ['open', 'close', 'dispense'],
  'li6cbv5sdlatti0j': ['setTemperature', 'setMode', 'setFanSpeed', 'turnOn', 'turnOff', 'setVerticalSwing', 'setHorizontalWwing']
});

function saveAutomation() {
  const actionsToSave = automation.value.actions.map(action => new Action({id: action.device.id}, action.actionName, action.params));
  const newAutomation = new Automation(automation.value.name, actionsToSave);
  try{
    store.addAutomation(newAutomation);
    dialog.value = false;
    restoreAutomation();
  } catch (error) {
    errorStore.showError("Error: Failed to save automation", "Please try again.");
  }
} 

const cancel = () => {
  dialog.value = false;
  restoreAutomation()
};
function restoreAutomation(){
  automation.value = {
  name: '',
  actions: [{ device: null, actionName: '', params: [] }],
  };
}

const addAction = () => {
  automation.value.actions.push({ device: null, actionName: '', params: [] });
}

const deleteAction = (index) => {
  automation.value.actions.splice(index, 1);
}

function getActionsForDevice(deviceID, index) {
  const device = devices.value.find(device => device.id === deviceID);
  if (device) {
    automation.value.actions[index].device = device;
    automation.value.actions[index].actionName = '';
  }
}

onMounted(async () => {
  await deviceStore.getAll();
  store.getAll()
  devices.value = deviceStore.devices;
});

async function getAllAutomations() {
    try {
        controller.value = new AbortController()
        const automations = await store.getAll(controller)
        controller.value = null
        // setResult(automations)
    } catch (e) {
      // setResult(e)
    }
}
</script>

<style>
.time-input {
  font-size: 1.4em; /* Larger text size */
  padding: 10px 20px; /* Larger padding for better touch interaction */
  border: 2px solid #ccc; 
  border-radius: 5px; /* Rounded corners for aesthetic */
  width: 100%; /* Full width of the column, adjust as needed */
  max-width: 200px; /* Maximum width, adjust based on your layout */
  box-sizing: border-box; /* Includes padding and border in the element's total width and height */
}
</style>
