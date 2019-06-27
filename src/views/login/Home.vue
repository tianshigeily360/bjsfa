<template>
  <div class="home">
    <tophead title="SFA">
      <router-link
        to="/home"
        slot="r"
        class="icon iconfont icon-user"
      ></router-link>
    </tophead>
    <div class="min-bd">
      <div class="date-wrap">{{ getYearMonth }}</div>
      <div class="mp-wrap">
        <!-- 当月进度条 -->
        <mp
          title="当月进度条"
          :val="month"
          :Percent="true"
        ></mp>
        <mp
          title="月销售完成度"
          :val="sale"
          :Percent="true"
        ></mp>
        <mp
          title="有效商店数"
          :val="count"
          :Percent="false"
        ></mp>
      </div>
    </div>
    <div class="main-nav">
      <div
        class="nav-cell"
        v-for="i in 9"
        :key="i"
      >
        <template v-if="i <= menuList.length">
          <menu-cell
            :url="menuList[i - 1].url"
            :img-url="menuList[i - 1].imgUrl"
            :menu-name="menuList[i - 1].menuName"
          ></menu-cell>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import Headtop from "../../components/TopHeader";
import progress from "../../components/progress";
import service from "../../service/api";
import menuCell from "../../components/MenuCell";

const menuList = [
  {
    menuName: "公司通告",
    imgUrl: require("@/assets/img/gstg.png"),
    url: "/notice"
  },
  {
    menuName: "进店拜访",
    imgUrl: require("@/assets/img/jdbf.png"),
    url: "/visitshop"
  },
  {
    menuName: "进店拜访2",
    imgUrl: require("@/assets/img/dhdd.png"),
    url: "/phoneorder"
  },
  {
    menuName: "培训资料",
    imgUrl: require("@/assets/img/pxzl.png"),
    url: "/training"
  },
  {
    menuName: "数据同步",
    imgUrl: require("@/assets/img/sjtb.png"),
    url: "/asyncdata"
  },
  {
    menuName: "新增门店",
    imgUrl: require("@/assets/img/xzmd.png"),
    url: "/addedshop"
  },
  {
    menuName: "消息中心",
    imgUrl: require("@/assets/img/xxzx.png"),
    url: "/message"
  },
  {
    menuName: "订单状态",
    imgUrl: require("@/assets/img/ddzt.png"),
    url: "/orders"
  }
];
export default {
  name: "home",
  data() {
    return {
      echartData: [],
      month: 0,
      sale: 0,
      count: 0,
      menuList
    };
  },
  components: {
    tophead: Headtop,
    mp: progress,
    menuCell: menuCell
  },
  created() {
    // axios.get("/api/echartData")
    service.getUserProgress().then(res => {
      this.echartData = res.data;
      let item = res.data[0];
      this.month = item.month;
      this.sale = item.sale;
      this.count = item.count;
      console.log(this.sale);
      // this.echartData.forEach(item => {
      // this.month = item.month;
      // this.sale = item.sale;
      // this.count = item.count;
      // });
      // console.log(this.month);
    });
  },
  computed: {
    getYearMonth() {
      let t = new Date();
      return `${t.getFullYear()}年${t.getMonth() + 1}月`;
    },
    getDayOfMonth() {
      let t = new Date();
      return parseInt((t.getDate() / 30) * 100);
    }
  },
  mounted() { }
};
</script>

<style lang="scss" scoped>
.home {
  flex-direction: column;
  display: flex;
  .main-nav {
    height: px2rem(810);
    flex: 1;
    padding: 0 px2rem(30);
    display: flex;
    flex-flow: row wrap;
    align-content: stretch;
    align-items: stretch;
    border-top: 1px solid #ccc;
    .nav-cell {
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      flex: 1 1 30%;
      height: px2rem(270);
      width: px2rem(250);
    }
    .nav-cell:nth-child(3n) {
      border-right: none;
    }
  }
}
.min-bd {
  background-color: #fff;
  .date-wrap {
    padding: px2rem(40) 0 px2rem(20);
    color: #000;
    font-size: $text-size-mid;
    text-align: center;
  }
  .mp-wrap {
    display: flex;
    justify-content: space-around;
  }
}
#pie {
  height: px2rem(400);
  width: px2rem(500);
}
.icon {
  color: #fff;
}
</style>
