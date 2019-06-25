<template>
  <div class="orderstatus">
    <TopHeader title="订单状态">
      <div slot="r"></div>
    </TopHeader>
    <p class="my-order">我的订单</p>
    <div class="main-status">
      <div class="nav-cell" v-for="item in orderstatus" :key="item.id">
        <ordercell
          :url="item.url"
          :img-url="item.imgUrl"
          :order-name="item.orderName"
        ></ordercell>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "../../components/TopHeader";
import OrderCell from "../../components/orders/OrderCell";
import api from "../../service/api";
export default {
  name: "orderstatus",
  data() {
    return {
      orderstatus: ""
    };
  },
  created() {
    api.getOrderStatus().then(res => {
      this.orderstatus = res.data;
    });
  },
  components: {
    TopHeader,
    ordercell: OrderCell
  }
};
</script>

<style lang="scss" scoped>
.my-order {
  font-size: px2rem(28);
  height: px2rem(84);
  line-height: px2rem(84);
  padding-left: px2rem(28);
  border-bottom: 1px solid #e2e2e2;
  background-color: #fafafa;
}
.main-status {
  box-sizing: border-box;
  padding: 0 px2rem(28);

  .nav-cell {
    width: px2rem(230);
    height: px2rem(308);
    border-bottom: px2rem(1) solid #ccc;
    border-right: px2rem(1) solid #ccc;
    float: left;
    // flex: 1 1 30%;
  }
  .nav-cell:nth-child(3n) {
    border-right: none;
  }
}
</style>
