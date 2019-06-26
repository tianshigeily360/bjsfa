<template>
  <div class="order">
    <topheader title="下单">
      <div
        @click="goShopCar"
        slot="r"
        class="icon iconfont icon-tubiaolunkuo-"
      ></div>
    </topheader>
    <!-- 搜索区域 -->
    <div class="search clearfix">
      <div class="inputBox clearfix">
        <input v-model="searchValue" type="text" placeholder="点击进行搜索～" />
        <div @click="searchVal" class="icon iconfont icon-xiazai17"></div>
      </div>
      <div class="rwm">
        <div class="icon iconfont icon-im_erweimasaomiao"></div>
      </div>
    </div>
    <!-- tab 标签切换 -->
    <div class="tab">
      <ul>
        <li
          ref="focused"
          @click="openList(item.id)"
          class="tabItem"
          v-for="item in orderMenuArr"
          :key="item.id"
        >
          <a :class="{ active: item.id == index }" href="javascript:0">
            {{ item.menuName }}
          </a>
        </li>
      </ul>
    </div>
    <!-- 中间 count -->
    <div class="middle">
      <div class="count-box">
        <div class="count">
          {{ orderListArr.length }}/{{ orderListAllArr.length }}
        </div>
        <div class="category">洗护 / 食品 / 宝洁</div>
      </div>
      <div class="icon iconfont icon-shaixuan"></div>
    </div>
    <!-- 商品区域 -->
    <ul class="goods-list">
      <router-link
        v-for="item in orderListArr"
        :key="item.id"
        :to="'/productoption/' + item.id"
      >
        <li class="goods-item">
          <img :src="item.img" :alt="item.title" />
          <div class="goods-item-content">
            <h3>{{ item.title }}</h3>
            <div class="content-code">
              <span>编码: {{ item.serial }}</span>
              <span>规格: {{ item.number }}盒/箱</span>
            </div>
            <div class="content-price">
              <div class="price-num">
                价格:
                <span class="price-color">{{ item.monery }}</span>
              </div>
              <div class="reper-num">
                <span>库存: {{ item.repertory }}箱</span>
                <span class="icon iconfont icon-shuaxin"></span>
              </div>
            </div>
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import topheader from "../../components/TopHeader";
import api from "../../service/api";
export default {
  name: "order",
  data() {
    return {
      orderMenuArr: [],
      orderListAllArr: [],
      orderListArr: [],
      searchValue: "",
      index: 2
    };
  },
  methods: {
    searchVal() {
      api.getOrderListTitle({ title: this.searchValue }).then(res => {
        this.orderListArr = res.data;
      });
    },
    goShopCar() {
      this.$router.push("/shoppingtrolley");
    },
    openList(id) {
      if (id == 2) {
        api.getOrderListAll().then(res => {
          this.orderListArr = res.data;
        });
      } else {
        api.getOrderList({ menuId: id }).then(res => {
          this.orderListArr = res.data;
        });
      }
      this.index = id;
    }
    // isFocus() {
    //   this.orderMenuArr.forEach(item => {
    //     if (item.id == this.index) {
    //       this.$nextTick(() => {
    //         console.log(this.$refs.focused);
    //         // this.$refs.focused.focus();
    //       });
    //     }
    //   });
    // }
  },
  components: {
    topheader
  },
  created() {
    api.getOrderMenu().then(res => {
      this.orderMenuArr = res.data;
    });
    api.getOrderListAll().then(res => {
      this.orderListAllArr = res.data;
      this.$store.commit("initProdcutList", res.data);
    });
    this.openList(2);
  }
};
</script>

<style scoped lang="scss">
// 搜索
.search {
  height: px2rem(104);
  .inputBox {
    margin-left: px2rem(30);
    margin-top: px2rem(22);
    float: left;
    width: 80%;
    position: relative;
    border-right: 1px solid #808080;
    input {
      font-size: px2rem(24);
      border: none;
      margin-left: px2rem(35);
    }
    .icon {
      font-size: px2rem(30);
      position: absolute;
      font-weight: 700;
      left: 0;
      top: px2rem(5);
    }
  }
  .rwm {
    padding-top: px2rem(24);
    .icon {
      font-size: px2rem(60);
      text-align: center;
    }
  }
}
// tab页签
.tab {
  border-top: 1px solid #808080;
  border-bottom: 1px solid #808080;
  ul {
    height: px2rem(90);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tabItem {
      flex: 1;
      font-size: px2rem(28);
      height: px2rem(60);
      line-height: px2rem(60);
      text-align: center;
      border-right: 1px solid #808080;
      &:last-child {
        border-right: none;
      }
    }
  }
}

// 中间 count
.middle {
  position: relative;
  .count-box {
    display: flex;
    justify-content: space-between;
    font-size: px2rem(26);
    margin-right: px2rem(100);
    margin-left: px2rem(20);
    color: #8f8f8f;
    height: px2rem(88);
    line-height: px2rem(88);
    border-bottom: 1px solid #808080;
  }
  .icon {
    font-size: px2rem(36);
    margin-right: px2rem(28);
    font-weight: 700;
    position: absolute;
    right: 0;
    top: px2rem(28);
  }
}
// 商品区域
.goods-list {
  .goods-item {
    height: px2rem(166);
    // line-height: px2rem(166);
    margin-left: px2rem(28);
    padding-right: px2rem(28);
    border-bottom: 1px solid #808080;
    box-sizing: border-box;
    padding-top: px2rem(15);
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
}

.active {
  color: #04afe8;
}
</style>
