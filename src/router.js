import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import shopCarOrder from "./views/shopCar/shopCarOrder.vue";
import AddShop from "./views/addShop/AddShop.vue";
import commitOrder from "./views/shopCar/commitOrder.vue";

import Activity from "./views/shopCar/shop-activity";
import productOption from "./views/shopCar/productOption";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/productOption/:id", //产品选择路由
      name: "productOption",
      component: productOption
    },
    {
      path: "/addshop",
      name: "addshop",
      component: AddShop
    },
    {
      path: "/activity", //店内活动路由
      name: "activity",
      component: Activity
    },
    {
      path: "/shopcarorder",
      name: "shopCarOrder",
      component: shopCarOrder
    },
    {
      path: "/commitorder",
      name: "commitOrder",
      component: commitOrder
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
