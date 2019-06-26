<template>
  <div class="store-activity">
    <!-- 店内活动的 头部 -->
    <top-head class="sales" title="店 内 活 动">
      <div class="th-r" slot="r">结束拜访</div>
    </top-head>
    <!-- 各部分销量显示 -->
    <div class="activity-nav">
      <div class="activity-top">{{ actName }}</div>
      <div class="activity-ceil">
        <!--  1 本月至今销量 -->
        <div class="ceil-one">
          <div class="ceil-l">
            <img src="../../assets/activityImg/销量.png" alt /> 本月至今销量
          </div>
          <div class="ceil-r">{{ dataList.month }}</div>
        </div>
        <!-- 2 过往半年月均销量 -->
        <div class="ceil-one">
          <div class="ceil-l">
            <img src="../../assets/activityImg/销量数据.png" alt />
            过往半年月均销量
          </div>
          <div class="ceil-r">{{ dataList.year }}</div>
        </div>
        <!--  3 核心分销完成率 -->
        <div iv class="ceil-three">
          <!-- 核心分销完成率 上半部分 -->
          <div class="ceil-three-top">
            <div class="ceil-three-l">
              <img src="../../assets/activityImg/百分比.png" alt />
              核心分销完成率
            </div>
            <div class="ceil-three-r">{{ dataList.percent }}</div>
          </div>
          <!-- 进度条 部分 -->
          <mt-progress :value="dataList.percent" :bar-height="15"></mt-progress>
        </div>
      </div>
    </div>

    <!-- 历史拜访备注: -->
    <div class="bottom">
      <div class="bottom-top">历史拜访备注:</div>
      <textarea placeholder="点击填写拜访备注"></textarea>
    </div>

    <div class="btn-nav">
      <div class="btn-down" @click="toOrder">下单</div>
      <div class="btn-down">商店签到</div>
    </div>
  </div>
</template>

<script>
import TopHead from "../../components/TopHeader";
import api from "../../service/api";
export default {
  name: "store-activity",
  data() {
    return {
      // storeData: "", //店内活动页数据
      dataList: [],
      actName: ""
    };
  },
  components: {
    "top-head": TopHead
  },
  methods: {
    toOrder() {}
  },
  created() {
    // 通过路由的id 来传(马)
    api.storeActivity(this.$route.params.id).then(res => {
      this.dataList = res.data[0];
      // 拿到对应商家活动数据
      this.actName = this.$store.state.VisitList.find(
        item => item.id == this.$route.params.id
      ).name;
    });
  }
};
</script>

<style scoped lang="scss">
.store-activity {
  // 头部
  .sales {
    font-size: px2rem(32);
  }
  .th-r {
    font-size: px2rem(26);
  }
  .activity-nav {
    .activity-top {
      height: px2rem(85);
      padding-left: px2rem(25);
      line-height: px2rem(85);
      background-color: #fafafa;
      border-bottom: px2rem(1) solid #ccc;
      font-size: px2rem(30);
      font-weight: 600;
    }
    .activity-ceil {
      padding: 0 px2rem(30);
      .ceil-one {
        border-bottom: px2rem(1) solid #ccc;
        height: px2rem(110);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 px2rem(24) 0 px2remm(24);
      }
      .ceil-three-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: px2rem(96);
        line-height: px2rm(96);
      }
    }
  }
  // 页面下半部分按钮
  .bottom {
    border-top: #ccc;
    border-bottom: #ccc;
    margin-top: px2rem(32);

    .bottom-top {
      background-color: #fafafa;
      height: px2rem(66);
      padding-left: px2rem(28);
      line-height: px2rem(66);
    }
    textarea {
      height: px2rem(200);
    }
  }
  // 下单按钮
  .btn-nav {
    // color: #10903d;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: px2rem(170);
    .btn-down {
      width: px2rem(480);
      height: px2rem(84);
      line-height: px2rem(84);
      font-size: px2rem(36);
      border: px2rem(1) solid #10903d;
      text-align: center;
      margin-top: px2rem(52);
      &:hover {
        color: #fff;
        background-color: #10903d;
      }
    }
  }
}
</style>
