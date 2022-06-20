import { createApp } from "vue";
import { createPinia } from "pinia";
import Router from "./route/index";
import App from "./App.vue";
import Vant from "vant";
import "@/assets/style/main.less";

const app = createApp(App);

app.use(Vant);

app.use(Router);

app.use(createPinia());

app.mount("#app");
