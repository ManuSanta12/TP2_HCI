<template>
    <v-row dense>
        <v-col >
            <v-card class="pa-3" width="300"> 
                <!-- margen de 12x se puede poner mas chico cambiar el 3 por 1 o 2 -->
                <v-row class="px-3">
                    <v-col cols="10">
                        <v-card-title class="pa-0 text-h8">My Air Conditioner</v-card-title>
                    </v-col>
                    <v-col cols="2" class="d-flex justify-end pa-0">
                        <v-switch inset color="green" class="small-switch"></v-switch>
                    </v-col>
                </v-row>
                <v-col class="d-flex justify-center pa-0">
                    <v-card-actions class="pa-0">
                        <v-btn density="compact" icon="mdi-minus" @click="decrementTemp"></v-btn>
                        <v-card-text class="text-h6">{{Temp}}°C</v-card-text>
                        <v-btn density="compact" icon="mdi-plus" @click="incrementTemp"></v-btn>
                    </v-card-actions>
                </v-col>
            <v-expansion-panels>
                <v-expansion-panel class="pa-0">
                        <v-expansion-panel-title>More</v-expansion-panel-title>
                        <v-expansion-panel-text>
                        <v-expansion-panel-content>
                            <div>
                                <v-list-text>Mode</v-list-text>
                                <!-- ver si es solo ventilacion frio y calor -->
                                <div class="button-container-row ">
                                    <v-btn>Cool</v-btn>
                                    <v-btn>Fan</v-btn>
                                    <v-btn>Heat</v-btn>
                                </div>
                            </div>
                            <v-row class="align-center pa-0">
                                <v-col cols="auto" class="d-flex align-center">
                                    <v-list-item-title>Velocity</v-list-item-title> 
                                </v-col>
                                <v-col class="d-flex justify-end align-center pa-0">
                                    <v-btn density="compact" icon="mdi-minus" @click="decrementVel"></v-btn>
                                    <div class="d-flex align-center justify-center" style="width: 50px;">
                                        <v-list-item-title class="text-h7">{{ Vel }}%</v-list-item-title>
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
                            <v-col class="d-flex justify-center pa-1">
                                <v-checkbox density="compact" label="Show in home"></v-checkbox>
                            </v-col>
                            <v-btn block prepend-icon="mdi-trash-can-outline">Delete</v-btn>
                        </v-expansion-panel-content>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            </v-card>
        </v-col>
    </v-row>
</template>
<script setup>
import { ref, computed } from 'vue'
// VBlades
const validVBlades = ['auto', 22,45,67,90 ]
const VBlade = ref(45)

function incrementVBlade() {
  const currentIndex = validVBlades.indexOf(VBlade.value)
  if (currentIndex < validVBlades.length - 1) {
    VBlade.value = validVBlades[currentIndex + 1]
  }
}

function decrementVBlade() {
  const currentIndex = validVBlades.indexOf(VBlade.value)
  if (currentIndex > 0) {
    VBlade.value = validVBlades[currentIndex - 1]
  }
}

const displayVBlade = computed(() => {
  return VBlade.value === 'auto' ? 'auto' : `${VBlade.value}°`
})
// HBlades
const validHBlades = [ 'auto', -90, -45, 0, 45, 90]
const HBlade = ref(0)

function incrementHBlade() {
  const currentIndex = validHBlades.indexOf(HBlade.value)
  if (currentIndex < validHBlades.length - 1) {
    HBlade.value = validHBlades[currentIndex + 1]
  }
}

function decrementHBlade() {
  const currentIndex = validHBlades.indexOf(HBlade.value)
  if (currentIndex > 0) {
    HBlade.value = validHBlades[currentIndex - 1]
  }
}

const displayHBlade = computed(() => {
  return HBlade.value === 'auto' ? 'auto' : `${HBlade.value}°`
})
// velocity
const validVelocity = [25, 50, 75, 100]
const Vel = ref(25)
function incrementVel() {
  const currentIndex = validVelocity.indexOf(Vel.value)
  if (currentIndex < validVelocity.length - 1) {
    Vel.value = validVelocity[currentIndex + 1]
  } else {
    Vel.value = validVelocity[0]
  }
}

function decrementVel() {
  const currentIndex = validVelocity.indexOf(Vel.value)
  if (currentIndex > 0) {
    Vel.value = validVelocity[currentIndex - 1]
  } else {
    Vel.value = validVelocity[validVelocity.length - 1]
  }
}
// temperature
const minTemp = 18
const maxTemp = 38
const Temp = ref(18)

function incrementTemp() {
  if (Temp.value < maxTemp) {
    Temp.value++
  }
}

function decrementTemp() {
  if (Temp.value > minTemp) {
    Temp.value--
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
.button-alignment{
    display: flex;
    padding: 0;
}
.list-item-font {
    font-weight: medium;
    
}
</style>
 
  