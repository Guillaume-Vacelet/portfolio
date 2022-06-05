import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .mount("#app");
// createApp(App).use(store).use(router).mount("#app");
