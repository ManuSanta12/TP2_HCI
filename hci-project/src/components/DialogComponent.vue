<template>
    <v-card v-if="visible" width="1300">
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
        <v-btn variant="tonal" color="primary" text @click="handleSave">Save</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script setup>
  import { Automation, Action } from '@/Api/AutomationsApi';
  import { useDeviceStoreApi } from '@/Stores/DeviceStoreApi';
  import { defineProps, defineEmits, ref, computed, onMounted} from 'vue';
  import { DeviceApi } from '@/Api/DeviceApi';
  import { de } from 'vuetify/locale';
  let devices;
  const props = defineProps({
      visible: Boolean,
      // Define default automation object
      automation: {
          type: Object,
          default: () => ({name: '', actions: [{  }], showInHome: false })
        },
    });
 const automation = ref({
    name: '',
    actions: [ {deviceId: '', actionName: '', params: []}],
    showInHome: false
 })
    
  const actions = ['Select Ac mode', 'Select Ac Temperature',  'Select Speaker Volume', 'Select Sprinkler Pump'] ;
  const emit = defineEmits(['save', 'close']);
  
  // Use ref to store the current automation object
  const automation = ref(props.defaultAutomation);
 
  const handleSave = () => {
    const name = automation.value.name;
    const actions = automation.value.actions;
  };
  
  const addAction = () => {
    // console.log(selectedDevice.value);
    // console.log(props.action);
  
    automation.value.actions.push(new Automation(automation.name, automation.actions, params,meta));
  };

  const deleteAction = (index) => {
    automation.value.actions.splice(index, 1);
  };
  const deviceStore = useDeviceStoreApi()

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
    // actionsId = deviceStore.devices.map(device => ({

    // }))
    
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
  const selectedDevice = ref(null);
  // Log the formatted devices for selection once they are computed and whenever they change

</script>

