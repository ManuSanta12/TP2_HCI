<template>
  <DeviceCard :device="device">
    <template #top-right-button>
      <v-col cols="2" class="d-flex justify-end pa-0">
        <v-btn class="my-2" v-if="!isStopped" icon="mdi-stop" @click="stop"></v-btn>
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
      <v-card-subtitle class="ma-2 d-flex justify-center scrolling-text-container">
      <div class="scrolling-text">
        <span>&nbsp;&nbsp;&nbsp;{{ nowPlayingText }}&nbsp;&nbsp;&nbsp;</span>
      </div>
      </v-card-subtitle>
      <v-slider 
        dense class="ma-2"
        prepend-icon="mdi-volume-high"
        min="0"
        max="10"
        v-model="selectedVolume"
        @click="setVolume"
      ></v-slider>
    </template>
    <template #expansion-panel>
      <v-select dense solo hide-details outlined compact density="comfortable"
        v-model="selectedGenre"
        :items="genres"
        label="Pick Genre"
        @change="setGenre"
      ></v-select>
      <div class="my-0 button-container-row justify-center">
        <v-btn class="my-0" @click="setGenre">Set Genre</v-btn>
      </div class="my-0 button-container-row justify-center">
      <v-select dense solo hide-details outlined small density="comfortable"
        :items="songsList"
        label="List Songs"
        @click="getPlaylist"
      ></v-select>
      <v-col class="d-flex justify-center pa-1"> </v-col>
    </template>
  </DeviceCard>
</template>

<script setup>
import { ref, computed } from 'vue';
import DeviceCard from './DeviceCard.vue';
import { useDeviceStoreApi } from '@/Stores/DeviceStoreApi';
import { useErrorStore } from '@/Stores/ErrorStore';

// Props
const props = defineProps({
  device: Object
});

const deviceStore = useDeviceStoreApi();
const errorStore = useErrorStore();
const genres = ['classical', 'country', 'dance', 'latina', 'pop', 'rock'];
const selectedGenre = ref('pop');
const isStoppedOrPaused = computed(() => props.device["state"]["status"] === 'stopped' || props.device["state"]["status"] === 'paused');
const isStopped = computed(() => props.device["state"]["status"] === 'stopped');
const songsList = ref(["No songs available"]);
const selectedVolume = ref(props.device["state"]["volume"]);

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

async function setVolume(){
  try {
    let response = await deviceStore.runAction(props.device["id"], "setVolume", selectedVolume.value);
  } catch (error) {
    errorStore.showError("Couldn't modify the speaker's volume", "Please try again");
  }
}

async function play(){
  try {
    await deviceStore.runActionNoParams(props.device["id"], "play");
    await deviceStore.runActionNoParams(props.device["id"], "resume");
  } catch (error) {
    errorStore.showError("Couldn't resume playback", "Please try again");
  }
}

async function pause(){
  try {
    let response = await deviceStore.runActionNoParams(props.device["id"], "pause");
  } catch (error) {
    errorStore.showError("Couldn't pause playback", "Please try again");
  }
}

async function stop(){
  try{
    let response = await deviceStore.runActionNoParams(props.device["id"], "stop");
  } catch(error){
    errorStore.showError("Couldn't stop the device", "Please try again");
  }
}

async function next(){
  try{
    let response = await deviceStore.runActionNoParams(props.device["id"], "nextSong");
  } catch(error){
    errorStore.showError("Couldn't play the next song", "Please try again");
  }
}

async function previous(){
  try{
    let response = await deviceStore.runActionNoParams(props.device["id"], "previousSong");
  } catch(error){
    errorStore.showError("Couldn't play the next song", "Please try again");
  }
}

async function setGenre() {
  try {
    let response = await deviceStore.runAction(props.device["id"], "setGenre", selectedGenre.value);
  } catch(error){
    errorStore.showError("Couldn't set the genre", "Please try again");
  }
}

async function getPlaylist() {
  try {
    const result = await deviceStore.runActionNoParams(props.device.id, "getPlaylist");
    songsList.value = result.map(song => `${song.title} - ${song.duration}`);
  } catch (error) {
    errorStore.showError("Couldn't fetch songs", "Please try again");
  }
}
  
</script>

<style scoped>
.scrolling-text-container {
  /* overflow: hidden; */
  position: relative;
  width: 100%;
  white-space: nowrap;
}

.scrolling-text {
  display: inline-block;
  animation: scrolling-text 10s linear infinite;
}

@keyframes scrolling-text {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-25%);
  }
}
</style>

