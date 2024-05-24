 <template>
    <DeviceCard :device="device" @toggle="handleToggle">
     <template #details>
       <v-col class="d-flex justify-center pa-0">
             <v-card-actions>
                 <v-btn icon="mdi-skip-previous"@click="previous"></v-btn>
                 <v-btn icon="mdi-pause" v-if="!isPaused" @click="pause"></v-btn>
        <v-btn icon="mdi-play" v-else @click="play"></v-btn>
                 <v-btn icon="mdi-skip-next" @click="next"></v-btn>
             </v-card-actions>
         </v-col>
         <v-card-subtitle class="ma-2 d-flex justify-center">
            Now Playing: {{device["state"]["song"]["title"]}}
        </v-card-subtitle> 
     </template>
     <template #expansion-panel>
      <v-btn-toggle v-moddel="sel">
        <v-btn value="classical">classical</v-btn>
        <v-btn value="country">country</v-btn>
        <v-btn value="dance">dance</v-btn>
        <v-btn value="latina">latina</v-btn>
        <v-btn value="pop">pop</v-btn>
        <v-btn value="rock">rock</v-btn>
      </v-btn-toggle>  
      <!-- <v-select dense solo hide-details outlined compact density="comfortable" v-model="selectedGenre" @click="setGenre" :items="genres" label="Genre"
             ></v-select> -->
             <v-select dense solo hide-details outlined small density="comfortable"
             :items="['classical', 'country', 'dance', 'latina', 'pop', 'rock']"
             label="Song"
             ></v-select>
             <v-slider dense class="ma-2"></v-slider>
             <v-col class="d-flex justify-center pa-1"> </v-col>      
     </template>
 </DeviceCard>
 </template>

<script setup>
import { ref } from 'vue'
import DeviceCard from './DeviceCard.vue';
import { DeviceApi } from '@/Api/DeviceApi';

// Props
const props = defineProps({
  device: Object
});
const genres = ['classical', 'country', 'dance', 'latina', 'pop', 'rock']
const selectedGenre = ref('')
let isPaused = ref(false)

async function setGenre() {
  const genreSelected = selectedGenre.value
  console.log(selectedGenre.value)
  const currentGenre = props.device["state"]["genre"]
  let response = await DeviceApi.runAction(props.device["id"], "setGenre",  genreSelected)
  props.device["state"]["genre"] = response ? currentGenre : response
  handleError(response)
}

async function next(){
  const currentStatus = props.device["state"]["status"] 
  let response = await DeviceApi.runActionNoParams(props.device["id"], "nextSong")
  props.device["state"]["status"] = response ? currentStatus : response
  handleError(response)
}
async function previous(){
  const currentStatus = props.device["state"]["status"] 
  let response = await DeviceApi.runActionNoParams(props.device["id"], "previousSong")
  props.device["state"]["status"] = response ? currentStatus : response
  handleError(response)
}
async function pause(){
  const currentStatus = props.device["state"]["status"] 
  let response = await DeviceApi.runActionNoParams(props.device["id"], "pause")
  props.device["state"]["status"] = response ? currentStatus : response
  handleError(response)
}
async function play(){
  const currentStatus = props.device["state"]["status"] 
  let response = await DeviceApi.runActionNoParams(props.device["id"], "play")
  props.device["state"]["status"] = response ? currentStatus : response
  handleError(response)

}
function handleError(response){
  if(!response){
      console.log("NO SE PUDO ACTUALIZAR");
    }
}
</script>
