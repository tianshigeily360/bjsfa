import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import AddShop from "./views/AddShop.vue";
import Visit from "./views/training/Visit"; //(牛)
import Train from "./views/training/Train"; // (牛)
import shopCarOrder from "./views/shopCar/shopCarOrder.vue";
import AddShop from "./views/addShop/AddShop.vue";
import ShopSignIn from "./views/orders/ShopSignIn.vue";

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
      path: "/ShopSignIn",
      name: "ShopSignIn",
      component: ShopSignIn
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
      path: "/Visit", // 进店拜访路由 (牛)
      name: "Visit",
      component: Visit
    },
    {
      path: "/Train", // 培训资料 (牛)
      name: "Train",
      component: Train
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
