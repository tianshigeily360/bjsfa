<template>
  <div class="s-orderstatus">
    <successorderstatus title="成功订单状态"></successorderstatus>
    <div class="main">
      <p class="market">乌鲁木齐大西桥超市</p>
      <div class="sku">
        <p class="s">SKU</p>
        <p class="num">数量</p>
        <p class="price">价格</p>
      </div>
      <div class="sku font">
        <span class="s">护舒宝轻柔纯棉超薄型超薄特惠装 152片</span>
        <span class="num">12</span>
        <span class="price">1920.00</span>
      </div>
      <div class="zenpin">
        <p>是否有赠品</p>
        <mt-switch v-model="value"></mt-switch>
      </div>
    </div>
    <div class="beizhu">备注:</div>
    <textarea placeholder="点击填写备注"></textarea>
  </div>
</template>

<script>
import SuccessOrderStatus from "../../components/TopHeader";
export default {
  name: "s-orderstatus",
  data() {
    return {};
  },
  components: {
    successorderstatus: SuccessOrderStatus
  }
};
</script>

<style lang="scss" scoped>
.main {
  .market {
    padding-left: px2rem(32);
    font-size: px2rem(28);
    color: #000;
    height: px2rem(84);
    line-height: px2rem(84);
    background-color: #fafafa;
    border-bottom: px2rem(1) solid #f0f0f0;
  }
  .sku {
    display: flex;
    height: px2rem(66);
    text-align: center;
    line-height: px2rem(66);
    .s {
      flex: 0 0 px2rem(466);
    }
    .num {
      flex: 0 0 px2rem(132);
    }
    .price {
      flex: 0 0 px2rem(152);
    }
    border-bottom: px2rem(1) solid #f0f0f0;
  }
  .font {
    font-size: px2rem(22);
  }
  .zenpin {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 px2rem(25);
    height: px2rem(84);
    font-size: px2rem(24);
    // font-weight: 600;
    border-bottom: px2rem(1) solid #f0f0f0;
  }
}
.beizhu {
  font-size: px2rem(24);
  height: px2rem(66);
  line-height: px2rem(66);
  background-color: #fafafa;
  padding-left: px2rem(28);
}
</style>
