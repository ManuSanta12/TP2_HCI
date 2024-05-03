<template>\
    <v-app>
      <NavigationBar/>
      <v-app-bar title="Home"  color='#DDEAF4'/>
      <v-main color='#DDEAF4'>
        <RouterView/>
      </v-main>
    </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
</script>


