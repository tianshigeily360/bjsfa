<template>
  <div class="shopcar">
    <topheader title="提交订单">
      <div slot="r"></div>
    </topheader>
    <!-- 收货 -->
    <div class="receive">
      <div class="receive-per">
        <span>收货人: 辛宏旭</span>
        <span>13165726312</span>
      </div>
      <div class="receive-address">
        <div class="icon iconfont icon-weizhi"></div>
        <p>
          斯达克警方很快结束分厘卡i的活佛按错了你的离开你擦暗杀看到拉升的拉伸
        </p>
      </div>
    </div>
    <!-- 提交的订单 -->
    <div class="orders">
      <ul>
        <li class="order-item"></li>
        <p>备注：请尽快发货，谢谢~</p>
      </ul>
    </div>
  </div>
</template>

<script>
import topheader from "../../components/TopHeader";
import api from "../../service/api";

export default {
  name: "shopcar",
  data() {
    return {};
  },
  components: {
    topheader
  }
};
</script>

<style scoped lang="scss">
.receive {
  height: px2rem(170);
  padding: px2rem(28);
  padding-bottom: 0;
  border-bottom: 1px solid #808080;
  .receive-per {
    font-size: $text-size-mid;
    display: flex;
    justify-content: space-between;
    padding-bottom: px2rem(28);
  }
  .receive-address {
    .icon {
      float: left;
      font-size: px2rem(40);
    }
    p {
      font-size: $text-size;
      line-height: px2rem(40);
      letter-spacing: px2rem(2);
      color: $text-color;
    }
  }
}
</style>
