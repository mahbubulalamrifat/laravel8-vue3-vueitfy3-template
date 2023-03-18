require('./bootstrap');


import { createApp } from 'vue'

const app = createApp({})

app.component('index', require('./components/index.vue').default)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})


app.use(vuetify).mount('#app');

// app.mount('#app')