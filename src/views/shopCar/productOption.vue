<template>
  <div class="product">
    <div class="product-top">
      <topHeard title="产品选择">
        <div class="r" slot="r"></div>
      </topHeard>
    </div>
    <div class="menu-top">
      <div class="menuLeft">
        <img :src="proData.img" alt>
      </div>
      <div class="menuRight">
        <p class="first">{{ proData.title }}</p>
        <span class="three">编码: {{ proData.serial }}</span>
        <span>规格: {{ proData.number }}盒/箱</span>
        <p class="second">
          价格:
          <span>{{ proData.monery }}</span>
        </p>
      </div>
    </div>

    <div class="menu-cen">
      <div class="menuCen">
        <p>仓库</p>
        <p>
          {{actName.ditch}}
          <img src="../../assets/activityImg/小于号.png" alt>
        </p>
      </div>
      <div class="menuCen">
        <p>库存</p>
        <p>{{ proData.repertory }}</p>
      </div>
      <div class="menuCen">
        <p>数量</p>
        <p class="hiden">
          <i @click="proDataJia(1)" class="icon iconfont icon-jian"></i>
          <span>{{ numData }}</span>
          <i @click="proDataJian" class="icon iconfont icon-jia"></i>
        </p>
      </div>
    </div>

    <div class="menu-bottom">
      <div class="left btn" @click="goBack">取消</div>
      <div class="right btn" @click="goShopCar">加入购物车</div>
    </div>
  </div>
</template>

<script>
import topHeard from "../../components/TopHeader";
import server from "../../service/api";
export default {
  name: "product",
  data() {
    return {
      proData: "",
      numData: 1,
      actName: "",
      money: ""
    };
  },
  components: {
    topHeard
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    //点击数量增加
    proDataJia(i) {
      console.log(i);
      if (this.numData > i) {
        this.numData--;
      }
    },
    //点击数量减少
    proDataJian() {
      this.numData++;
    },
    //跳转到购物车
    goShopCar() {
      //计算加入购物车的商品总价
      this.money = this.proData.monery * this.numData;

      this.$store.commit("initshopCarData", {
        item: this.proData,
        num: this.numData,
        totalprice: this.money,
        isMarked: true
      });
      this.$router.go(-1);
    }
  },
  created() {
    this.proData = this.$store.state.productList.find(
      item => item.id == this.$route.params.id
    );
    //拿到对应仓库
    this.actName = this.$store.state.VisitList.find(
      item => item.id == this.$store.state.getShopData.id
    );
    // console.log(this.proData);
  }
};
</script>

<style lang="scss" scoped>
.product {
  .menu-top {
    height: px2rem(182);
    border-bottom: 1px solid #d3caca;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    padding: 0 px2rem(28);
    .menuLeft {
      width: px2rem(124);
      height: px2rem(124);
      border: 1px solid #d3caca;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .menuRight {
      padding-left: px2rem(30);
      .first {
        color: #000;
        font-size: px2rem(24);
      }
      span {
        font-size: px2rem(20);
        color: #757575;
      }
      .second {
        font-size: px2rem(20);
        color: #757575;
        margin-top: px2rem(34);
        span {
          color: red;
          font-size: px2rem(24);
        }
      }
      .three {
        display: inline-block;
        margin-right: px2rem(52);
      }
    }
  }
  .menu-cen {
    .menuCen {
      height: px2rem(112);
      border-bottom: 1px solid #d3caca;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 px2rem(28);
      .iconfont {
        font-size: px2rem(46);
      }
      .hiden {
        display: flex;
        align-items: center;
        height: 100%;
      }
      span {
        width: px2rem(80);
        height: px2rem(40);
        border: 3px solid #000;
        display: inline-block;
        text-align: center;
        border-radius: 10px;
        line-height: px2rem(40);
        margin: 0 px2rem(10);
      }
    }
  }
  .menu-bottom {
    width: 100%;
    height: px2rem(110);
    border-top: 1px solid #d3caca;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left {
      border-right: 1px solid #d3caca;
      color: red;
    }
    .btn {
      height: px2rem(110);
      line-height: px2rem(110);
      width: px2rem(375);
      text-align: center;
    }
    .right {
      color: green;
    }
  }
}
</style>
