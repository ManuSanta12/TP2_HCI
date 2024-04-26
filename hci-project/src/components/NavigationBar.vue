<template>
    <v-navigation-drawer app class="navigation-drawer-background" fixed :width=194>
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
    <v-container>
        <v-list-item>
            <v-list-item-title class="text-h6">Home</v-list-item-title>
            <v-list-item-subtitle>Add devices and automations to this screen by checking “show in home” in a device or automation</v-list-item-subtitle>
          </v-list-item>
          <v-divider></v-divider>
        </v-container>
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

  