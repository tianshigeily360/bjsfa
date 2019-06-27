import axios from "axios";

export default {
  // # region店内活动
  getsth() {
    axios.get();
  },
  // 登录
  postUserLogin(data) {
    return axios.post("/api/userlogin", data);
  },
  //首页饼图接口
  getUserProgress() {
    return axios.get("/bj/echartData");
  },
  // 公司公告
  getNotices() {
    return axios.get("/bj/announce");
  },
  // 公告信息
  getMessage() {
    return axios.get("/bj/message");
  },
  // // 九宫格
  // getUserMenuCell() {
  //   return axios.get("/bj/menuList");
  // },
  // #region店内活动
  // 下单页
  // 下单页tab标签
  getOrderMenu() {
    return axios.get("/bj/orderMenu");
  },
  visitShop() {
    //进店拜访
    return axios.get("bj/visitIn");
  },
  // 查询超市
  visitShopSearch(params) {
    return axios.get(`bj/visitIn?name_like=${params.name}`);
  },
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
