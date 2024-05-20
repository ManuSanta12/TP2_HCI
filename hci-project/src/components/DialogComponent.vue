<template>
    <v-card v-if="visible">
      <v-card-title>
        {{ automation && automation.id ? 'Edit Automation' : 'Add Automation' }}
      </v-card-title>
      <v-card-text>
        <v-text-field label="Name" v-model="automation.name" outlined dense />
        <v-divider class="my-4" />
        <v-subheader>Starters</v-subheader>
        <v-row v-for="(starter, index) in automation.starters" :key="index">
          <v-col cols="8">
            <v-select :items="days" v-model="starter.day" label="Day" outlined dense />
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="starter.time" label="Time" outlined dense />
          </v-col>
        </v-row>
        <v-btn class="ml-3" small @click="addStarter">Add Starter</v-btn>
        <v-divider class="my-4" />
        <v-subheader>Actions</v-subheader>
        <v-row v-for="(action, index) in automation.actions" :key="index">
          <v-col cols="12">
            <v-select :items="actions" v-model="action.type" label="Action Type" outlined dense />
          </v-col>
        </v-row>
        <v-btn small  @click="addAction">Add Action</v-btn>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red lighten-1" text @click="emit('close')">Cancel</v-btn>
        <v-btn color="green lighten-1" text @click="handleSave">Save</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, ref } from 'vue';
  
  const props = defineProps({
      visible: Boolean,
      // Define default automation object
      defaultAutomation: {
          type: Object,
          default: () => ({ name: '', starters: [], actions: [] })
        },
    });
    
  const days= ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Everyday'];

  const actions = ['action 1', 'action2', 'action3'];

  const emit = defineEmits(['save', 'close']);
  
  // Use ref to store the current automation object
  const automation = ref(props.defaultAutomation);
  
  const handleSave = () => {
    emit('save', automation.value);
  };
  
  const addStarter = () => {
    automation.value.starters.push({ day: '', time: '' });
  };
  
  const addAction = () => {
    automation.value.actions.push({ type: '' });
  };
  </script>
  