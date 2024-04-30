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
                        <v-btn density="compact" icon="mdi-minus"></v-btn>
                        <v-card-text class="text-h6">24°C</v-card-text>
                        <v-btn density="compact" icon="mdi-plus"></v-btn>
                    </v-card-actions>
                </v-col>
            <v-expansion-panels>
                <v-expansion-panel class="pa-1">
                        <v-expansion-panel-title>More</v-expansion-panel-title>
                        <v-expansion-panel-text>
                        <v-expansion-panel-content>
                            <v-card-text>Mode</v-card-text>
                            <!-- ver si es solo ventilacion frio y calor -->
                            <div class="button-container-row mx-3">
                                <v-btn>Cool</v-btn>
                                <v-btn>Fan</v-btn>
                                <v-btn>Heat</v-btn>
                            </div>
                            <v-col class="d-flex justify-left align-center pa-0">
                                <v-card-text >Velocity</v-card-text>
                                <v-col class="d-flex justify-right align-center">
                                    <v-btn density="compact" icon="mdi-minus"></v-btn>
                                    <div class="d-flex align-center justify-center" style="width: 50px;"> <!-- Adjust width as needed -->
                                    <v-card-text class="text-h6">25</v-card-text>
                                    </div>
                                    <v-btn density="compact" icon="mdi-plus"></v-btn>
                                </v-col>
                            </v-col>
                            <v-col class="d-flex justify-left align-center pa-0">
                                <v-card-text >Horizontal Blade</v-card-text>
                                <v-col class="d-flex justify-right align-center">
                                    <v-btn density="compact" icon="mdi-minus"></v-btn>
                                    <div class="d-flex align-center justify-center" style="width: 50px;"> <!-- Adjust width as needed -->
                                    <v-card-text class="text-h6">25</v-card-text>
                                    </div>
                                    <v-btn density="compact" icon="mdi-plus"></v-btn>
                                </v-col>
                            </v-col>
                            <v-col class="d-flex justify-left align-center pa-0">
                                <v-card-text >Vertical Blade</v-card-text>
                                <v-col class="d-flex justify-right align-center">
                                    <v-btn density="compact" icon="mdi-minus"></v-btn>
                                    <div class="d-flex align-center justify-center" style="width: 50px;"> <!-- Adjust width as needed -->
                                    <v-card-text class="text-h6">25</v-card-text>
                                    </div>
                                    <v-btn density="compact" icon="mdi-plus"></v-btn>
                                </v-col>
                            </v-col>
                            <v-row class="align-center">
                                <v-col cols="4" class="d-flex justify-start  ">
                                    <v-btn variant="text" icon="mdi-trash-can-outline"></v-btn>
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
.button-container-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
</style>
 
  