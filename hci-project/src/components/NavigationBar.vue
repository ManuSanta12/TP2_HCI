<template>
      <v-navigation-drawer color='#D8D7D7' permanent width="194">
        <v-list>
            <v-list-item class="my-2">
            <v-list-item-content>
            <v-list-item-title class="text-h6">CoolHome</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
            <v-list-item-group>
            <router-link v-for="item in items" :key="item.title" link :prepend-icon="item.icon" :to="item.to">
              <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </router-link>
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
        { title: "Home", icon: "mdi-home", to:"/home"},
        { title: "Devices", icon: "mdi-monitor-cellphone-star", to:"/devices" },
        { title: "Automations", icon: "mdi-creation"},
        { title: "Settings", icon: "mdi-cog-outline" }
      ]);
  
      return { items };
    },
  };
  </script>
  
  <style>
  .background{
      background-color: var(--v-background-base) !important;
  }
  .navigation-drawer-background{
      background-color:'#D8D7D7' !important;
  }
  </style>

  