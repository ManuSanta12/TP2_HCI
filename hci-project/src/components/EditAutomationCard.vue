<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card>
          <v-btn class= "mt-2 ml-2"density="compact" icon="mdi-close"/>
          <v-card-title>Edit automation</v-card-title>
          <v-card-text>
          <div class="d-flex align-center">
              <span class="text-subtitle-1">Title</span>
              <v-text-field placeholder="Title" variant="outlined" class="ml-10" ></v-text-field>
          </div>
          <div class="d-flex align-start mb-4">
              <span class="align-self-start text-subtitle-1 margin-top" >Starters</span>
              <v-card class="ml-3 scrollable-list-card" >
                  <v-list :items="items"></v-list>
              </v-card>
          </div>
          <div class="d-flex align-start">
              <span class="align-self-start text-subtitle-1 margin-top">Actions</span>
              <v-card class="ml-3 scrollable-list-card" >
                  <v-list :items="items"></v-list>
              </v-card>
          </div>

          <div class="d-flex align-start">
              <span class="align-self-start text-subtitle-1 margin-top mt-4" >Show in home</span>
              <v-switch inset color="green" class="small-switch ml-5"></v-switch>
          </div>
          </v-card-text>
          <v-card-actions>
            <v-btn prepend-icon="mdi-delete" variant="tonal" small color="error" dark @click="dialog = false">Delete </v-btn>
            <v-spacer></v-spacer> 
            <v-btn variant="tonal" color="secondary" dark @click="dialog = false">Cancel</v-btn>
            <v-btn variant="tonal" color="primary" dark @click="dialog = false">Save</v-btn>
        </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>  
.top-margin{
  margin-top: 16px;
}

.scrollable-list-card{
  max-height: 150px; min-height:75px; min-width: 300px; overflow-y: auto;
}
</style>


<script>
export default {
data: () => ({
  
  items: [
    {
      title: 'Sundays 21:00',
      value: 1,
    },
    {
      title: 'Everyday 18:00',
      value: 2,
    },
    {
      title: 'Fridays 21:00',
      value: 3,
    },
    {
      title: 'Sundays 21:00',
      value: 4,
    },
    {
      title: 'Everyday 18:00',
      value: 5,
    },
    {
      title: 'Fridays 21:00',
      value: 6,
    },
  ],
}),
}
</script>