import { createApp } from "vue";
import { createPinia } from "pinia";
import Router from "./route/index";
import App from "./App.vue";
import { Button } from "vant";

createApp(App).use(Button).use(Router).use(createPinia()).mount("#app");
