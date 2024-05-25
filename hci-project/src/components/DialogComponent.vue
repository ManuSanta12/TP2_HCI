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
            item-text="name"
            item-value="id"
            v-model="action.deviceId"
            outlined
            dense
          />
        </v-col>
        <v-col cols="5">
          <!-- <v-select
            :items="action.availableActions"
            v-model="action.type"
            label="Action Type"
            item-text="name"
            item-value="name"
            outlined
            dense
          /> -->
        </v-col>
          <!-- <v-col cols="4">
            <v-select :items="devices" label="Device" item-text="name" item-value="id" v-model="selectedDevice" outlined dense />
          </v-col> -->
          <!-- light -->
          <!-- <v-col v-if="selectedDevice.type.id == 'go46xmbqeomjrsjr'"> 
            <v-select :items="LightActions" v-model="actionType" label="Action Type" outlined dense></v-select>
          </v-col>
          <v-col v-if="action.option == 'Select Light Color'">
            <v-color-picker hide-canvas hide-inputs color-picker-controls-padding="0"></v-color-picker>
          </v-col>
          <v-col v-if="action.option === 'Select Light Brightness'">
            <v-list-item-title class="pa-0">Brightness</v-list-item-title>
            <v-slider dense :max="100" :min="0" thumb-label></v-slider>
          </v-col>
          <v-col cols="2" class="d-flex align-baseline justify-center"> 
           <v-btn icon="mdi-trash-can-outline" color="red lighten-1" @click="deleteAction(index)"></v-btn>
        </v-col> -->
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

  await deviceStore.getAll();

  const props = defineProps({
      visible: Boolean,
      // Define default automation object
      defaultAutomation: {
          type: Object,
          default: () => ({name: '', actions: [{ }], showInHome: false })
        },
    });

 

 
  const LightActions = ['Select Light color', 'Select Light Brightness']
  const actions = ['Select Ac mode', 'Select Ac Temperature',  'Select Speaker Volume', 'Select Sprinkler Pump'] ;
  const emit = defineEmits(['save', 'close']);
  
  // Use ref to store the current automation object
  const automation = ref(props.defaultAutomation);
  
  const handleSave = () => {
    const name = automation.value.name;
    const actions = automation.value.actions;
    emit('save',  new Automation(automation.value.id, name, actions));
  };
  
  const addAction = () => {
    console.log(selectedDevice.value);
    console.log(props.action);
  
    automation.value.actions.push(new Action(selectedDevice.value, props.action.type, params,meta));
  };

  const deleteAction = (index) => {
    automation.value.actions.splice(index, 1);
  };

  const deviceStore = useDeviceStoreApi();
  const devices = ref([])
    console.log('devices availables:', devices.value)
    console.log(devices.value[0].name)

    console.log('Devices:' + deviceStore.getAll());
    devices.value = deviceStore.getAll()

  // Computed property to format devices for v-select
  const selectableDevices = computed(() => {
    return devices.value.map(device => ({
      id: device.id,  // Assuming each device has an 'id' and 'name'
      name: device.name
    }));
  });
  // Data model for selected device
  
  const selectedDevice = ref(null);
  // Log the formatted devices for selection once they are computed and whenever they change

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
