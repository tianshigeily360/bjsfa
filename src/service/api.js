import axios from "axios";

export default {
  // #region店内活动
  // 下单页
  // 下单页tab标签
  getOrderMenu() {
    return axios.get("/bj/orderMenu");
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
