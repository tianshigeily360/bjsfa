<template>
  <div class="shop-visit">
    <topHead class="h" title="进店拜访">
      <div class="r" slot="r"></div>
    </topHead>
    <!-- 计划标题部分 -->
    <div class="plan-wrap">
      <p class="plan-in">
        计划内
        <router-link to></router-link>
      </p>
      <p class="plan-out">计划外</p>
    </div>
    <div class="search">
      <div @click="search" class="icon iconfont icon-xiazai17"></div>
      <input class="letter" placeholder="点击进行搜索～" v-model="searchVal" />
    </div>

    <!-- 超市部分  需要提供后台数据部分 -->
    <!-- 路由出口  路由匹配到的组件将渲染在这里 -->
    <div class="store-wrap">
      <div
        class="store-main"
        v-for="item in storeList"
        @click="getShop(item)"
        :key="item.id"
      >
        <div class="store-l">
          <div class="store-h">{{ item.name }}</div>
          <div class="store-m">
            <span class="dd">ID: {{ item.pid }}</span>
            <span class="tt">创建时间:{{ item.subon }}</span>
            <div class="boss">{{ item.bossName }}</div>
          </div>
        </div>
        <div class="store-r">
          <!-- 1 地址图标 -->
          <div class="dis">
            <div class="icon iconfont icon-weizhi"></div>
            <div class="mi">{{ item.distance }}</div>
          </div>
          <!-- 右箭头部分 -->
          <div class="you">></div>
          <div class="phon">
            <div class="icon iconfont icon-weibiaoti-"></div>
            <div class="hao">{{ item.phone }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/TopHeader";
import api from "../../service/api";

export default {
  name: "shop-visit",
  data() {
    return {
      storeList: [], // 超市列表数据
      searchVal: ""
    };
  },
  methods: {
    // 模糊搜索 搜索到对应的内容
    search() {
      api.visitShopSearch({ name: this.searchVal }).then(res => {
        this.storeList = res.data;
      });
    },
    getShop(item) {
      this.$router.push(`/Store/${item.id}`); //跳转到店内拜访页
    }
  },
  // 发送请求
  created() {
    // 1. 列表的数据是怎么出来的
    // 2. 列表中的数据有什么用
    // 3. 页面跳转 和 跳转的时候需要带的参数
    // debugger;
    api.visitShop().then(res => {
      // res.data.forEach(item => {
      //   this.storeList.push(item);
      //   this.$store.commit("initVisitList", res.data);
      // });
      // console.log(this.storeList);
      // 这个效果比上面的更优化
      const storeList = res.data;
      this.storeList = storeList;
      this.$store.commit("initVisitList", storeList);
    });
  },
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
  color: #989898;
  margin-left: px2rem(30);
  font-size: $text-size-mid;
  border: none;
  background-color: #fafafa;
  width: 100%;
  height: px2rem(106);
  outline: none; //去掉默认黄色边框
}
// <!-- 超市部分  需要提供后台数据部分 -->
.store-main {
  display: flex;
  height: px2rem(177);
  border-bottom: px2rem(2) solid #ccc;
  justify-content: space-around;
  .store-l {
    margin-top: px2rem(30);
    .store-h {
      font-size: $text-size-mid;
      margin-bottom: px2rem(20);
    }
    .store-m {
      font-size: $text-size;
      color: #989898;
      .dd {
        padding-right: px2rem(50);
      }
      .boss {
        padding-top: px2rem(20);
      }
    }
  }
  .store-r {
    // margin-left: px2rem(50);
    margin-top: px2rem(30);
    .dis {
      display: flex;
      padding-left: px2rem(40);
      .icon {
        font-size: $text-size-mid;
      }
      .mi {
        font-size: px2rem(22);
      }
    }
    .you {
      text-align: right;
      color: #989898;
    }
    .phon {
      display: flex;
      line-height: px2rem(45);
      .icon {
        font-size: px2rem(35);
        font-weight: 600;
      }
      .hao {
        font-size: px2rem(22);
        color: #4cac6e;
      }
    }
  }
}
</style>
