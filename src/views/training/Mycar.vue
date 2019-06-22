<template>
  <!-- 超市名字 -->
  <div class="my-car">
    <top-head class="buy" title="保定惠友超市连锁">
      <div class="th-r" slot="r">
        编辑
      </div>
    </top-head>
    <div class="store-wrap">
      <!-- left -->
      <div class="store-l">
        <div class="double-big">
          <div class="double"></div>
        </div>
        <div class="store-name">新 乐 宝 洁 小 仓 库 孙 丽 娜</div>
      </div>
      <!-- right -->
      <div class="store-r">
        <div class="remarker">备注</div>
        <div class="icon iconfont icon-beizhu"></div>
      </div>
    </div>

    <!-- 商品展示部分 -->
    <div class="goods-show">
      <!-- 左边图片展示部分 -->
      <div class="goods-show-left">
        <div class="show-big">
          <div class="show-double"></div>
        </div>
        <div class="show-pic"></div>
      </div>
      <!-- 右边商品详情部分 -->
      <div class="goods-show-right">
        <div class="show-title">护舒宝轻柔纯棉超薄型超薄</div>
        <div class="show-para">选中仓库：{{ "7041 - 新宝孙俪那" }}</div>
        <!-- 价格部分 -->
        <div class="show-comput-wrap">
          <div class="show-price">
            价格: <span class="money">128000元</span>
          </div>
          <div class="show-comput">
            <div @click="handleClick('add')" class="comput-down">
              <span class="jian">-</span>
            </div>
            <div class="comput-num">{{ "198" }}</div>
            <div @click="handleClick('jian')" class="comput-add">
              <span class="jia">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHead from "../../components/TopHeader";
export default {
  name: "my-car",
  components: {
    "top-head": TopHead
  }
  // data() {
  //   return {};
  // }
  // methods: {
  //   handleClick(typeName) {
  //     if (typeName === "jia") {
  //     }
  //   }
  // }
};
</script>

<style scoped lang="scss">
@mixin swrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.store-wrap {
  // 上下左右等距 ,padding
  display: flex;
  padding: px2rem(30);
  background-color: #fafafa;
  border-bottom: px2rem(1) solid #e8e8e8;
  .store-l {
    display: flex;
    margin-right: auto;
    .double-big {
      position: relative;
      width: px2rem(30);
      height: px2rem(30);
      border-radius: 50%;
      border: px2rem(2) solid #757575;
      .double {
        position: absolute;
        left: 50%;
        top: 50%;
        // 运用定位拉回
        margin-left: px2rem(-10);
        margin-top: px2rem(-10);
        width: px2rem(20);
        height: px2rem(20);
        border-radius: 50%;
        background-color: #00a2eb;
      }
    }
    .store-name {
      margin-left: px2rem(20);
    }
  }
  // 拉开与左边盒子的距离
  // margin-left: auto;
  .store-r {
    @include swrap;
    padding-right: px2rem(30);
    color: #10903d;

    .icon {
      font-size: px2rem(30);
      margin-left: px2rem(20);
    }
  }
}
.goods-show {
  // @include swrap;
  display: flex;
  padding: px2rem(30);
  background-color: #fafafa;
  border-bottom: px2rem(1) solid #e8e8e8;
  // 左边图片展示部分
  .goods-show-left {
    display: flex;
    align-items: center;
    .show-big {
      position: relative;
      width: px2rem(30);
      height: px2rem(30);
      border-radius: 50%;
      border: px2rem(2) solid #757575;
      .show-double {
        position: absolute;
        left: 50%;
        top: 50%;
        // 运用定位拉回
        margin-left: px2rem(-10);
        margin-top: px2rem(-10);
        width: px2rem(20);
        height: px2rem(20);
        border-radius: 50%;
        background-color: #00a2eb;
      }
    }
    .show-pic {
      width: px2rem(125);
      height: px2rem(125);
      background-color: #a06;
      border: px2rem(1) solid #ccc;
      margin-left: px2rem(28);
    }
  }
  .goods-show-right {
    font-size: px2rem(23);
    margin-left: px2rem(28);
    .show-title {
      padding-bottom: px2rem(20);
    }
    .show-para {
      color: #757575;
      padding-bottom: px2rem(20);
    }
    .show-comput-wrap {
      display: flex;
      height: px2rem(48);
      line-height: px2rem(48);
      .show-price {
        .money {
          color: #ff0000;
        }
      }
      .show-comput {
        display: flex;
        align-items: center;
        width: px2rem(205);
        height: px2rem(47);
        line-height: px2rem(47);
        color: #757575;
        padding-left: px2rem(82);
        .comput-down {
          width: px2rem(46);
          height: px2rem(46);
          border: px2rem(1) solid #757575;
          text-align: center;
          margin-right: px2rem(16);
          .jian {
            font-size: px2rem(48);
            font-weight: 500;
          }
        }
        .comput-add {
          width: px2rem(46);
          height: px2rem(46);
          border: px2rem(1) solid #757575;
          text-align: center;
          margin-right: px2rem(16);
          .jia {
            font-size: px2rem(45);
            font-weight: 500;
          }
        }
        .comput-num {
          width: px2rem(88);
          height: px2rem(46);
          text-align: center;
          border: px2rem(1) solid #757575;
          border-radius: px2rem(4);
          margin-right: px2rem(16);
        }
      }
    }
  }
}
</style>
