import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import primeComponents from "./plugins/primeComponents";
import PrimeVue from "primevue/config";
import { pinia } from "./plugins/pinia";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons
import "/node_modules/primeflex/primeflex.css"; //primeflex CSS

const app = createApp(App);

primeComponents.install(app);

app.use(pinia);
app.use(router);
app.use(PrimeVue);
app.mount("#app");
