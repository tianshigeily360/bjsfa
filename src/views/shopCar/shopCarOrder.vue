<template>
  <div class="order">
    <topheader title="下单">
      <div slot="r" class="icon iconfont icon-tubiaolunkuo-"></div>
    </topheader>
    <!-- 搜索区域 -->
    <div class="search clearfix">
      <div class="inputBox clearfix">
        <input type="text" placeholder="点击进行搜索～" />
        <div class="icon iconfont icon-xiazai17"></div>
      </div>
      <div class="rwm">
        <div class="icon iconfont icon-im_erweimasaomiao"></div>
      </div>
    </div>
    <!-- tab 标签切换 -->
    <div class="tab">
      <ul>
        <li class="tabItem" v-for="item in orderMenuList" :key="item.id">
          <a href="javascript:0">{{ item.menuName }}</a>
        </li>
      </ul>
    </div>
    <!-- 中间 count -->
    <div class="middle">
      <div class="count">1670/3590</div>
      <div class="category">洗护 / 食品 / 宝洁</div>
      <div class="icon iconfont icon-shaixuan"></div>
    </div>
  </div>
</template>

<script>
import topheader from "../../components/TopHeader";
import api from "../../service/api";

export default {
  name: "order",
  data() {
    return {
      orderMenuList: []
    };
  },
  components: {
    topheader
  },
  created() {
    api.getOrderMenu().then(res => {
      res.data.forEach(item => {
        this.orderMenuList.push(item);
      });
    });
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
      a {
        &:focus {
          color: #04afe8;
        }
      }
    }
  }
}
// 中间 count
.maddle {
  .icon {
    font-size: px2rem(60);
  }
}
</style>
