<template>
  <div class="orderstatus">
    <TopHeader title="订单状态">
      <div slot="r"></div>
    </TopHeader>
    <p class="my-order">我的订单</p>
    <div class="status-wrap" v-for:></div>
  </div>
</template>

<script>
import TopHeader from "../../components/TopHeader";
export default {
  name: "orderstatus",
  data() {
    return {};
  },
  components: {
    TopHeader
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
</style>
