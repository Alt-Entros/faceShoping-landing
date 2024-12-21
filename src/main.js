import "./assets/main.css";

import { createApp } from "vue";
import { createYmaps } from "vue-yandex-maps";
import App from "./App.vue";
const API_KEY = import.meta.env.VITE_API_YANDEX_MAP;

const app = createApp(App);
app.use(
  createYmaps({
    apikey: API_KEY,
  })
);

app.mount("#app");
