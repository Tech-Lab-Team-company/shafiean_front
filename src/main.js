// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import { library } from '@fortawesome/fontawesome-svg-core'

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { all } from '@awesome.me/kit-KIT_CODE/icons'

// library.add(...all)
// import 'bootstrap/dist/css/bootstrap.css';
// import "bootstrap";
// createApp(App).use(router).mount('#app').component('font-awesome-icon', FontAwesomeIcon)



import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { all } from '@awesome.me/kit-KIT_CODE/icons';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


// Add all icons to the library
// library.add(...all);

// Create the Vue app
const app = createApp(App);

// Register the FontAwesomeIcon component globally
// app.component('font-awesome-icon', FontAwesomeIcon);

// Use router and mount the app
app.use(router).use(PrimeVue).mount('#app');