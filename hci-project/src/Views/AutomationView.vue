<template>
  <v-layout class="rounded rounded-md">
    <v-main color='#DDEAF4'>
      <v-row class="pa-6 scrollable" >
        <AutomationsCard class="ma-2"/>
        <AutomationsCard class="ma-2"/>
        <AutomationsCard class="ma-2"/>
      </v-row>
    </v-main>
  </v-layout>
  <v-dialog v-model="dialog" max-width="1300" scrollable>
    <template v-slot:activator="{ props: addNew }">
      <v-app-bar title="Automations"  color='#DDEAF4'>
        <v-btn rounded prepend-icon="mdi-plus" variant="tonal"  v-bind ="addNew">Add new</v-btn>
      </v-app-bar>
    </template>
    <!-- <EditAutomationCard class="ma-2"/> -->
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-title>Edit automation</v-card-title>
        <v-text-field placeholder="Title" variant="outlined" class="px-3" ></v-text-field>
        <v-list-text class="mx-3">Starters</v-list-text>
        <v-container class="pa-0 px-3 scrollable-list-card">
          <!-- Display existing starters -->
              <div v-for="(starter, index) in starters" :key="index">
                <v-row>
                  <v-col >
                    <v-select v-model="starter.day" :items="days"  label="Day"></v-select>
                  </v-col>
                  <v-col >
                    <v-text-field  v-model="starter.time"  label="Time"  ></v-text-field>
                  </v-col>
                </v-row>
              </div>
            </v-container>
            <v-card-text class="py-2 px-3">
            <v-btn @click="addStarter" class="justify-center">Add Starter</v-btn>
          </v-card-text>
        <v-list-text class="mx-3">Actions</v-list-text>
        <v-container class="pa-0 px-3 scrollable-list-card  ">
          <div v-for="(action, index) in actions" :key="'action-' + index">
                <v-row >
                  <v-col>
                    <v-select v-model="action.option" :items="actionOptions" label="Option"></v-select>
                  </v-col>
                  <v-col v-if="action.option === 'Select Ac mode'">
                    <div class="button-container-row ">
                        <v-btn>Cool</v-btn>
                        <v-btn>Fan</v-btn>
                        <v-btn>Heat</v-btn>
                    </div>
                  </v-col>
                  <v-col v-if="action.option === 'Select Ac Temperature'">
                    <v-card-actions class="pa-0">
                        <v-btn density="compact" icon="mdi-minus"></v-btn>
                        <v-card-text class="text-h6">24°C</v-card-text>
                        <v-btn density="compact" icon="mdi-plus"></v-btn>
                    </v-card-actions>
                  </v-col>
                  <v-col v-if="action.option === 'Select Light color'">
                      <v-color-picker hide-canvas hide-inputs color-picker-controls-padding="0"></v-color-picker>
                  </v-col>
                  <v-col v-if="action.option === 'Select Light Brightness'">
                    <v-list-item-title class="pa-0">Brightness</v-list-item-title>
                    <v-slider dense :max="100" :min="0" thumb-label></v-slider>
                  </v-col>
                  <v-col v-if="action.option === 'Select Speaker Volume'">
                    <v-list-item-title class="pa-0">Volume</v-list-item-title>
                    <v-slider dense :max="100" :min="0" thumb-label></v-slider>
                  </v-col>
                  <v-col v-if="action.option === 'Select Sprinkler Pump'">
                    <v-text-field class="my-0" label="Quantity in ml."></v-text-field>
                  </v-col>
                </v-row>
              </div>
          </v-container>
          <v-card-text class="py-2 px-3">
            <v-btn @click="addAction">Add Action</v-btn>
          </v-card-text>
        <v-divider/>
        <v-card-actions>
              <v-btn prepend-icon="mdi-delete" variant="tonal" small color="error" dark @click="dialog = false">Delete</v-btn>
              <v-spacer></v-spacer> 
              <v-btn variant="tonal" color="secondary" dark @click="cancel">Cancel</v-btn>
              <v-btn variant="tonal" color="primary" dark @click="dialog = false">Save</v-btn>
          </v-card-actions>
      </v-card>
    </v-col>
    </v-row>
  </v-dialog>
</template>

<style>
.background{
    background-color: var(--v-background-base) !important;
}
.navigation-drawer-background{
    background-color:'#D8D7D7' !important;
}

.blurred{
    backdrop-filter: blur(5px);

}
.scrollable-list-card{
  max-height: 150px; min-height:75px; min-width: 300px; overflow-y: auto;
}
</style>

<script>
import AutomationsCard from '@/components/AutomationsCard.vue';
// import EditAutomationCard from '@/components/EditAutomationCard.vue';
export default {
  data() {
    return {
      dialog: false,
      starters: [
        // Initial starter
        { day: '', time: '' }
      ],
      actions: [
        { option: ''}
      ],
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Everyday'],
      actionOptions: ['Select Ac mode','Select Ac Temperature', 'Select Light color', 'Select Light Brightness', 'Select Speaker Volume', 'Select Sprinkler Pump'] 
    };
  },
  methods: {
    addStarter() {
      // Add a new starter with empty values
      this.starters.push({ day: '', time: '' });
    },
    addAction() {
      // Add a new action with default values
      this.actions.push({ option: ''});
    },
    cancel() {
      // Clear the starters array
      this.starters = [{ day: '', time: '' }];
      this.actions = [{option: ''}]
      // Close the dialog
      this.dialog = false;
    }
  }

  }
</script>