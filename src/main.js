import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuex from "vuex";
import axios from "axios";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import store from "./store/modules/store.js";

Vue.config.productionTip = false;
Vue.use(Buefy);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  axios,
  Vuex,
  render: h => h(App)
});
