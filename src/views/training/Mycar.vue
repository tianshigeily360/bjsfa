<template>
  <!-- 超市名字 -->
  <div class="mycar-wrap">
    <div class="my-car">
      <top-head class="buy" title="保定惠友超市连锁">
        <div class="th-r" slot="r">
          编辑
        </div>
      </top-head>
      <div class="carts-container" v-for="(cart, index) in carts" :key="index">
        <div class="store-wrap">
          <!-- index: {{ index }} cart: {{ cart }} -->
          <!-- left -->
          <div class="store-l">
            <div class="double-big">
              <div class="double"></div>
            </div>
            <!-- <div class="store-name">新 乐 宝 洁 小 仓 库 孙 丽 娜</div> -->
            <div class="store-name">{{ cart.shopTitle }}</div>
          </div>
          <!-- right -->
          <div class="store-r">
            <div class="remarker">备注</div>
            <div class="icon iconfont icon-beizhu"></div>
          </div>
        </div>

        <!-- 商品展示部分 -->
        <div
          v-for="(citem, cindex) in cartsMap[cart.id]"
          :key="cindex"
          class="goods-show"
        >
          <!-- 左边图片展示部分 -->
          <div class="goods-show-left">
            <div @click="appear" class="show-big">
              <div :class="{ show: isShow }" class="show-double"></div>
            </div>
            <div class="show-pic">
              <!-- <img :src=".img" alt /> -->
            </div>
          </div>
          <!-- 右边商品详情部分 -->
          <div class="goods-show-right">
            <!-- <div class="show-title">{{ ".title" }}</div> -->
            <div class="show-title">{{ citem.title }}</div>
            <div class="show-para">选中仓库：{{ "7041 - 新宝孙俪那" }}</div>
            <!-- 价格部分 -->
            <div class="show-comput-wrap">
              <div class="show-price">
                <!-- 价格: <span class="money">{{ ".monery" }}元</span> -->
                价格: <span class="money">{{ citem.monery }}元</span>
              </div>
              <div class="show-comput">
                <div
                  @click="handleDecrease(cart.id, citem)"
                  class="comput-down"
                >
                  <span class="jian">-</span>
                </div>
                <div class="comput-num">{{ citem.number }}</div>
                <!-- <div class="comput-num">{{ ".number" }}</div> -->
                <div @click="handleAdd(cart.id, citem)" class="comput-add">
                  <span class="jia">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 页面下面 商品合计位置 -->
      <div class="carts-total">
        <div class="total-left">
          <i
            class="radio-border"
            @click="colorData"
            :class="{ radioColor2: actColor === true }"
          ></i
          >全选
        </div>
        <div class="total-mid">
          合计: <span>{{ total }}元</span>
        </div>
        <div class="total-right">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHead from "../../components/TopHeader";
// import api from "../../service/api";
export default {
  name: "my-car",
  components: {
    "top-head": TopHead
  },
  data() {
    return {
      actColor: false, //仓库是否选中状态
      productData: "", //购物车中的商品
      total: 0, //商品总钱数
      mycar: [],
      carts: [
        {
          id: 3,
          shopTitle: "华联超市",
          remark: "备注信息"
        },
        {
          id: 4,
          shopTitle: "嗨翻天烤吧",
          remark: "备注信息"
        }
      ],
      cartsMap: {
        3: [
          {
            id: 26,
            img:
              "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg",
            menuId: 4,
            monery: "78.00",
            number: 22,
            repertory: 1200,
            serial: 34577,
            title: "巧克力威化饼"
          }
        ],
        4: [
          {
            id: 27,
            img:
              "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg",
            menuId: 4,
            monery: "78.00",
            number: 22,
            repertory: 1200,
            serial: 34577,
            title: "全烤卤味鸭"
          },
          {
            id: 23,
            img:
              "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg",
            menuId: 4,
            monery: "78.00",
            number: 22,
            repertory: 1200,
            serial: 34577,
            title: "麻辣小龙虾"
          },
          {
            id: 20,
            img:
              "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg",
            menuId: 4,
            monery: "78.00",
            number: 22,
            repertory: 1200,
            serial: 34577,
            title: "烤冷面"
          },
          {
            id: 20,
            img:
              "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg",
            menuId: 4,
            monery: "78.00",
            number: 22,
            repertory: 1200,
            serial: 34577,
            title: "牛肉板筋"
          }
        ]
      },
      isShow: false
    };
  },
  created() {
    // api.myCar().then(res => {
    //   res.data.forEach( => {
    //     this.mycar.push();
    //   });
    // });
  },
  computed: {
    getTotalPrice() {
      let dream = 0;
      this.productData.forEach(item => {
        if (item.isMarked) {
          dream += item.item.money * item.num;
        }
      });
      return dream;
    }
  },
  methods: {
    appear() {
      this.isShow = !this.isShow; // 互斥
    },

    // 点击减少数量按钮的时候触发
    handleDecrease(cartId, citem) {
      // 参数：1. cartId 店铺id 2. citem 当前店铺下的订单的商品数据
      console.log("citem :", citem);
      // 逻辑：
      // 1. 判断当前商品的数量 是否为小于等于 0， 如果是，则从购物车中删除当前商品
      // 2. 根据店铺id cartId 找到当前修改的那条数据 (根据cartMap对象属性值就是carts中的id值，也就是店铺id)
      // 3. 注意把当前条数据修改了，并给当前购物车中数据重新赋值（如果仅仅修改的是对象的属性，页面数据不会更新，所以要给修改后的那个店铺的数据进行重新赋值才行）

      // 拿到当前商品订单列表， 并浅拷贝，放到一个新的数组中，
      // 防止对当前数据的修改造成对象地址引用 出现bug
      const cartsMap = { ...this.cartsMap };
      const orderItems = [...cartsMap[cartId]];
      // 根据当前商品的id，找到当前操作的商品 的index
      const index = orderItems.findIndex(item => item.id === citem.id);
      console.log("index :", index);
      // 给当前商品信息解构赋值，放到新对象中，防止对象的地址引用而造成的同步修改bug
      const newCitem = { ...citem };
      newCitem.number = newCitem.number - 1;
      if (newCitem.number <= 0) {
        // 从购物车中删除
        orderItems.splice(index, 1);
        cartsMap[cartId] = orderItems;
        // 如果超市的商品列表为空，则删除 当前超市
        if (orderItems.length === 0) {
          this.carts = this.carts.filter(item => item.id !== cartId);
        }
      } else {
        // 数量减一
        orderItems[index] = newCitem;
        cartsMap[cartId] = orderItems;
        console.log("orderItems :", orderItems);
      }
      // 对商品信息重新赋值
      console.log("cartsMap :", cartsMap);
      this.cartsMap = cartsMap;
    },
    // 点击增加数量按钮的时候触发
    handleAdd(cartId, citem) {
      // 参数：1. cartId 店铺id 2. citem 当前店铺下的订单的商品数据
      // 给购物车增加商品数量 和 减少逻辑基本相反，不同的是增加操作不需要判断是否为零
      console.log("citem :", citem);
      const cartsMap = { ...this.cartsMap };
      const orderItems = [...cartsMap[cartId]];
      // 根据当前商品的id，找到当前操作的商品 的index
      const index = orderItems.findIndex(item => item.id === citem.id);
      console.log("index :", index);
      // 给当前商品信息解构赋值，放到新对象中，防止对象的地址引用而造成的同步修改bug
      const newCitem = { ...citem };
      newCitem.number = newCitem.number + 1;
      // 数量加一
      orderItems[index] = newCitem;
      cartsMap[cartId] = orderItems;
      console.log("orderItems :", orderItems);
      // 对商品信息重新赋值
      console.log("cartsMap :", cartsMap);
      this.cartsMap = cartsMap;
    },
    colorData() {
      if (this.actColor === true) {
        // 点击仓库商品取消全选
        this.productData.forEach(item => {
          this.actColor = false;
          item.isMarked = false;
        });
      } else {
        this.productData.forEach(item => {
          this.actColor = true;
          item.isMarked = true;
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
@mixin swrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.show {
  display: none;
}
.mycar-wrap {
  .my-car {
    .th-r {
      font-size: px2rem(28);
    }
    .store-wrap {
      // 上下左右等距 ,用padding
      display: flex;
      padding: px2rem(30);
      background-color: #fafafa;
      border-bottom: px2rem(1) solid #e8e8e8;
      .store-l {
        display: flex;
        margin-right: auto;
        .double-big {
          position: relative;
          width: px2rem(30);
          height: px2rem(30);
          border-radius: 50%;
          border: px2rem(2) solid #757575;
          .double {
            position: absolute;
            left: 50%;
            top: 50%;
            // 运用定位拉回
            margin-left: px2rem(-10);
            margin-top: px2rem(-10);
            width: px2rem(20);
            height: px2rem(20);
            border-radius: 50%;
            background-color: #00a2eb;
          }
        }
        .store-name {
          margin-left: px2rem(20);
        }
      }
      // 拉开与左边盒子的距离
      // margin-left: auto;
      .store-r {
        @include swrap;
        padding-right: px2rem(30);
        color: #10903d;

        .icon {
          font-size: px2rem(30);
          margin-left: px2rem(20);
        }
      }
    }
    .goods-show {
      // @include swrap;
      display: flex;
      padding: px2rem(30);
      background-color: #fafafa;
      border-bottom: px2rem(1) solid #e8e8e8;
      // 左边图片展示部分
      .goods-show-left {
        display: flex;
        align-items: center;
        .show-big {
          position: relative;
          width: px2rem(30);
          height: px2rem(30);
          border-radius: 50%;
          border: px2rem(2) solid #757575;
          .show-double {
            position: absolute;
            left: 50%;
            top: 50%;
            // 运用定位拉回
            margin-left: px2rem(-10);
            margin-top: px2rem(-10);
            width: px2rem(20);
            height: px2rem(20);
            border-radius: 50%;
            background-color: #00a2eb;
          }
        }
        .show-pic {
          width: px2rem(125);
          height: px2rem(125);
          background-color: #a06;
          border: px2rem(1) solid #ccc;
          margin-left: px2rem(28);
        }
      }
      .goods-show-right {
        font-size: px2rem(23);
        margin-left: px2rem(28);
        .show-title {
          padding-bottom: px2rem(20);
        }
        .show-para {
          color: #757575;
          padding-bottom: px2rem(20);
        }
        .show-comput-wrap {
          display: flex;
          height: px2rem(48);
          line-height: px2rem(48);
          .show-price {
            .money {
              color: #ff0000;
            }
          }
          .show-comput {
            display: flex;
            align-items: center;
            width: px2rem(205);
            height: px2rem(47);
            line-height: px2rem(47);
            color: #757575;
            padding-left: px2rem(82);
            .comput-down {
              width: px2rem(46);
              height: px2rem(46);
              border: px2rem(1) solid #757575;
              text-align: center;
              margin-right: px2rem(16);
              .jian {
                font-size: px2rem(48);
                font-weight: 500;
              }
            }
            .comput-add {
              width: px2rem(46);
              height: px2rem(46);
              border: px2rem(1) solid #757575;
              text-align: center;
              margin-right: px2rem(16);
              .jia {
                font-size: px2rem(45);
                font-weight: 500;
              }
            }
            .comput-num {
              width: px2rem(88);
              height: px2rem(46);
              text-align: center;
              border: px2rem(1) solid #757575;
              border-radius: px2rem(4);
              margin-right: px2rem(16);
            }
          }
        }
      }
    }
    // }

    // 商品 合计 部分
    .carts-total {
      @include swrap;
      background-color: #fff;
      position: fixed;
      bottom: 0;
      width: 100%;
      height: px2rem(111);
      padding: 0 px2rem(30);
      box-sizing: border-box;
      border: px2rem(1) solid #ccc;
      // 左边全选
      .total-left {
        position: relative;
        font-size: px2rem(24);
        padding-left: px2rem(60);
        .radioColor2 {
          &::before {
            display: block;
            position: absolute;
            content: "";
            background-color: #00a2eb;
            width: px2rem(20);
            height: px2rem(20);
            border-radius: 50%;
            left: px2rem(5);
            bottom: px2rem(5);
          }
        }
        .radio-border {
          display: inline-block;
          position: absolute;
          border: px2rem(1) solid #757575;
          width: px2rem(30);
          height: px2rem(30);
          left: px2rem(0);
          bottom: px2rem(0);
          border-radius: 50%;
        }
      }
      // 中间合计
      .total-mid {
        font-size: px2rem(24);
        span {
          color: #ff0505;
        }
      }
      // 右边确认
      .total-right {
        width: px2rem(168);
        height: px2rem(70);
        font-size: px2rem(26);
        text-align: center;
        line-height: px2rem(70);
        border-radius: px2rem(3);
        background-color: #10903d;
        color: #fff;
      }
    }
  }
}
</style>
