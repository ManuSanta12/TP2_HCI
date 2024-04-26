<template>
      <v-navigation-drawer>
        <v-list>
            <v-list-item class="my-2">
            <v-list-item-content>
            <v-list-item-title class="text-h6">CoolHome</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
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
        { title: "Devices", icon: "mdi-monitor-cellphone-star" },
        { title: "Automations", icon: "mdi-creation"},
        { title: "Settings", icon: "mdi-cog-outline" }
      ]);
  
      return { items };
    },
  };
  </script>
  
<style>
.navigation-drawer-background{
    background-color:'#D8D7D7' !important;
}
</style>

  