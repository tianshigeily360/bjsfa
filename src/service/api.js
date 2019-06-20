import axios from "axios";

export default {
  getsth() {
    axios.get();
  },

  // #region店内活动
  // 下单页
  getOrderMenu() {
    return axios.get("/bj/orderMenu");
  },
  //店内活动接口
  getActivity() {
    return axios.get("/bj/activity");
  },
  //产品选择获取对应数据接口
  getOrderList(data) {
    return axios.get("/bj/orderList/" + data.id);
  }

  // #endregion
};
