<template>
  <div class="shoppingtrolley">
    <div class="shopCar-top">
      <TopHeader :title="actName.name">
        <div class="r" slot="r">编辑</div>
      </TopHeader>
    </div>
    <div class="shopCar-menu">
      <!-- 仓库位置 -->
      <div class="menu-top">
        <div class="top-left">
          <i
            class="radioBorder"
            @click="colorData"
            :class="{ radioColor: actColor === true }"
          ></i
          >新乐保洁小仓位
        </div>
        <div class="top-right">
          备注
          <i class="icon iconfont icon-beizhu"></i>
        </div>
      </div>
      <!-- 商品位置 -->
      <div class="menu-cen" v-for="item in prouctData" :key="item.item.id">
        <i
          class="checkBorder"
          @click="checkColorData(item.item.id)"
          :class="{ checkColor: item.isMarked === true }"
        ></i>
        <div class="menuCenL">
          <div class="menuLeft">
            <img :src="item.item.img" alt />
          </div>
          <div class="menuRight">
            <p class="first">{{ item.item.title }}</p>
            <span class="three">选中仓库: {{ actName.ditch }}</span>
            <div class="menuCen">
              <p class="second">
                价格:
                <span>{{ item.totalprice }}元</span>
              </p>
              <p class="hiden">
                <i
                  @click="proDataJian(item.item.id)"
                  class="icon iconfont icon-jian"
                ></i>
                <span class="numclass">{{ item.num }}</span>
                <i
                  @click="proDataJia(item.item.id)"
                  class="icon iconfont icon-jia"
                ></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 结算位置 -->
      <div class="menu-bottom">
        <div class="bottom-left">
          <i
            class="radioBorder2"
            @click="colorData"
            :class="{ radioColor2: actColor === true }"
          ></i
          >全选
        </div>
        <div class="bottom-middle">
          合计：<span>{{ getTotalPrice }}元</span>
        </div>
        <div class="bottom-right" @click="toCommit">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "../../components/TopHeader";
export default {
  name: "shoppingtrolley",
  data() {
    return {
      actColor: false, // 仓库是否选中状态
      prouctData: "", // 购物车中的商品
      actName: "", // 超市名字
      originPrice: "", //
      cheColor: "" // 商品选中状态
    };
  },
  computed: {
    getTotalPrice() {
      let jixinger = 0;
      this.prouctData.forEach(item => {
        if (item.isMarked) {
          jixinger += item.item.monery * item.num;
        }
      });
      return jixinger;
    }
  },
  components: {
    TopHeader
  },
  methods: {
    //点击仓库选中和取消选中
    colorData() {
      if (this.actColor === true) {
        // 点击仓库商品取消全选
        this.prouctData.forEach(item => {
          this.actColor = false;
          item.isMarked = false;
        });
      } else {
        // 点击仓库商品全选
        this.prouctData.forEach(item => {
          this.actColor = true;
          item.isMarked = true;
        });
      }
    },
    //订单多选和取消
    checkColorData(id) {
      this.prouctData.forEach(item => {
        // 校验是否是当前点击的商品 id
        if (item.item.id === id) {
          if (item.isMarked) {
            item.isMarked = false;
          } else {
            item.isMarked = true;
          }
        }
      });
    },
    //点击数量减少
    proDataJian(id) {
      this.prouctData.forEach(item => {
        //找到对应的数据
        if (item.item.id === id) {
          //最低不能小于0
          if (item.num > 1) {
            //点击数量减小
            item.num--;
            item.totalprice = item.item.monery * item.num;
          }
        }
      });
    },
    //点击数量增加
    proDataJia(id) {
      this.prouctData.forEach(item => {
        //找到对应的数据
        if (item.item.id === id) {
          //点击数量增加
          item.num++;
          item.totalprice = item.item.monery * item.num;
        }
      });
    },
    toCommit() {
      console.log(this.getTotalPrice);
      // this.$route.push("/commitorder")
    }
  },
  created() {
    //拿到产品选择加入购物车的数据
    this.prouctData = this.$store.state.shopCarData;
    //拿到对应超市
    this.actName = this.$store.state.VisitList.find(
      item => item.id == this.$store.state.getShopData.id
    );
  }
};
</script>

<style lang="scss" scoped>
.shoppingtrolley {
  .r {
    font-size: px2rem(28);
  }
  .shopCar-menu {
    .menu-top {
      height: px2rem(85);
      background-color: #fafafa;
      border-bottom: 1px solid #d3caca;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 px2rem(28) 0 px2rem(70);
      .top-left {
        position: relative;
      }
      .top-right {
        .icon {
          font-size: px2rem(30);
          color: green;
        }
      }
    }

    .menu-cen {
      height: px2rem(180);
      border-bottom: 1px solid #d3caca;
      position: relative;
      .menuCenL {
        height: px2rem(182);
        display: flex;
        align-items: center;
        padding: 0 px2rem(28) 0 px2rem(70);
        .menuLeft {
          width: px2rem(164);
          height: px2rem(124);
          border: 1px solid #d3caca;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .menuRight {
          height: px2rem(124);
          padding-left: px2rem(30);
          width: 100%;
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
            // margin-top: px2rem(34);
            span {
              color: red;
              font-size: px2rem(24);
            }
          }
          .three {
            display: inline-block;
            margin-right: px2rem(52);
          }
          .menuCen {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            // padding: 0 px2rem(28);
            margin-top: px2rem(14);

            .iconfont {
              font-size: px2rem(46);
            }
            .hiden {
              // margin-top: px2rem(34);
              display: flex;
              align-items: center;
            }
            .numclass {
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
      }
    }

    .menu-bottom {
      position: fixed;
      bottom: 0;
      width: 100%;
      padding: 0 px2rem(25);
      box-sizing: border-box;
      height: px2rem(110);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .bottom-left {
        position: relative;
        font-size: px2rem(22);
        padding-left: px2rem(30);
      }
      .bottom-middle {
        font-size: px2rem(22);
        span {
          color: #ff0505;
        }
      }
      .bottom-right {
        font-size: px2rem(26);
        width: px2rem(168);
        height: px2rem(70);
        line-height: px2rem(70);
        text-align: center;
        border-radius: px2rem(3);
        background-color: #10903d;
        color: #fff;
      }
    }
  }

  .radioBorder {
    display: inline-block;
    position: absolute;
    border: 1px solid rgb(179, 177, 177);
    width: px2rem(26);
    height: px2rem(26);
    top: px2rem(8);
    left: px2rem(-45);
    border-radius: px2rem(13);
    // position: relative;
  }
  .radioColor {
    &::before {
      display: block;
      position: absolute;
      content: "";
      background-color: #00a2eb;
      width: px2rem(16);
      height: px2rem(16);
      border-radius: px2rem(8);
      top: px2rem(5);
      left: px2rem(5);
    }
  }
  .radioBorder2 {
    display: inline-block;
    position: absolute;
    border: 1px solid rgb(179, 177, 177);
    width: px2rem(26);
    height: px2rem(26);
    bottom: px2rem(0);
    left: px2rem(0);
    border-radius: px2rem(13);
    // position: relative;
  }
  .radioColor2 {
    &::before {
      display: block;
      position: absolute;
      content: "";
      background-color: #00a2eb;
      width: px2rem(16);
      height: px2rem(16);
      border-radius: px2rem(8);
      bottom: px2rem(5);
      left: px2rem(5);
    }
  }

  .checkBorder {
    display: inline-block;
    position: absolute;
    border: 1px solid rgb(179, 177, 177);
    width: px2rem(26);
    height: px2rem(26);
    top: px2rem(76);
    left: px2rem(25);
    border-radius: px2rem(13);
    // position: relative;
  }
  .checkColor {
    &::before {
      display: block;
      position: absolute;
      content: "";
      background-color: #00a2eb;
      width: px2rem(16);
      height: px2rem(16);
      border-radius: px2rem(8);
      top: px2rem(5);
      left: px2rem(5);
    }
  }
}
</style>
