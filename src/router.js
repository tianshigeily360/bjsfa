import Vue from "vue";
import Router from "vue-router";
import Login from "./views/login/Login";
import Home from "./views/login/Home.vue";
import Notice from "./views/login/Notice.vue";
// import Home from "./views/Home.vue";
// import AddShop from "./views/AddShop.vue";
import Visit from "./views/training/Visit"; //(牛)
import Train from "./views/training/Train"; // (牛)
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
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
    {
      path: "/", // 登录路由
      name: "login",
      component: Login
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
      path: "/home", //首页路由
      name: "home",
      component: Home
    },
    {
      path: "/notice", //公司通告路由
      name: "Notice",
      component: Notice
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
