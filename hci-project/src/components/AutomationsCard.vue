<template>
  <v-row dense>
    <v-col >
      <v-card class="pa-2" width="300">
        <v-row class="px-3 pt-3">
          <v-col cols="10">
            <v-card-title class="pa-0 text-h8">Close Curtains</v-card-title>
          </v-col>
          <v-col cols="2" class="d-flex justify-end pa-0">
            <v-btn icon :color="iconColor" @click="togglePlay">
              <v-icon>{{ icon }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-card-subtitle class="px-3">Not Scheduled</v-card-subtitle>
        <v-card-text class="px-3 pb-3">Includes x actions</v-card-text>

        <v-expansion-panels>
                <v-expansion-panel>
                        <v-expansion-panel-title>More</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-expansion-panel-content>

                                <v-col class="d-flex justify-center pa-1">
                                <v-checkbox density="compact" label="Show in home"></v-checkbox>
                                </v-col>
                                <v-btn block >Edit Automation</v-btn>

                                <v-btn class="mt-3"block prepend-icon="mdi-trash-can-outline">Delete</v-btn>
                        </v-expansion-panel-content>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      icon: 'mdi-pause',
      iconColor: 'red',
    };
  },
  methods: {
    togglePlay() {
      this.icon = this.icon === 'mdi-pause' ? 'mdi-play' : 'mdi-pause';
      this.iconColor = this.icon == 'mdi-pause' ? 'red' : 'green';
    },
  },
};
</script>
