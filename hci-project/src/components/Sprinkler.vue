<script>
export default {
  props: {
    initialData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      device_name: this.initialData.device_name || "NO DATA",
      toggle_status: this.initialData.toggle_status || false,
      pump_status: this.initialData.pump_status || "NO DATA"
    };
  }
};
</script>


<template>
    <v-row dense>
        <v-col>
            <v-card class="pa-3" width="300"> 
                <v-row class="px-3">
                    <v-col cols="10">
                        <v-card-title class="pa-0 text-h8">{{ device_name }}</v-card-title>
                    </v-col>
                    <v-col cols="2" class="d-flex justify-end pa-0">
                        <v-switch inset :model-value="toggle_status" color="green" class="small-switch"></v-switch>
                    </v-col>
                </v-row>
                <v-col class="d-flex justify-center pa-0">
                    <v-card-actions>
                        <v-btn icon="mdi-water"></v-btn>
                        <v-btn icon="mdi-water-off"></v-btn>
                    </v-card-actions>
                </v-col>
                <v-col class="d-flex justify-center pa-0">
                    <v-icon>mdi-water-pump</v-icon>
                    <p>Current status: {{ pump_status }}</p>
                </v-col>
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title>More</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-expansion-panel-content class="pa-1">
                                <div>  
                                    <v-list-item-title>Pump water</v-list-item-title> 
                                    <v-text-field class="my-0" label="Quantity in ml."></v-text-field>
                                    <div class="my-0 button-container-row justify-center">
                                        <v-btn class="my-0">PUMP NOW</v-btn>
                                    </div> 
                                </div>
                                <v-col class="d-flex justify-center pa-1">
                                    <v-checkbox density="compact" label="Show in home"></v-checkbox>
                                </v-col>
                                <v-btn block prepend-icon="mdi-trash-can-outline">Delete</v-btn>
                            </v-expansion-panel-content>
                        </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            </v-card>
        </v-col>
    </v-row>
</template>


 
  