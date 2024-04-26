<template>
    <v-row dense>
        <v-col cols="12" md="4">
            <v-card class="pa-3"> 
                <!-- margen de 12x se puede poner mas chico cambiar el 3 por 1 o 2 -->
                <v-row class="px-3">
                <v-col cols="10">
                    <v-card-title class="pa-0 text-h8">My Speaker</v-card-title>
                </v-col>
                <v-col cols="2" class="d-flex justify-end pa-0">
                    <v-switch
                        inset
                        color="green"
                        ></v-switch>
                </v-col>
                </v-row>
                <v-col class="d-flex justify-center ">
                    <v-card-actions>
                        <v-btn icon>
                        <v-icon>mdi-skip-previous</v-icon>
                        </v-btn>
                        <v-btn icon>
                        <v-icon>mdi-pause</v-icon>
                        </v-btn>
                        <v-btn icon>
                        <v-icon>mdi-skip-next</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-col>
            <v-card-subtitle class="d-flex justify-center">
                Now playing: La bestia Pop - Patricio Rey y sus... 
                <!-- aca deberia estar la info de la musica -->
            </v-card-subtitle>
            </v-card>
        </v-col>
    </v-row>
    
</template>

  
 
  