 <template>
    <DeviceCard :device="device" @toggle="handleToggle">
     <template #details>
       <v-col class="d-flex justify-center pa-0">
             <v-card-actions>
                 <v-btn icon="mdi-skip-previous"></v-btn>
                 <v-btn icon="mdi-pause"></v-btn>
                 <v-btn icon="mdi-skip-next"></v-btn>
             </v-card-actions>
         </v-col>
         <v-card-subtitle class="ma-2 d-flex justify-center">
             Now playing: La bestia Pop - Patricio Rey y sus... 
            aca deberia estar la info de la musica 
        </v-card-subtitle> 
     </template>
     <template #expansion-panel>
        <v-select dense solo hide-details outlined compact :items="['Rock', 'Pop']" label="Genre"
             ></v-select>
             <v-select dense solo hide-details outlined small
             :items="['La Bestia Pop', 'De música Ligera', 'Rock para los dientes', 'Campanas en la noche', 'Me matan limón!']"
             label="Song"
             ></v-select>
             <v-slider dense hide-details class="ma-2"></v-slider>
             <v-col class="d-flex justify-center pa-1"> </v-col>      
     </template>
 </DeviceCard>
 </template>
 <script>
 import DeviceCard from './DeviceCard.vue';
 
 export default {
 components: {
     DeviceCard
 },
 props: {
     device: Object
 }
 }
 </script>