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
                                    <v-btn density="compact" icon><v-icon>mdi-minus</v-icon></v-btn>
                                    <div class="d-flex align-center justify-center" style="width: 50px;">
                                        <v-list-item-title class="text-h7">25%</v-list-item-title>
                                    </div>
                                    <v-btn density="compact" icon><v-icon>mdi-plus</v-icon></v-btn>
                                </v-col>
                            </v-row>
                            <v-row class="align-center pa-0">
                                <v-col cols="auto" class="d-flex align-center">
                                    <v-list-item-title>Horizontal Blade</v-list-item-title> 
                                </v-col>
                                <v-col class="d-flex justify-end align-center pa-0">
                                    <v-btn density="compact" icon><v-icon>mdi-minus</v-icon></v-btn>
                                    <div class="d-flex align-center justify-center" style="width: 50px;">
                                        <v-list-item-title class="text-h7">45°</v-list-item-title> <!-- Use v-list-item-title here as well -->
                                    </div>
                                    <v-btn density="compact" icon><v-icon>mdi-plus</v-icon></v-btn>
                                </v-col>
                            </v-row>
                            <v-row class="align-center pa-0">
                                <v-col cols="auto" class="d-flex align-center">
                                    <v-list-item-title >Vertical Blade</v-list-item-title> 
                                </v-col>
                                <v-col class="d-flex justify-end align-center pa-0">
                                    <v-btn density="compact" icon><v-icon>mdi-minus</v-icon></v-btn>
                                    <div class="d-flex align-center justify-center" style="width: 50px;">
                                        <v-list-item-title class="text-h7">45°</v-list-item-title> <!-- Use v-list-item-title here as well -->
                                    </div>
                                    <v-btn density="compact" icon><v-icon>mdi-plus</v-icon></v-btn>
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
<!-- esto va al css -->
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
 
  