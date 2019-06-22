import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: [],
    //所有店铺
    VisitList: [],
    //产品选择购物车跳转
    shopCarData: [],
    //点击店铺数据
    getShopData: ""
  },
  mutations: {
    initProdcutList(state, payload) {
      state.productList = payload;
    },
    //初始化所有店铺数据
    initVisitList(state, payload) {
      state.VisitList = payload;
    },
    //产品选择购物车跳转初始化
    initshopCarData(state, payload) {
      state.shopCarData.push(payload);
    },
    //点击店铺数据
    initgetShopData(state, payload) {
      state.getShopData = payload;
    }
  },
  actions: {}
});
