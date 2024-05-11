/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

import { createApp } from 'vue'


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        background: '#f0f4f8', // Here you can put your preferred background color
        primary: '#6839BB',
        secondary: '#AAA9AB',
        error: 'red'
      }
    }
  }
})
