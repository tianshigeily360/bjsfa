<template>
  <div class="place-order">
    <topHead class="h" title="下 单">
      <div
        @click="goProduct"
        class="icon iconfont icon-tubiaolunkuo-"
        slot="r"
      ></div>
    </topHead>
    <div class="search">
      <!-- 搜索区域 -->
      <div class="inputBox">
        <!-- 搜索出现对应的文字 -->
        <div @click="searchVal" class="icon iconfont icon-xiazai17"></div>
        <!-- 搜索出现对应的文字 -->
        <input
          v-model="searchValue"
          class="letter"
          placeholder="点击进行搜索～"
        />
        <!--二维码图标 -->
        <div class="er">
          <div class="icon iconfont icon-im_erweimasaomiao"></div>
        </div>
      </div>
    </div>
    <!-- 页签切换 -->
    <div class="list-nav">
      <ul class="list-top">
        <!-- 动态数据 -->
        <li
          @click="openList(item.id)"
          class="list"
          v-for="item in orderMenuArr"
          :key="item.id"
        >
          <a :class="{ active: item.id == index }" href="javascript:0">{{
            item.menuName
          }}</a>
        </li>
      </ul>
    </div>
    <!-- 生活区域 -->
    <div class="life-wrap">
      <div class="life-l">
        <div class="life-num">
          {{ orderListArr.length }}/{{ orderListAllarr.length }}
        </div>
        <div class="life-list">洗护/食品/宝洁</div>
      </div>
      <div class="icon iconfont icon-shaixuan"></div>
    </div>
    <!-- 巧克力商品列表 -->
    <ul class="choc-wrap">
      <router-link
        v-for="item in orderListArr"
        :key="item.id"
        :to="'/Product/' + item.id"
      >
        <li class="choc-list">
          <img :src="item.img" :alt="item.title" />
          <!-- <img :src="item.img" :alt="item.title" /> -->

          <div class="choc-top">
            <div class="choc-title">
              {{ item.title }}
            </div>
            <div class="choc-subtitle">
              <span>编码:{{ item.serial }}</span>

              <span>规格:{{ item.number }}盒/箱</span>
            </div>

            <div class="choc-foot">
              <div class="foot-price">
                价格: <span class="foot-num">{{ item.menery }}</span>
              </div>
              <div class="foot-respor">
                <span>库存: {{ item.repertory }}箱</span>
                <div class="icon iconfont icon-shuaxin"></div>
              </div>
            </div>
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import topHead from "../../components/TopHeader";
import api from "../../service/api";
export default {
  name: "place-order",
  data() {
    return {
      orderMenuArr: [], //存储tab 标题切换的数据
      orderListArr: [], //存储商品分类的数据
      orderListAllarr: [],
      index: 2,
      searchValue: ""
    };
  },
  methods: {
    // 搜索框显示对应的内容
    searchVal() {
      api.getOrderListTitle({ title: this.searchValue }).then(res => {
        this.orderListArr = res.data;
      });
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
    },
    // 购物车按钮的点击事件的方法,跳转到购物车页
    goProduct() {
      this.$router.push("/Mycar");
    }
  },
  created() {
    api.getOrderMenu().then(res => {
      this.orderMenuArr = res.data;
    });
    // 获取下单页商品内容
    api.getOrderListAll().then(res => {
      this.orderListAllarr = res.data;
      console.log(this.orderListAllarr.length);
      this.$store.commit("initProdcutList", res.data);
    });
    this.openList(2);
  },
  components: {
    topHead
  }
};
</script>

<style scoped lang="scss">
.search {
  border-bottom: px2rem(2) solid #ccc;
  .inputBox {
    padding: 0 px2rem(30);
    height: px2rem(104);
    display: flex;
    align-items: center;
    .icon {
      font-size: px2rem(30);
      font-weight: 600;
    }
    .letter {
      color: #989898;
      width: 100%;
      outline: none;
      font-size: px2rem(26);
      border: none;
      margin-left: px2rem(30);
      font-weight: 600;
    }
    .er {
      border-left: px2rem(1) solid #ccc;
      padding: 0 px2rem(30);
      .icon {
        font-size: px2rem(60);
      }
    }
  }
}
// 促销、全部。。。。
.list-nav {
  border-bottom: px2rem(2) solid #ccc;
  // padding: px2rem(30) px2rem(36);
  ul {
    display: flex;
    justify-content: space-around;
    font-size: px2rem(28);
    height: px2rem(90);
    align-items: center;
    .list {
      flex: 1;
      border-right: px2rem(1) solid #ccc;
      height: px2rem(60);
      line-height: px2rem(60);
      text-align: center;
      &:last-child {
        border-right: none;
      }
    }
  }
}
// 生活区头部
.life-wrap {
  display: flex;
  padding: px2rem(30) px2rem(28);
  height: px2rem(85);
  color: #989898;
  .life-l {
    border-bottom: 2px solid #ccc;
    line-height: px2rem(48);
    justify-content: space-between;
    display: flex;
    width: 100%;
  }
  .icon {
    font-size: px2rem(40);
    margin-left: px2rem(20);
  }
}
// 商品列表
.choc-wrap {
  padding: px2rem(20) px2rem(28);
  .choc-list {
    border-bottom: px2rem(2) solid #ccc;
    display: flex;
    // align-items: center;
    height: px2rem(166);
    img {
      background-color: #f02;
      width: px2rem(124);
      height: px2rem(124);
      margin-right: px2rem(28);
    }
    .choc-top {
      .choc-title {
        font-size: px2rem(28);
        margin-bottom: px2rem(12);
      }
      .choc-subtitle {
        font-size: px2rem(22);
        color: #989898;
        span {
          &:first-child {
            margin-right: px2rem(50);
          }
        }
      }
    }

    .choc-foot {
      display: flex;
      justify-content: space-between;
      font-size: px2rem(22);
      margin-top: px2rem(22);
      color: #989898;
      text-align: center;
      line-height: px2rem(36);

      .foot-price {
        span {
          color: #f02;
        }
      }
      .foot-respor {
        display: flex;
        align-items: center;
        .icon {
          color: #1b1c2a;
          font-size: px2rem(40);
          font-weight: 600;
          margin-left: px2rem(20);
        }
      }
    }
  }
}
.active {
  color: #04afe8;
}
</style>
