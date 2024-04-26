<template>
  <v-row dense>
    <v-col cols="12" md="4">
      <v-card class="pa-2">
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
      this.iconColor = this.icon == 'mdi-pause' ? 'green' : 'red';
    },
  },
};
</script>
