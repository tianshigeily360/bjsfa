import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import AddShop from "./views/AddShop.vue";
import Visit from "./views/training/Visit"; //(牛)
import Train from "./views/training/Train"; // (牛)
import Mycar from "./views/training/Mycar"; //购物车页面(牛)
import Visit2 from "./views/training/Visit2"; //进店拜访(牛)
import Store from "./views/training/Store"; //店内活动、下单页(牛)
import shopCarOrder from "./views/shopCar/shopCarOrder.vue";
import AddShop from "./views/addShop/AddShop.vue";
import commitOrder from "./views/shopCar/commitOrder.vue";
import ShopSignIn from "./views/orders/ShopSignIn.vue";

import Activity from "./views/shopCar/shop-activity";
import productOption from "./views/shopCar/productOption";
import shoppingtrolley from "./views/shopCar/shoppingTrolley";

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
      path: "/shoppingtrolley", //购物车路由
      name: "shoppingtrolley",
      component: shoppingtrolley
    },
    {
      path: "/addshop",
      name: "addshop",
      component: AddShop
    },
    {
      path: "/Visit",
      name: "Visit",
      component: Visit
    },
    {
      path: "/Visit2", // 进店拜访路由 (牛)
      name: "Visit2",
      component: Visit2
    },
    {
      path: "/Train", // 培训资料 路由(牛)
      name: "Train",
      component: Train
    },
    {
      path: "/Mycar", //购物车 路由(牛)
      name: "Mycar",
      component: Mycar
    },
    {
      path: "/Store/:id", //店内活动 路由(牛)
      name: "Store",
      component: Store
    },
    {
      path: "/activity", //店内活动路由（加 武）
      name: "activity",
      component: Activity
    },
    {
      path: "/shopcarorder", // 店铺下单路由
      name: "shopCarOrder",
      component: shopCarOrder
    },
    {
      path: "/commitorder", // 提交订单路由
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
