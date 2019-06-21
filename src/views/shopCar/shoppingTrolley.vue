<template>
  <div class="shoppingtrolley">
    <div class="shopCar-top">
      <TopHeader :title="actName.name">
        <div class="r" slot="r">编辑</div>
      </TopHeader>
    </div>
    <div class="shopCar-menu">
      <div class="menu-top">
        <div class="top-left">
          <i class="checkBorder" @click="colorData" :class="{checkColor:actColor === true}"></i>新乐保洁小仓位
        </div>
        <div class="top-right">
          备注
          <i class="icon iconfont icon-beizhu"></i>
        </div>
      </div>
      <div class="menu-cen" v-for="item in prouctData" :key="item.item.id">
        <div class="menuCenL">
          <div class="menuLeft">
            <img :src="item.item.img" alt>
          </div>
          <div class="menuRight">
            <p class="first">{{item.item.title}}</p>
            <span class="three">选中仓库: {{actName.ditch}}</span>
            <div class="menuCen">
              <p class="second">
                价格:
                <span>{{item.item.monery}}元</span>
              </p>
              <p class="hiden">
                <i @click="proDataJian" class="icon iconfont icon-jian"></i>
                <span class="numclass">{{item.num}}</span>
                <i @click="proDataJia" class="icon iconfont icon-jia"></i>
              </p>
            </div>
          </div>
        </div>
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
      actColor: false,
      prouctData: "",
      actName:""
    };
  },
  components: {
    TopHeader
  },
  methods: {
    //点击选中和取消选中
    colorData() {
      if (this.actColor === true) {
        this.actColor = false;
      } else {
        this.actColor = true;
      }
    },
    //点击数量增加
    proDataJian() {
      this.prouctData.forEach(item => {
        if (item.num > 1) {
          item.num--;
        }
      });
    },
    //点击数量减少
    proDataJia() {
      this.prouctData.forEach(item => {
        item.num++;
      });
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
        .checkBorder {
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
  }
}
</style>
