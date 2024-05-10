<!-- 
water
water-off
water-pump
water-pump-off
water-circle 
-->

<template>
    <v-row dense>
        <v-col >
            <v-card class="pa-3" width="300" > 
                <!-- margen de 12x se puede poner mas chico cambiar el 3 por 1 o 2 -->
                <v-row class="px-3">
                    <v-col cols="10">
                        <v-card-title class="pa-0 text-h8">My Sprinkler</v-card-title>
                    </v-col>
                    <v-col cols="2" class="d-flex justify-end pa-0">
                        <v-switch inset color="green" class="small-switch"></v-switch>
                    </v-col>
                </v-row>
                <v-col class="d-flex justify-center pa-0">
                    <v-card-actions>
                        <v-btn icon="mdi-water"></v-btn>
                        <v-btn icon="mdi-water-off"></v-btn>
                    </v-card-actions>
                </v-col>
                <v-col class="d-flex justify-center pa-0"><q></q>
                    <v-icon>mdi-water-pump</v-icon>
                    <p>Current status: Pump on</p>
                </v-col>
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title>More</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-expansion-panel-content class="pa-1">
                                <div>  
                                    <v-list-item-title>Pump water</v-list-item-title> 
                                    <v-text-field class="my-0" label="Quantity in ml." :min=0 :max=100></v-text-field>
                                    <div class="my-0 button-container-row justify-center">
                                        <v-btn class="my-0">PUMP NOW</v-btn>
                                    </div> 
                                </div>
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


 
  