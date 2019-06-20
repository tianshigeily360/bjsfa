<template>
  <div class="product">
    <div class="product-top">
      <topHeard title="产品选择">
        <div class="r" slot="r"></div>
      </topHeard>
    </div>
    <div class="menu-top">
      <div class="menuLeft">
        <img src alt>
      </div>
      <div class="menuRight">
        <p class="first">时间发货给</p>
        <span class="three">编码: 892723</span>
        <span>规格: 12盒/箱</span>
        <p class="second">
          价格:
          <span>78.00</span>
        </p>
      </div>
    </div>

    <div class="menu-cen">
      <div class="menuCen">
        <p>仓库</p>
        <p>
          乌鲁木齐仓库
          <img src="../../assets/activityImg/小于号.png" alt>
        </p>
      </div>
      <div class="menuCen">
        <p>库存</p>
        <p>2345</p>
      </div>
      <div class="menuCen">
        <p>数量</p>
        <p>
          <i class="icon iconfont icon-jian"></i>
          <i class="icon iconfont icon-jia"></i>
          <i></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import topHeard from "../../components/TopHeader";
export default {
  name: "product",
  data() {},
  components: {
    topHeard
  }
};
</script>

<style lang="scss" scoped>
.product {
  .menu-top {
    height: px2rem(182);
    border-bottom: 1px solid #d3caca;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    padding: 0 px2rem(28) 0 px2rem(28);
    .menuLeft {
      width: px2rem(124);
      height: px2rem(124);
      border: 1px solid #d3caca;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .menuRight {
      padding-left: px2rem(30);
      .first {
        color: #000;
        font-size: px2rem(24);
      }
      span {
        font-size: px2rem(20);
        color: #757575;
      }
      .second {
        font-size: px2rem(20);
        color: #757575;
        margin-top: px2rem(34);
        span {
          color: red;
          font-size: px2rem(24);
        }
      }
      .three {
        display: inline-block;
        margin-right: px2rem(52);
      }
    }
  }
  .menu-cen {
    .menuCen {
      height: px2rem(112);
      border-bottom: 1px solid #d3caca;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 px2rem(28) 0 px2rem(28);
      .iconfont{
          font-size: px2rem(46);
      }
    }
  }
}
</style>
