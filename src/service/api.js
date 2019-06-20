import axios from "axios";

export default {
  getsth() {
    axios.get();
  },

  //店内活动接口
  getActivity() {
    return axios.get("/bj/activity");
  }
};
