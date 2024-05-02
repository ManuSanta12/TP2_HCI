<!--TODO LO QUE DICE STYLE SACARLO DE TEMPLATE Y MANDARLO A STYLE-->

<template>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">
          <v-card>
            <v-card-title>Edit automation</v-card-title>
            <v-card-text>
            <div class="d-flex align-center">
                <span style="font-size:18px;">Title</span>
                <v-text-field placeholder="Title" variant="outlined" class="ml-10" ></v-text-field>
            </div>
            <div class="d-flex align-start mb-4">
                <span class="align-self-start" style="font-size:18px; margin-top: 16px;">Starters</span>
                <v-card class="ml-3" style="max-height: 150px;min-width: 300px; overflow-y: auto;">
                    <v-list :items="items"></v-list>
                </v-card>
            </div>
            <div class="d-flex align-start">
                <span class="align-self-start" style="font-size:18px; margin-top: 16px;">Actions</span>
                <v-card class="ml-3" style="max-height: 150px; min-width: 300px; overflow-y: auto;">
                    <v-list :items="items"></v-list>
                </v-card>
            </div>

            <div class="d-flex align-start">
                <span class="align-self-start" style="font-size:18px; margin-top: 16px;">Show in home</span>
                <v-switch inset color="green" class="small-switch ml-5"></v-switch>
            </div>
            </v-card-text>
            <v-card-actions >
                <v-btn variant="tonal" color="error" dark>Cancel</v-btn>
                <v-btn variant="tonal"color="primary" dark>Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  

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
