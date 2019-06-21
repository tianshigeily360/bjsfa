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
        <li class="order-item">
          <img :src="orderData.img" :alt="orderData.title" />
          <div class="goods-item-content">
            <h3>{{ orderData.title }}</h3>
            <div class="content-code">
              <span>7041-新宝孙俪那</span>
            </div>
            <div class="content-price">
              <div class="price-num">
                价格:
                <span class="price-color">{{ orderData.monery }}</span>
              </div>
              <div class="reper-num">
                <span>数量: 198</span>
              </div>
            </div>
          </div>
        </li>
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
    return {
      orderData: []
    };
  },
  components: {
    topheader
  },
  created() {
    api.getProOrderList({ id: 1 }).then(res => {
      this.orderData = res.data;
    });
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
.orders {
  border-bottom: 1px solid #808080;
  .order-item {
    height: px2rem(180);
    // line-height: px2rem(166);
    margin-left: px2rem(28);
    padding-right: px2rem(28);
    border-bottom: 1px solid #808080;
    box-sizing: border-box;
    padding-top: px2rem(20);
    img {
      width: px2rem(124);
      height: px2rem(124);
      float: left;
    }
    .goods-item-content {
      margin-left: px2rem(152);
      h3 {
        font-size: px2rem(28);
      }
      .content-code {
        padding-top: px2rem(5);
        padding-bottom: px2rem(28);
        font-size: $text-size-small;
        color: $text-color;
        span {
          &:first-child {
            margin-right: px2rem(54);
          }
        }
      }
      .content-price {
        font-size: $text-size-small;
        color: $text-color;
        display: flex;
        justify-content: space-between;
        .price-num {
          .price-color {
            font-size: px2rem(30);
            color: #ff0000;
          }
        }
        .reper-num {
          .icon {
            font-size: px2rem(34);
            color: #000;
            font-weight: 700;
            margin-left: px2rem(26);
          }
        }
      }
    }
  }
  p {
    height: px2rem(80);
    line-height: px2rem(80);
    margin-left: px2rem(28);
  }
}
</style>
