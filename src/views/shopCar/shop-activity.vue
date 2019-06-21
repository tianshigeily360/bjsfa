<template>
  <div class="shop-activity">
    <topHead class="h" title="店内活动">
      <div class="r" slot="r">结束拜访</div>
    </topHead>
    <div class="activityMenu">
      <div class="activity-top">{{actName.name}}</div>
      <div class="activityCent">
        <div class="chiOne">
          <div class="oneLeft">
            <img src="../../assets/activityImg/销量.png" alt> 本月至今销量
          </div>
          <div class="oneRight">{{dataList.month}}</div>
        </div>
        <div class="chiOne">
          <div class="oneLeft">
            <img src="../../assets/activityImg/销量数据.png" alt> 过往半年月均销量
          </div>
          <div class="oneRight">{{dataList.year}}</div>
        </div>
        <div class="chiThree">
          <div class="thr-top">
            <div class="thrLeft">
              <img src="../../assets/activityImg/百分比.png" alt> 核心分销完成率
            </div>
            <div class="thrRight">{{dataList.percent}}%</div>
          </div>
          <mt-progress :value="dataList.percent" :bar-height="15"></mt-progress>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-top">用户拜访备注:</div>
      <textarea placeholder="点击填写拜访备注"></textarea>
    </div>

    <div class="btnBottom">
      <div class="sitDown" @click="toOrder">下单</div>
      <div class="sitDown">商店签到</div>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/TopHeader";
import server from "../../service/api";
export default {
  name: "shop-activity",
  data() {
    return {
      dataList: "",
      actName: ""
    };
  },
  components: {
    topHead
  },
  methods: {
    toOrder() {
      this.$router.push("/shopcarorder");
    }
  },
  created() {
    server.getActivity().then(res => {
      res.data.forEach(item => {
        if (item.shopId == this.$store.state.getShopData.id) {
          this.dataList = item;
        }
      });
      //拿到对应商家活动数据
      this.actName = this.$store.state.VisitList.find(
        item => item.id == this.$store.state.getShopData.id
      );
    });
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
      height: px2rem(100);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 px2rem(24) 0 px2rem(24);
    }
  }
}
.mt-progress {
  margin: 0 26px 0 26px;
}
.bottom {
  height: px2rem(270);
  // border-bottom: 1px solid #d3caca;
  .bottom-top {
    height: px2rem(65);
    line-height: px2rem(65);
    border-bottom: 1px solid #d3caca;
    padding: 0 px2rem(24) 0 px2rem(24);
  }
  textarea {
    border: none;
    border-bottom: 1px solid #d3caca;
    height: px2rem(205);
    width: px2rem(725);
    padding: px2rem(14) 0 0 px2rem(24);
    font-size: px2rem(25);
  }
}
.btnBottom {
  margin-top: px2rem(120);
  // text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .sitDown {
    width: px2rem(480);
    height: px2rem(85);
    text-align: center;
    line-height: px2rem(85);
    border: 2px solid #10903d;
    border-radius: px2rem(3);
    color: #10903d;
    margin-top: px2rem(50);
    &:hover {
      color: #fff;
      background-color: #10903d;
    }
  }
}
</style>
