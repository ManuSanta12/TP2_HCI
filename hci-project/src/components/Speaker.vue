<template>
  <DeviceCard :device="device">
    <template #top-right-button>
      <v-col cols="2" class="d-flex justify-end pa-0">
        <v-btn v-if="showStopButton" icon="mdi-stop" @click="stop"></v-btn>
      </v-col>
    </template>
    <template #details>
      <v-col class="d-flex justify-center pa-0">
        <v-card-actions>
          <v-btn icon="mdi-skip-previous" @click="previous"></v-btn>
          <v-btn icon="mdi-play" v-if="isStoppedOrPaused" @click="play"></v-btn>
          <v-btn icon="mdi-pause" v-else @click="pause"></v-btn>
          <v-btn icon="mdi-skip-next" @click="next"></v-btn>
        </v-card-actions>
      </v-col>
      <v-card-subtitle class="ma-2 d-flex justify-center">
        {{ nowPlayingText }}
      </v-card-subtitle>
    </template>
    <template #expansion-panel>
      <v-btn-toggle v-model="selectedGenre" @click="setGenre">
        <v-btn value="classical">classical</v-btn>
        <v-btn value="country">country</v-btn>
        <v-btn value="dance">dance</v-btn>
        <v-btn value="latina">latina</v-btn>
        <v-btn value="pop">pop</v-btn>
        <v-btn value="rock">rock</v-btn>
      </v-btn-toggle>
      <v-select dense solo hide-details outlined compact density="comfortable"
        v-model="selectedGenre"
        :items="genres"
        label="Genre"
      ></v-select>
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
import { ref, computed, watch } from 'vue';
import DeviceCard from './DeviceCard.vue';
import { DeviceApi } from '@/Api/DeviceApi';

// Props
const props = defineProps({
  device: Object
});

const genres = ['classical', 'country', 'dance', 'latina', 'pop', 'rock'];
const selectedGenre = ref('');
let isPaused = ref(false);
const currentSong = ref(props.device["state"]?.["song"]?.["title"] || 'NOT PLAYING');

const showStopButton = computed(() => props.device.state.status !== 'stopped');
const isStoppedOrPaused = computed(() => props.device.state.status === 'stopped' || props.device.state.status === 'paused');

const nowPlayingText = computed(() => {
  if (props.device.state.status === 'stopped') {
    return 'NOT PLAYING';
  } else if (props.device.state.status === 'paused') {
    return `Paused: ${props.device.state.song?.title || ''}`;
  } else if (props.device.state.song && props.device.state.song.title) {
    return `Now Playing: ${props.device.state.song.title}`;
  }
  return 'NOT PLAYING';
});

async function setGenre() {
  const genreSelected = selectedGenre.value;
  console.log(selectedGenre.value);
  const currentGenre = props.device["state"]["genre"];
  let response = await DeviceApi.runAction(props.device["id"], "setGenre", genreSelected);
  props.device["state"]["genre"] = response ? genreSelected : currentGenre;
  handleError(response);
}

async function next(){
  const currentStatus = props.device["state"]["status"];
  let response = await DeviceApi.runActionNoParams(props.device["id"], "nextSong");
  props.device["state"]["status"] = response ? response : currentStatus;
  handleError(response);
}

async function previous(){
  const currentStatus = props.device["state"]["status"];
  let response = await DeviceApi.runActionNoParams(props.device["id"], "previousSong");
  props.device["state"]["status"] = response ? response : currentStatus;
  handleError(response);
}

async function pause(){
  const currentStatus = props.device["state"]["status"];
  try {
    let response = await DeviceApi.runActionNoParams(props.device["id"], "pause");
    if (response) {
      props.device["state"]["status"] = 'paused';
      isPaused.value = true;
    }
    handleError(response);
  } catch (error) {
    console.error("Error pausing the device", error);
  }
}

async function play(){
  const currentStatus = props.device["state"]["status"];
  try {
    let response = await DeviceApi.runActionNoParams(props.device["id"], "play");
    if (response) {
      props.device["state"]["status"] = 'playing';
      isPaused.value = false;
    }
    handleError(response);
  } catch (error) {
    console.error("Error playing the device", error);
  }
}

async function stop(){
  const currentStatus = props.device["state"]["status"];
  let response = await DeviceApi.runActionNoParams(props.device["id"], "stop");
  props.device["state"]["status"] = response ? 'stopped' : currentStatus;
  handleError(response);
}

function handleError(response){
  if(!response){
    console.log("NO SE PUDO ACTUALIZAR");
  }
}

// Watch for changes in the device state and update the isPaused value accordingly
watch(() => props.device.state.status, (newStatus) => {
  isPaused.value = newStatus === 'paused';
});

</script>
