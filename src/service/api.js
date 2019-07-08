import axios from "axios";

export default {
  // # region店内活动
  getsth() {
    axios.get();
  },
  getOrderStatus() {
    //罗 获取订单状态
    return axios.get("/bj/orderIndex");
  },
  getShopName() {
    // 罗 点击查询获取超市
    return axios.get("bj/visitIn");
  },
  fuzzyquery(params) {
    return axios.get(`/bj/visitIn?name_like=${params.name}`);
  },
  //获取店内活动接口(罗)
  getActivity1(shopid) {
    return axios.get(`/bj/activity?shopId=${shopid}`);
  },
  // #region店内活动

  //进店拜访(牛)
  visitShop() {
    //进店拜访
    // console.log(1);
    return axios.get("/bj/visitIn");
  },
  // 查询超市(牛)
  visitShopSearch(params) {
    return axios.get(`bj/visitIn?name_like=${params.name}`);
  },
  // 培训资料(牛)
  trainmaterials() {
    return axios.get("/bj/trainingImg");
  },
  // 购物车(牛)
  myCar() {
    return axios.get("/bj/orderList");
  },
  // 店内活动页(牛)
  storeActivity(id) {
    return axios.get("bj/activity", { params: { shopId: id } });
  },

  // 复用 下单页(牛)搜索区域
  // 下单（商品列表）页(牛)
  // 复用接口: getOrderMenu  getOrderListAll
  //下单页头部菜单接口 (牛)

  //店内活动接口
  getActivity() {
    return axios.get("/bj/activity");
  },
  //产品选择获取对应数据接口
  getProOrderList(data) {
    return axios.get("/bj/orderList/" + data.id);
  },
  // 下单页商品内容
  getOrderListAll() {
    return axios.get("/bj/orderList");
  },
  // 下单页
  // 下单页tab标签
  getOrderMenu() {
    return axios.get("/bj/orderMenu");
  },
  // 下单页商品内容(过滤 menuId)
  getOrderList(params) {
    return axios.get(`/bj/orderList?menuId=${params.menuId}`);
  },
  // 下单页商品内容查询(过滤 title)
  getOrderListTitle(params) {
    return axios.get(`/bj/orderList?title_like=${params.title}`);
  }

  // #endregion
};
