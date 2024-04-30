<template>
    <v-row dense>
        <v-col >
            <v-card class="pa-3" width="300"> 
                <!-- margen de 12x se puede poner mas chico cambiar el 3 por 1 o 2 -->
                <v-row class="px-3">
                    <v-col cols="10">
                        <v-card-title class="pa-0 text-h8">My Speaker</v-card-title>
                    </v-col>
                    <v-col cols="2" class="d-flex justify-end pa-0">
                        <v-switch inset color="green" class="small-switch"></v-switch>
                    </v-col>
                </v-row>
                <v-col class="d-flex justify-center">
                    <v-card-actions>
                        <v-btn icon><v-icon>mdi-skip-previous</v-icon></v-btn>
                        <v-btn icon><v-icon>mdi-pause</v-icon></v-btn>
                        <v-btn icon><v-icon>mdi-skip-next</v-icon></v-btn>
                    </v-card-actions>
                </v-col>
            <v-card-subtitle class=" ma-2 d-flex justify-center">
                Now playing: La bestia Pop - Patricio Rey y sus... 
                <!-- aca deberia estar la info de la musica -->
            </v-card-subtitle>
            <v-expansion-panels>
                <v-expansion-panel>
                        <v-expansion-panel-title>More</v-expansion-panel-title>
                        <v-expansion-panel-text>
                        <v-expansion-panel-content class="pa-0">
                            <v-card-text class="pa-1"> Playing from genre: Rock</v-card-text>
                            <v-card-text class="pa-1">Pick a song:
                                <v-select dense solo hide-details outlined small
                                :items="['La Bestia Pop', 'De música Ligera', 'Rock para los dientes', 'Campanas en la noche', 'Me matan limón!']"
                                label="Song"
                                ></v-select>
                            </v-card-text>
                            <v-slider dense hide-details></v-slider>
                            <v-row>
                                <v-col cols="6" class="d-flex justify-start">
                                    <v-btn icon><v-icon>mdi-trash-can-outline</v-icon></v-btn>
                                </v-col>
                                <v-col cols="6" class="d-flex justify-end">
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


 
  