<template>
  <div class="store-activity">
    <tophead title="店内活动">
      <div class="r" slot="r">结束拜访</div>
    </tophead>
    <!-- 店内活动列表区域 -->
    <div class="actlist-wrap">
      <p class="storename">{{ actName }}</p>
      <div class="actlist-content">
        <!-- one-->
        <div class="month-wrap common">
          <div class="left">
            <img src="../../assets/activityImg/销量.png" alt="" />本月至今销量
          </div>
          <div class="right">
            {{ storeList.month }}
          </div>
        </div>
        <!--two -->
        <div class="year-wrap common">
          <div class="left">
            <img
              src="../../assets/activityImg/销量数据.png"
              alt=""
            />过往半年月均销量
          </div>
          <div class="right">
            {{ storeList.year }}
          </div>
        </div>
        <!--three -->
        <div class="three">
          <div class="core-wrap">
            <div class="core-l">
              <img src="../../assets/activityImg/百分比.png" />核心分销完成率
            </div>
            <div class="core-r">{{ storeList.percent }}%</div>
          </div>
          <mt-progress
            :value="storeList.percent"
            :bar-height="15"
          ></mt-progress>
        </div>
      </div>
    </div>
    <!-- 用户拜访 -->
    <div class="uservisit-wrap">
      <div class="user">用户拜访备注:</div>
      <textarea placeholder="点击填写拜访备注"></textarea>
    </div>
    <!-- 下单商店签到 -->
    <div class="linkbtn">
      <div class="press">下单</div>
      <div class="press">商店签到</div>
    </div>
  </div>
</template>

<script>
import TopHead from "../../components/TopHeader";
import api from "../../service/api";
export default {
  name: "storeactivity",
  data() {
    return {
      storeList: "",
      actName: ""
    };
  },
  created() {
    // getActivity 店内活动接口
    api.getActivity1(this.$route.params.id).then(res => {
      // 拿到对应超市销量数据
      res.data.forEach(item => {
        if (item.shopId == this.$route.params.id) {
          this.storeList = item;
        }
      });

      // 拿到对应超市名
      this.$store.state.productList.forEach(item => {
        if (item.id == this.$route.params.id) {
          this.actName = item.name;
        }
      });
    });
  },
  components: {
    tophead: TopHead
  }
};
</script>

<style lang="scss" scoped>
.r {
  font-size: px2rem(28);
}
//店内活动列表区域
.actlist-wrap {
  font-size: px2rem(28);
  color: #000;
  .storename {
    background-color: #fafafa;
    height: px2rem(84);
    line-height: px2rem(84);
    padding-left: px2rem(28);
  }
  .actlist-content {
    .common {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 px2rem(28);
      height: px2rem(110);
      border-bottom: px2rem(1) solid #eaeaea;
      .left {
        img {
          margin-right: px2rem(18);
        }
      }
    }
    .three {
      border-bottom: 1px solid #d3caca;
      height: px2rem(140);
      .core-wrap {
        height: px2rem(100);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 px2rem(24) 0 px2rem(24);
        .core-l {
          img {
            margin-right: px2rem(18);
          }
        }
      }
      .mt-progress {
        margin: 0 px2rem(26);
        .mt-progress-runway {
          height: px2rem(12);
          border-radius: px2rem(6);
        }
      }
    }
  }
}
//用户拜访
.uservisit-wrap {
  height: px2rem(270);
  .user {
    height: px2rem(65);
    line-height: px2rem(65);
    border-bottom: 1px solid #d3caca;
    padding: 0 px2rem(24) 0 px2rem(24);
    background-color: #fafafa;
  }
  textarea {
    border-bottom: 1px solid #d3caca;
    height: px2rem(205);
    padding: px2rem(14) 0 0 px2rem(24);
    font-size: px2rem(25);
  }
}
//下单商店签到
.linkbtn {
  margin-top: px2rem(120);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .press {
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
