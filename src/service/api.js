import axios from "axios";

export default {
  getsth() {
    axios.get();
  },

  // #region店内活动
  // 下单页
  // 下单页tab标签
  getOrderMenu() {
    return axios.get("/bj/orderMenu");
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
