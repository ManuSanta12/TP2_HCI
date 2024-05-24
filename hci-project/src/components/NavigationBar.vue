<!-- 
  VERSION ANTERIOR DE LA NAVBAR: El uso de href:"item.to" hace que se recargue la 
  pagina cada vez que se cambia de view, re-instanciando el store y perdiendo los datos!!
-->
<!-- <template>
  <v-navigation-drawer color="#D8D7D7" permanent width="194">
    <v-list>
      <v-list-item class="my-2">
        <v-list-item-content>
          <v-list-item-title class="text-h6">CoolHome</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item-group>
        <v-list-item v-for="item in items" :key="item.title" :prepend-icon="item.icon" :href="item.to" class="drawer-item">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>      
  </v-navigation-drawer>
</template> -->
<!-- color="#51564E" -->
<!--#1B1617  -->
<template>
  <v-navigation-drawer color="#37120A" permanent width="194">
    <v-list>
      <v-list-item class="my-2">
        <v-list-item-content>
          <v-list-item-title class="text-h6">CoolHome</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-for="item in items" :key="item.title" class="drawer-item">
        
        <router-link :to="item.to" class="d-flex align-center" style="text-decoration: none; color: inherit; width: 100%;"> 
            <v-list-item-icon class="mr-4" style="opacity: 0.75;">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </router-link>
      </v-list-item>
    </v-list>      
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  { title: "Home", icon: "mdi-home", to: "/home" },
  { title: "Devices", icon: "mdi-monitor-cellphone-star", to: "/devices" },
  { title: "Automations", icon: "mdi-creation", to: "/automations" }
]);
</script>

  