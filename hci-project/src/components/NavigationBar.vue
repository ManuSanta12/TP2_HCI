<template>
    <v-navigation-drawer app fixed :width=194>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">CoolHome</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item-group>
          <v-list-item v-for="item in items" :key="item.title" link :prepend-icon="item.icon">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>      
    </v-navigation-drawer>  
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Sidebar',
    setup() {
      const items = ref([
        { title: "Home", icon: "mdi-home"},
        { title: "Devices", icon: "mdi-run" },
        { title: "Automations", icon: "mdi-book"},
        { title: "Settings", icon: "mdi-heart" }
      ]);
  
      return { items };
    },
  };
  </script>
  