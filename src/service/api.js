import axios from "axios";

export default {
  // #region店内活动
  // 下单页
  getOrderMenu() {
    return axios.get("/bj/orderMenu");
  }
  // #endregion
};
