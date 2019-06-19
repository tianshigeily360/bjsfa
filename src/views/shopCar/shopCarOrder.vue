<template>
  <div class="order">
    <topheader title="下单">
      <div slot="r" class="icon iconfont icon-tubiaolunkuo-"></div>
    </topheader>
    <!-- 搜索区域 -->
    <div class="search clearfix">
      <div class="inputBox clearfix">
        <input type="text" placeholder="点击进行搜索~" />
        <div class="icon iconfont icon-xiazai17"></div>
      </div>
      <div class="rwm">
        <div class="icon iconfont icon-im_erweimasaomiao"></div>
      </div>
    </div>
    <!-- tab 标签切换 -->
    <div class="tab">
      <div class="tabItem">促销</div>
      <div class="tabItem">促销</div>
      <div class="tabItem">促销</div>
      <div class="tabItem">促销</div>
      <div class="tabItem">促销</div>
    </div>
  </div>
</template>

<script>
import topheader from "../../components/TopHeader";

export default {
  name: "order",
  data() {
    return {};
  },
  components: {
    topheader
  }
};
</script>

<style scoped lang="scss">
.search {
  height: px2rem(104);
  .inputBox {
    margin-left: px2rem(30);
    margin-top: px2rem(42);
    float: left;
    width: 80%;
    position: relative;
    input,
    .icon {
      font-size: px2rem(24);
    }
    input {
      border: none;
      margin-left: px2rem(28);
    }
    .icon {
      position: absolute;
      font-weight: 700;
      left: 0;
      top: px2rem(23);
    }
  }
  .rwm {
    padding-top: px2rem(44);
    .icon {
      font-size: px2rem(60);
      text-align: center;
    }
  }
}
.tab {
  height: px2rem(90);
  // box-sizing: border-box;
  // padding-top: px2rem(30);
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tabItem {
      font-size: px2rem(28);
      text-align: center;
    }
  }
}
</style>
