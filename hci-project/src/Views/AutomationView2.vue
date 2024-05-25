<template>
  <v-layout class="rounded rounded-md">
    <v-main color='#DDEAF4'>
      <v-row class="pa-6 scrollable">
        <!-- <div class="pa-6" v-for="auto in automations" :key="auto.id">
          <AutomationsCard 
          :automation="auto" 
          />
        </div> -->
      </v-row>
    </v-main>
    <v-dialog v-model="dialog" width="1300" scrollable>
      <template v-slot:activator="{ props: addNew }">
        <v-app-bar title="Automations"color="#E4DCD1">
          <v-btn rounded prepend-icon="mdi-plus" variant="tonal"  v-bind="addNew" @click="handleAddNew">Add new</v-btn>
        </v-app-bar>
      </template>
      <v-card >
      <v-card-title>
        Add Automation
      </v-card-title>
      <v-divider/>
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
                v-model="action.deviceId"
                outlined
                dense
                return-object
                @change="getDevices()"
              />
        </v-col>
        <v-col cols="5">
           <!-- <v-select
            :items="actionsId"
            v-model="action.type"
            label="Action Type"
            item-text="name"
            item-value="type"
            outlined
            dense
            return-object
            @change="getActionsFromId(action.deviceId)"
          />  -->
        </v-col>
        
        </v-row>
        <v-btn small class="ml-3" @click="addAction">Add Action</v-btn>
        <v-divider class="my-4" />
        <v-row > 
              <v-col cols="10" class="d-flex align-center"> 
                <v-list-item class="pa-0 text-subtitle-1">Show in home</v-list-item>
              </v-col>
              <v-col cols="2" class="d-flex justify-end align-center"> 
                <v-switch inset color="green" class="small-switch align-center" v-model="automation.showInHome"></v-switch>
              </v-col>
        </v-row>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="tonal" color="error" text @click="emit('close')">Cancel</v-btn>
        <v-btn variant="tonal" color="primary" text @click="saveAutomation">Save</v-btn>
      </v-card-actions>
    </v-card>
    </v-dialog>
  </v-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAutomationStoreApi } from '@/Stores/AutomationStoreApi';
import AutomationsCard from '@/components/AutomationsCard.vue';
import DialogComponent from '@/components/DialogComponent.vue';
import { DeviceApi } from '@/Api/DeviceApi';
import { useDeviceStoreApi } from '@/Stores/DeviceStoreApi';

const dialog = ref(false); 
const store = useAutomationStoreApi();
const automations = store.automations;
let devices
const deviceStore = useDeviceStoreApi();

const automation = ref({
    name: '',
    actions: [ {deviceId: '', actionName: '', params: []}],
    showInHome: false
 })

function saveAutomation() {
  const name = automation.value.name;
  const actions = automation.value.actions;
  const showInHome = automation.value.showInHome;
  // automations.add()
  dialog.value = false;
};
const addAction = () => {
    automation.value.actions.push(new Automation(automation.name, automation.actions, params,meta));
  };
  const deleteAction = (index) => {
    automation.value.actions.splice(index, 1);
  };

  function getDevices(){
    devices = deviceStore.devices;
    console.log('devices availables:', devices)
  }
  let actionsId 
  function getActionsFromId(id){
    console.log('ID', id)
    switch (id){
      case "go46xmbqeomjrsjr": 
        actionsId = ['Select Light color', 'Select Light Brightness'];
        break;
    }
    
  }
  function test() {
    const test = deviceStore.devices.map(device => ({
      id: device.id,
      name: device.name
    }));
    console.log('actions', automation.actions)
  }
  // Data model for selected device
  onMounted(() => {
    getDevices()
    test()
  })
  // onMounted(async () => {
  //   await deviceStore.getAll()
  // })

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
