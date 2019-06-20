<template>
  <div class="shop-visit">
    <topHead class="h" title="进店拜访">
      <div class="r" slot="r"></div>
    </topHead>
    <!-- 计划标题部分 -->
    <div class="plan-wrap">
      <p class="plan-in">计划内</p>
      <p class="plan-out">计划外</p>
    </div>
    <div class="search">
      <div class="icon iconfont icon-xiazai17"></div>
      <input class=" letter" placeholder="点击进行搜索～" />
    </div>
    <!-- 超市部分  需要提供后台数据部分 -->
    <div class="store-wrap">
      <div class="store-l">
        <div class="store-h">文悦超市</div>
        <div class="store-m">
          <span>ID:231093</span>
          <span>创建时间:2016.11.21</span>
          <p>赵老板</p>
        </div>
      </div>
      <div class="store-r">
        <!-- 1 地址图标 -->
        <div class="dis">
          <div class="icon iconfont"></div>
          <span class="mi"><</span>
        </div>
        <!-- 2 右箭头 -->
        <div class="you"></div>
        <!-- 3 电话图标 -->
        <div class="phon">
          <span>13555457451</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/TopHeader";
export default {
  name: "shop-visit",

  data() {
    return {};
  },
  // created(){
  // },
  components: {
    topHead
  }
};
</script>

<style lang="scss" scoped>
.plan-wrap {
  display: flex;
  border-bottom: px2rem(2) solid #ccc;
  line-height: px2rem(104+3);
  text-align: center;
  font-weight: 600;
  font-size: px2rem(30);
}
.plan-in {
  width: px2rem(377);
  border-right: px2rem(2) solid #ccc;
  &:hover {
    border-bottom: px2rem(5) solid $act-color;
    background-color: #fff;
  }
}
.plan-out {
  width: px2rem(375);
  &:hover {
    border-bottom: px2rem(5) solid $act-color;
    background-color: #fff;
  }
}
.search {
  // height: px2rem(106);
  line-height: px2rem(106);
  padding-left: px2rem(26);
  display: flex;
  background-color: #fafafa;
  .icon {
    font-size: px2rem(28);
    font-weight: 700;
  }
}

.letter {
  color: #ccc;
  margin-left: px2rem(30);
  font-size: $text-size-mid;
  border: none;
  background-color: #fafafa;
  width: 100%;
  height: px2rem(106);
}
</style>
