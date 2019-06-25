<template>
  <div class="success-order">
    <topheader title="成功订单"></topheader>
    <!--S 时间区域 -->
    <div class="time-wrap">
      <span @click="openPicker1" class="oldtime">
        {{ originDate.getFullYear() }}年{{ originDate.getMonth() }}月{{
          originDate.getDate()
        }}日
      </span>
      <i class="triange"></i>
      <span class="icon iconfont icon-youjiantou"></span>
      <span @click="openPicker2" class="oldtime">
        {{ date.getFullYear() }}年{{ date.getMonth() + 1 }}月{{
          date.getDate()
        }}日
      </span>
      <i class="triange"></i>
    </div>
    <mt-datetime-picker
      ref="picker1"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm1"
    >
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker2"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm2"
    >
    </mt-datetime-picker>
    <!--E 时间区域-->
    <div :style="show" class="serchshop-box">
      <i @click="fuzzyquery" class="icon iconfont icon-xiazai17"></i>
      <input v-model="searchVal" type="text" placeholder="门店名称编码检索~" />
    </div>
    <div class="sm-wrap" v-for="item in shoplist" :key="item.id">
      <div class="super-market">
        <h4>{{ item.name }}</h4>
        <p class="order-date">下单日期: {{ item.subon }}</p>
        <p>{{ item.address }}</p>
      </div>
      <div class="r">></div>
    </div>
    <div class="Clickquery">
      <p @click="queryshop">点击查询</p>
    </div>
  </div>
</template>

<script>
import TopHeader from "../../components/TopHeader";
import api from "../../service/api";
export default {
  name: "success-order",
  data() {
    return {
      originDate: new Date(),
      date: new Date(),
      shoplist: "",
      searchVal: "",
      show: "display: none"
    };
  },
  created() {},
  components: {
    topheader: TopHeader
  },
  methods: {
    openPicker1() {
      this.$refs.picker1.open();
    },
    openPicker2() {
      this.$refs.picker2.open();
    },
    handleConfirm1(value) {
      this.originDate = value;
    },
    handleConfirm2(value) {
      this.date = value;
    },
    queryshop() {
      api.getShopName().then(res => {
        this.shoplist = res.data;
        this.show = "display:block";
      });
    },
    fuzzyquery() {
      api.fuzzyquery({ name: this.searchVal }).then(res => {
        this.shoplist = res.data;
        console.log(this.shoplist);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.success-order {
  position: relative;
}
.time-wrap {
  height: px2rem(110);
  line-height: px2rem(110);
  padding-left: px2rem(58);
  font-size: px2rem(28);
  span {
    display: inline-block;
    &::before {
      font-size: px2rem(28);
      margin: 0 px2rem(50);
    }
  }
  .oldtime {
    margin-right: px2rem(20);
  }
  .triange {
    display: inline-block;
    width: 0;
    height: 0;
    border: px2rem(8) solid #272636;
    border-color: #272636 transparent transparent transparent;
  }
}
.serchshop-box {
  height: px2rem(106);
  line-height: px2rem(106);
  background-color: #fafafa;
  padding-left: px2rem(28);
  border-bottom: px2rem(1) solid #e8e8e8;
  border-top: px2rem(1) solid #e8e8e8;
  i {
    &::before {
      font-size: px2rem(32);
      font-weight: 900;
    }
  }
  input {
    margin-left: px2rem(10);
    font-size: px2rem(24);
    border: 0 none;
  }
}
.sm-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: px2rem(28) 0 px2rem(28) px2rem(28);
  border-bottom: px2rem(1) solid #f3f3f3;
  .super-market {
    h4 {
      font-size: px2rem(30);
      font-weight: normal;
      color: #000;
      margin-bottom: px2rem(14);
    }
    p {
      font-size: px2rem(22);
      color: #989898;
    }
    .order-date {
      margin-bottom: px2rem(10);
    }
  }
  .r {
    font-size: px2rem(48);
    margin-right: px2rem(28);
    color: #989898;
  }
}
.Clickquery {
  background-color: #70cb8a;
  height: px2rem(110);
  line-height: px2rem(110);
  text-align: center;
  position: absolute;
  left: 0;
  width: 100%;
  p {
    color: #fff;
    font-size: px2rem(36);
  }
}
</style>
