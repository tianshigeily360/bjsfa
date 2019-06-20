import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: []
  },
  mutations: {
    initProdcutList(state, payload) {
      state.productList = payload;
    }
  },
  actions: {}
});
