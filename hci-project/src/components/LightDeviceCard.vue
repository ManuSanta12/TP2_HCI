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
                <v-card-text class="pa-0">Brightness</v-card-text>
                <v-slider dense :max="100" :min="0" thumb-label></v-slider>
                
            <v-expansion-panels>
                <v-expansion-panel>
                        <v-expansion-panel-title>More</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-expansion-panel-content>
                                <v-row>
                                <v-card-text>Color picker</v-card-text>
                                <v-color-picker width="250" hide-inputs></v-color-picker>
                                <v-col cols="4" class="d-flex justify-start">
                                    <v-btn icon="mdi-trash-can-outline"></v-btn>
                                </v-col>
                                <v-col cols="8" class="d-flex justify-end">
                                    <v-checkbox label="Show in home"></v-checkbox>
                                </v-col>
                            </v-row>
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