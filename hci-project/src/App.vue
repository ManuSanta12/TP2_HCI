<template>
  <v-app>
    <v-main>
      <v-navigation-drawer app fixed :width=194>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">CoolHome</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <divider></divider>
          <v-list-item-group>
            <v-list-item v-for="item in items" :key="item.title" link :prepend-icon="item.icon">
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>      
      </v-navigation-drawer>  
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
import { ref } from 'vue';
const items = ref([
  { title: "Home", icon: "mdi-home"},
  { title: "Devices", icon: "mdi-run" },
  { title: "Automations", icon: "mdi-book"},
  { title: "Settings", icon: "mdi-heart" }
]);
</script>

