import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import PrimeVue from "primevue/config";

axios.defaults.baseURL = "https://api.shafean.x-coders.net/api/admin";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;
axios.defaults.headers.common["accept"] = "application/json";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";

createApp(App)
  .use(store)
  .use(router)
  .use(PrimeVue)
  .use(VueAxios, axios)
  .mount("#app");
