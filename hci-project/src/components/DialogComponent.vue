<template>
    <v-card v-if="visible">
      <v-card-title>
        {{ automation && automation.id ? 'Edit Automation' : 'Add Automation' }}
      </v-card-title>
      <v-divider/>
      <v-card-text>
        <v-text-field label="Name" v-model="automation.name" outlined dense />
        <v-divider class="my-4" />
        <v-subheader>Starters</v-subheader>
        <v-row v-for="(starter, index) in automation.starters" :key="index">
          <v-col cols="7">
            <v-select :items="days" v-model="starter.day" label="Day" outlined dense />
          </v-col>
          <v-col cols="3" class="d-flex align-baseline justify-center">
              <input 
                  name="starter_time" 
                  type="time"
                  class="time-input"
                  placeholder="Start time"
                  v-model="starter.time"
              />
          </v-col>
          <v-col cols="2" class="d-flex align-baseline justify-center"> 
            <v-btn icon="mdi-trash-can-outline" color="red lighten-1" @click="deleteStarter(index)"></v-btn>
          </v-col>
        </v-row>
        <v-btn class="ml-3" small @click="addStarter">Add Starter</v-btn>
        <v-divider class="my-4" />
        <v-subheader>Actions</v-subheader>
        <v-row v-for="(action, index) in automation.actions" :key="index">
          <v-col cols="5">
            <v-select :items="selectableDevices" label="Device" item-text="name" item-value="id" v-model="selectedDevice" outlined dense />
          </v-col>
          <v-col cols="5">
            <v-select :items="actions" v-model="action.type" label="Action Type" outlined dense />
          </v-col>
          <v-col cols="2" class="d-flex align-baseline justify-center"> 
           <v-btn icon="mdi-trash-can-outline" color="red lighten-1" @click="deleteAction(index)"></v-btn>
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
        <v-btn color="red lighten-1" text @click="emit('close')">Cancel</v-btn>
        <v-btn color="green lighten-1" text @click="handleSave">Save</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script setup>
  import { useDeviceStore } from '@/Stores/DeviceStore';
  import { defineProps, defineEmits, ref, computed} from 'vue';
  
  const props = defineProps({
      visible: Boolean,
      // Define default automation object
      defaultAutomation: {
          type: Object,
          default: () => ({ id: '', name: '', starters: [], actions: [],  startersLength: 0, actionsLength: 0, showInHome: false })
        },
    });
    
  const days= ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Everyday'];

  const actions = ['Select Ac mode', 'Select Ac Temperature', 'Select Light color', 'Select Light Brightness', 'Select Speaker Volume', 'Select Sprinkler Pump'] ;

  const emit = defineEmits(['save', 'close']);
  
  // Use ref to store the current automation object
  const automation = ref(props.defaultAutomation);
  
  const handleSave = () => {
  emit('save',  {
    ...automation.value,
    startersLength: automation.value.starters.length,
    actionsLength: automation.value.actions.length
  });

};
  
  const addStarter = () => {
    automation.value.starters.push({ day: '', time: '' });
  };
  
  const addAction = () => {
    automation.value.actions.push({ type: '' });
  };
  const deleteStarter = (index) => {
    automation.value.starters.splice(index, 1);
  };
  const deleteAction = (index) => {
    automation.value.actions.splice(index, 1);
  };
  const deviceStore = useDeviceStore();
  const devices = deviceStore.devices;
  // Computed property to format devices for v-select
  const selectableDevices = computed(() => {
    return devices.map(device => ({
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
