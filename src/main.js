import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import Carousel3d from "vue-carousel-3d";
import "./global/variable.css";
import "aos/dist/aos.css";
import * as VueGoogleMaps from "vue2-google-maps";
// create filter
Vue.filter("uppercase", (v) => {
  return v.toUpperCase();
});
Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB9moLDCr0EMjrv9KW5xkULezgDupB8YZA",
    libraries: "places",
  },
});
Vue.use(Carousel3d);
new Vue({
  created() {
    Aos.init();
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
