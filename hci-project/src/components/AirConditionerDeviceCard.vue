<template>
    <div>
      <h1>Air Conditioners</h1>
      <div v-for="ac in airConditioners" :key="ac.id">
        <p>{{ ac.id }} - {{ ac.status }} - {{ ac.temperature }}°C</p>
        <button @click="toggleAC(ac.id)">Toggle Power</button>
        <button @click="setTemperature(ac.id, ac.temperature + 1)">+1°C</button>
        <button @click="setTemperature(ac.id, ac.temperature - 1)">-1°C</button>
      </div>
    </div>
  </template>

  <script setup>
  import { useAirConditionerStore } from '@/Stores/AcStore';
  
  const { airConditioners, toggleAC, setTemperature } = useAirConditionerStore();
  </script>