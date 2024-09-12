import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import PrimeVue from "primevue/config";
import { createPinia } from "pinia";

const pinia = createPinia();

axios.defaults.baseURL = "http://192.168.1.10:8000/api/";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;
axios.defaults.headers.common["accept"] = "application/json";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";

createApp(App)
  .use(router)
  .use(pinia)
  .use(PrimeVue)
  .use(VueAxios, axios)
  .mount("#app");
