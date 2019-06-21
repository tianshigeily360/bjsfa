import axios from "axios";

export default {
  // # region店内活动
  // 下单页
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
  }
  // #endregion
};
