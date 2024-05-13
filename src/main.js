import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components/UI";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

const app = createApp(App);

Array.prototype.forEach.call(components, component => {
    app.component(component.name, component);
});

app.use(bootstrap).use(store).use(router).mount("#app");
