<template>
    <v-row dense>
        <v-col >
            <v-card class="pa-3" width="300"> 
                <!-- margen de 12x se puede poner mas chico cambiar el 3 por 1 o 2 -->
                <v-row class="px-3">
                    <v-col cols="10">
                        <v-card-title class="pa-0 text-h8">My Light</v-card-title>
                    </v-col>
                    <v-col cols="2" class="d-flex justify-end pa-0">
                        <v-switch inset color="green" class="small-switch"></v-switch>
                    </v-col>
                </v-row>
                <v-list-item-title class="pa-0">Brightness</v-list-item-title>
                <v-slider dense :max="100" :min="0" thumb-label></v-slider>
                
            <v-expansion-panels>
                <v-expansion-panel>
                        <v-expansion-panel-title>More</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-list-item-title class="pa-2">Color picker</v-list-item-title>
                                    <v-color-picker width="250" hide-inputs canvas-height="150"></v-color-picker>
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


<style>
.expansion-panel-margin {
    margin-bottom: 20px; /* You can adjust this value based on your needs */
}

</style>