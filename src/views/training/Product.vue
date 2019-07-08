<template>
  <div class="product">
    <topHead class="h" title="产 品 选 择"> </topHead>
    <div class="product-list">
      <ul class="choc-wrap">
        <li class="choc-list">
          <img :src="proData.img" alt />

          <div class="choc-top">
            <div class="choc-title">
              {{ proData.title }}
            </div>
            <div class="choc-subtitle">
              <span>编码:{{ proData.serial }}</span>
              <span>规格:{{ proData.number }}盒/箱</span>
            </div>

            <div class="choc-foot">
              <div class="foot-price">
                价格: <span class="foot-num">{{ proData.monery }}</span>
              </div>
              <div class="foot-respor">
                <span>库存: {{ proData.number }}箱</span>
                <div class="icon iconfont icon-shuaxin"></div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="store-house-wrap">
      <div class="store-house">
        <p>仓库</p>
        <p>
          {{ actName.ditch }}
          <img src="../../assets/activityImg/小于号.png" alt />
        </p>
      </div>
      <div class="store-house">
        <p>库存</p>
        <p>
          {{ proData.repertory }}
        </p>
      </div>
    </div>
    <div class="house-three">
      <div class="house-main">
        <p class="house-quantity">数量</p>
        <p class="house-number">
          <i @click="proDataDel(1)" class="icon iconfont icon-jian"></i>
          <span>{{ numData }}</span>
          <i @click="proDataAdd" class="icon iconfont icon-jia"></i>
        </p>
      </div>
    </div>
    <div class="product-bottom">
      <div class="bottom-l" @click="goBack">取消</div>
      <div class="bottom-r" @click="goMyCar">加入购物车</div>
    </div>
  </div>
</template>
<script>
import topHead from "../../components/TopHeader";
import server from "../../service/api";
export default {
  name: "product1",
  data() {
    return {
      proData: "",
      actName: "",
      numData: 1,
      money: ""
    };
  },
  methods: {
    goMyCar() {
      this.$router.push("/Mycar");
      this.$store.commit("initgetShopData", {
        item: this.proData,
        num: this.numData
      });
    },
    goBack() {
      // 取消按键
      this.$router.go(-1);
    },
    // 点击数量减少
    proDataDel(i) {
      if (this.numData > i) {
        this.numData--;
      }
    },
    // 点击数量添加
    proDataAdd() {
      this.numData++;
    }
  },
  created() {
    // 向后台发送请求获取产品选择
    this.proData = this.$store.state.productList.find(
      item => item.id == this.$route.params.id
    );
    console.log(this.proData);
    // 拿到对应仓库 的数据
    this.actName = this.$store.state.VisitList.find(
      item => item.id == this.$store.getShopData.id
    );
  },
  components: {
    topHead
  }
};
</script>
<style lang="scss" scoped>
@mixin swrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-list {
  .choc-wrap {
    border-bottom: px2rem(2) solid #ccc;
    .choc-list {
      margin: px2rem(20) px2rem(28) 0 px2rem(28);
      height: px2rem(166);
      display: flex;
      // align-items: center;
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
        @include swrap;
        font-size: px2rem(22);
        margin-top: px2rem(22);
        color: #989898;
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
}
.store-house-wrap {
  padding: 0 0 0 px2rem(28);
  .store-house {
    border-bottom: px2rem(1) solid #ccc;
    height: px2rem(114);
    margin-right: px2rem(20);
    @include swrap;
    img {
      margin-left: px2rem(20);
    }
  }
  &:last-child {
    p {
      &:last-child {
        margin-right: px2rem(28);
      }
    }
  }
}
.house-three {
  .house-main {
    padding: 0 px2rem(28);
    border-bottom: px2rem(1) solid #ccc;
    @include swrap;
    height: px2rem(112);
    .house-number {
      @include swrap;
      line-height: px2rem(50);
      text-align: center;
      .icon {
        font-size: px2rem(46);
      }
      span {
        width: px2rem(90);
        height: px2rem(48);
        border: px2rem(1) solid #1b1c2a;
        border-radius: px2rem(7);
      }
    }
  }
}
.product-bottom {
  width: 100%;
  position: fixed;
  border-top: px2rem(2) solid #ccc;
  bottom: 0;
  font-size: px2rem(36);
  @include swrap;
  text-align: center;
  .bottom-l {
    width: px2rem(375);
    height: px2rem(150);
    line-height: px2rem(150);
    border-right: px2rem(1) solid #ccc;
    color: #ff0000;
  }
  .bottom-r {
    width: px2rem(375);
    color: #10903d;
  }
}
</style>
