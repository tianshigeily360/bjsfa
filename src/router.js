import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import shopCarOrder from "./views/shopCar/shopCarOrder.vue";
import AddShop from "./views/addShop/AddShop.vue";
import shopCar from "./views/shopCar/shopCar.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/addshop",
      name: "addshop",
      component: AddShop
    },
    {
      path: "/shopcarorder",
      name: "shopCarOrder",
      component: shopCarOrder
    },
    {
      path: "/shopCar",
      name: "shopCar",
      component: shopCar
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
