import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./lib/hotcss/hotcss.js";
import VeeValidate, { Field } from "vee-validate";
import helper from "./lib/helper";
// import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import MintUI from "mint-ui";
import "./static/css/mint-ui.scss";

Vue.use(MintUI);

Vue.config.productionTip = false;

Vue.use(VeeValidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
