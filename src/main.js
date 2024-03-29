import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { mdi, aliases } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

import "./assets/main.css";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    sets: { mdi },
    aliases,
    defaultSet: "mdi",
  },
});

const app = createApp(App);

app.use(vuetify);
app.use(router);

app.mount("#app");
