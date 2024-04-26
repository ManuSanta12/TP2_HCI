<template>
  <v-app>
    <v-main>
      <NavigationBar/>
      <v-container>
        <v-list-item >
            <v-list-item-title class="text-h6">Home</v-list-item-title>
            <v-list-item-subtitle>Add devices and automations to this screen by checking “show in home” in a device or automation</v-list-item-subtitle>
          </v-list-item>
          <v-divider></v-divider>
        </v-container>
        <DeviceCard />
        <AutomationsCard />
    </v-main>
  </v-app>
</template>

<script setup>
import AutomationsCard from './components/AutomationsCard.vue';
import DeviceCard from './components/DeviceCard.vue';
import NavigationBar from './components/NavigationBar.vue';
</script>
