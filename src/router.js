import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import AddShop from "./views/AddShop.vue";
import Visit from "./views/training/Visit"; //(牛)
import Train from "./views/training/Train"; // (牛)
import shopCarOrder from "./views/shopCar/shopCarOrder.vue";
import AddShop from "./views/addShop/AddShop.vue";
import ShopSignIn from "./views/orders/ShopSignIn.vue"; //(罗 商店签到)
import OrderStatus from "./views/orders/OrderStatus.vue"; //(罗 订单状态)
import SuccessOrder from "./views/orders/SuccessOrder.vue"; //(罗 成功订单页)
import SuccessOrderStatus from "./views/orders/SuccessOrderStatus.vue";
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
      path: "/ShopSignIn", //商店签到页路由(罗)
      name: "ShopSignIn",
      component: ShopSignIn
    },
    {
      path: "/OrderStatus", //订单状态页路由(罗)
      name: "OrderStatus",
      component: OrderStatus
    },
    {
      path: "/SuccessOrder", //成功订单页路由(罗)
      name: "SuccessOrder",
      component: SuccessOrder
    },
    {
      path: "/SuccessOrderStatus", //成功订单状态页路由(罗)
      name: "SuccessOrderStatus",
      component: SuccessOrderStatus
    },
    {
      path: "/productOption/:id",
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
