import { createApp } from "vue";
import router from "./router";
import store from "./store/index";
import App from "./App.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("baseCard", BaseCard);
app.component("baseButton", BaseButton);
app.component("baseBadge", BaseBadge);

app.mount("#app");
