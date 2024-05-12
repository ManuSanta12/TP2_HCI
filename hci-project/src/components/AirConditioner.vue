<template>
<DeviceCard :device="device" @toggle="handleToggle">
    <template #details>
        <v-col class="d-flex justify-center pa-0">
            <v-card-actions class="pa-0">
                <v-btn density="compact" icon="mdi-minus" @click="decrementTemp"></v-btn>
                <v-card-text class="text-h6">{{Temp}}°C</v-card-text>
                <v-btn density="compact" icon="mdi-plus" @click="incrementTemp"></v-btn>
            </v-card-actions>
        </v-col>
    </template>
    <template #expansion-panel>
        <div class="button-container-row ">
            <v-btn>Cool</v-btn>
            <v-btn>Fan</v-btn>
            <v-btn>Heat</v-btn>
        </div>
    <v-row class="align-center pa-0">
        <v-col cols="auto" class="d-flex align-center">
            <v-list-item-title>Velocity</v-list-item-title> 
        </v-col>
        <v-col class="d-flex justify-end align-center pa-0">
            <v-btn density="compact" icon="mdi-minus" @click="decrementVel"></v-btn>
            <div class="d-flex align-center justify-center" style="width: 50px;">
                <v-list-item-title class="text-h7">{{Vel}}%</v-list-item-title>
            </div>
            <v-btn density="compact" icon="mdi-plus" @click="incrementVel"></v-btn>
        </v-col>
    </v-row>
    <v-row class="align-center pa-0">
        <v-col cols="auto" class="d-flex align-center">
            <v-list-item-title>Horizontal Blade</v-list-item-title> 
        </v-col>
        <v-col class="d-flex justify-end align-center pa-0">
            <v-btn density="compact" icon="mdi-minus" @click="decrementHBlade"></v-btn>
            <div class="d-flex align-center justify-center" style="width: 50px;">
                <v-list-item-title class="text-h7">{{ displayHBlade }}</v-list-item-title> 
            </div>
            <v-btn density="compact" icon="mdi-plus" @click="incrementHBlade"></v-btn>
        </v-col>
    </v-row>
    <v-row class="align-center pa-0">
        <v-col cols="auto" class="d-flex align-center">
            <v-list-item-title >Vertical Blade</v-list-item-title> 
        </v-col>
        <v-col class="d-flex justify-end align-center pa-0">
            <v-btn density="compact" icon="mdi-minus" @click="decrementVBlade"></v-btn>
            <div class="d-flex align-center justify-center" style="width: 50px;">
                <v-list-item-title class="text-h7">{{ displayVBlade }}</v-list-item-title> 
            </div>
            <v-btn density="compact" icon="mdi-plus" @click="incrementVBlade"></v-btn>
        </v-col>
    </v-row>
    </template>
</DeviceCard>
</template>

<script>
import DeviceCard from './DeviceCard.vue';
import { ref, computed } from 'vue';

export default {
  components: {
    DeviceCard
  },
  props: {
    device: Object
  },
  setup() {
    // Handle toggle states and logging
    const handleToggle = (isOn) => {
      console.log(`Light is now ${isOn ? 'on' : 'off'}.`);
    };

    const deleteDevice = (id) => {
      console.log(`Deleting device with id: ${id}`);
    };

    // VBlades setup
    const validVBlades = [1, 22, 45, 67, 90];
    const VBlade = ref(45);

    const incrementVBlade = () => {
      const currentIndex = validVBlades.indexOf(VBlade.value);
      if (currentIndex < validVBlades.length - 1) {
        VBlade.value = validVBlades[currentIndex + 1];
      }
    };

    const decrementVBlade = () => {
      const currentIndex = validVBlades.indexOf(VBlade.value);
      if (currentIndex > 0) {
        VBlade.value = validVBlades[currentIndex - 1];
      }
    };

    const displayVBlade = computed(() => {
      return VBlade.value === 1 ? 'auto' : `${VBlade.value}°`;
    });

    // HBlades setup
    const validHBlades = [1, -90, -45, 0, 45, 90];
    const HBlade = ref(0);

    const incrementHBlade = () => {
      const currentIndex = validHBlades.indexOf(HBlade.value);
      if (currentIndex < validHBlades.length - 1) {
        HBlade.value = validHBlades[currentIndex + 1];
      }
    };

    const decrementHBlade = () => {
      const currentIndex = validHBlades.indexOf(HBlade.value);
      if (currentIndex > 0) {
        HBlade.value = validHBlades[currentIndex - 1];
      }
    };

    const displayHBlade = computed(() => {
      return HBlade.value === 1 ? 'auto' : `${HBlade.value}°`;
    });

    // Velocity setup
    const validVelocity = [25, 50, 75, 100];
    const Vel = ref(25);

    const incrementVel = () => {
      const currentIndex = validVelocity.indexOf(Vel.value);
      if (currentIndex < validVelocity.length - 1) {
        Vel.value = validVelocity[currentIndex + 1];
      }
    };

    const decrementVel = () => {
      const currentIndex = validVelocity.indexOf(Vel.value);
      if (currentIndex > 0) {
        Vel.value = validVelocity[currentIndex - 1];
      }
    };

    // Temperature setup
    const minTemp = 18;
    const maxTemp = 38;
    const Temp = ref(18);

    const incrementTemp = () => {
      if (Temp.value < maxTemp) {
        Temp.value++;
      }
    };

    const decrementTemp = () => {
      if (Temp.value > minTemp) {
        Temp.value--;
      }
    };

    return {
      handleToggle,
      deleteDevice,
      incrementVBlade,
      decrementVBlade,
      displayVBlade,
      incrementHBlade,
      decrementHBlade,
      displayHBlade,
      incrementVel,
      decrementVel,
      incrementTemp,
      decrementTemp,
      Temp, 
    };
  }
}
</script>

<style>
.button-container-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    margin-top: 10px;
  }

</style>
 
  
