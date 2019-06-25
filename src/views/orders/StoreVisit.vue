<template>
  <div class="store-visit">
    <tophead title="进店拜访"></tophead>
    <!-- 计划区域 -->
    <div class="plan-wrap">
      <div class="planin">计划内</div>
      <div class="planout">计划外</div>
    </div>
    <!-- 搜索区域 -->
    <div class="search-wrap">
      <i @click="searhshop" class="icon iconfont  icon-xiazai17"></i>
      <input type="text" placeholder="点击进行搜索～" v-model="searchVal" />
    </div>
    <!-- 超市内容区域 -->
    <div
      class="content"
      @click="getShopCurrent(item)"
      v-for="item in storeList"
      :key="item.id"
    >
      <div class="a1">
        <div>
          <p>{{ item.name }}</p>
        </div>
        <div>
          <i class="icon iconfont icon-weizhi"></i>
          <span> <</span> <span>{{ item.distance }} </span>
        </div>
      </div>
      <div class="a2">
        <div class="ID">ID : {{ item.pid }}</div>
        <div class="creat-time">创建时间: {{ item.subon }}</div>
        <div>
          <p>></p>
        </div>
      </div>
      <div class="a3">
        <div class="name">{{ item.bossName }}</div>
        <div class="phone">
          <i class="icon iconfont icon-weibiaoti-"></i>
          <span>{{ item.phone }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHead from "../../components/TopHeader";
import api from "../../service/api";
export default {
  name: "storevisit",
  data() {
    return {
      storeList: [],
      searchVal: ""
    };
  },
  created() {
    api.visitShop().then(res => {
      this.storeList = res.data;
      this.$store.commit("initProdcutList", res.data); //提交突变
    });
  },
  methods: {
    searhshop() {
      console.log(this.searchVal);
      api.fuzzyquery({ name: this.searchVal }).then(res => {
        this.storeList = res.data;
        console.log(this.storeList);
      });
    },
    getShopCurrent(item) {
      //当前点击的数据存入vuex
      // this.$store.commit("initgetShopData", item); //提交突变
      this.$router.push(`/StoreActivity/${item.id}`); //跳转到店内活动页
    }
  },
  components: {
    tophead: TopHead
  }
};
</script>

<style lang="scss" scoped>
.plan-wrap {
  display: flex;
  text-align: center;
  height: px2rem(108);
  line-height: px2rem(108);
  border-bottom: px2rem(2) solid #e8e8e8;
  .planin {
    flex: 0 0 px2rem(375);
    border-right: px2rem(1) solid #dddddd;
    &:hover {
      border-bottom: px2rem(6) solid #10903d;
    }
  }
  .planout {
    flex: 0 0 px2rem(375);
    align-items: center;
    height: 100%;
    &:hover {
      align-items: center;
      border-bottom: px2rem(6) solid #10903d;
    }
  }
}
.search-wrap {
  height: px2rem(104);
  line-height: px2rem(104);
  border-bottom: px2rem(2) solid #f5f5f5;
  background-color: #fafafa;
  padding-left: px2rem(28);
  // font-size: px2rem(28);
  i {
    &::before {
      font-size: px2rem(40);
      font-weight: 900;
      margin-right: px2rem(10);
    }
  }
  input {
    border: 0 none;
    font-size: px2rem(25);
    background-color: #fafafa;
  }
}
.content {
  padding: 0 px2rem(24);
  border-bottom: px2rem(1) solid #f1f1f1;
  height: px2rem(176);
  .a1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: px2rem(70);
    color: #000;
    p {
      font-size: px2rem(28);
    }
    i {
      &::before {
        font-size: px2rem(28);
      }
    }
    span {
      font-size: px2rem(24);
    }
  }
  .a2 {
    display: flex;
    font-size: px2rem(22);
    color: #757575;
    .ID {
      flex: 0 0 px2rem(164);
    }
    .creat-time {
      flex: 0 0 px2rem(280);
    }
    p {
      flex: 0 0 auto;
      padding-left: px2rem(224);
      font-size: px2rem(40);
    }
  }
  .a3 {
    display: flex;
    justify-content: space-between;
    .name {
      font-size: px2rem(24);
      color: #757575;
    }
    .phone {
      i {
        &::before {
          font-size: px2rem(24);
        }
      }
      span {
        font-size: px2rem(24);
        color: #4cac6e;
      }
    }
  }
}
</style>
