<template>
  <div class="shop-activity">
    <topHead class="h" title="店内活动">
      <div class="r" slot="r">结束拜访</div>
    </topHead>
    <div class="activityMenu">
      <div class="activity-top">A超市宝洁</div>
      <div class="activityCent">
        <div class="chiOne">
          <div class="oneLeft">
            <img src="../../assets/activityImg/销量.png" alt> 本月至今销量
          </div>
          <div class="oneRight">1263</div>
        </div>
        <div class="chiOne">
          <div class="oneLeft">
            <img src="../../assets/activityImg/销量数据.png" alt> 过往半年月均销量
          </div>
          <div class="oneRight">3123</div>
        </div>
        <div class="chiThree">
          <div class="thr-top">
            <div class="thrLeft">
              <img src="../../assets/activityImg/百分比.png" alt> 核心分销完成率
            </div>
            <div class="thrRight">68%</div>
          </div>
          <mt-progress :value="20" :bar-height="5"></mt-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/TopHeader";
export default {
  name: "shop-activity",
  data() {
    return {};
  },
  components: {
    topHead
  }
};
</script>


<style lang="scss" scoped>
.r {
  font-size: px2rem(25);
}
.activityMenu {
  .activity-top {
    height: px2rem(84);
    line-height: px2rem(84);
    padding-left: px2rem(25);
    font-size: px2rem(26);
    border-bottom: 1px solid #d3caca;
  }
  .chiOne {
    border-bottom: 1px solid #d3caca;
    // width: px2rem(350);
    height: px2rem(110);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 px2rem(24) 0 px2rem(24);
  }
  .chiThree {
    border-bottom: 1px solid #d3caca;
    height: px2rem(140);
    .thr-top {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 px2rem(24) 0 px2rem(24);
    }
  }
}
</style>
