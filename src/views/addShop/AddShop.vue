<template>
  <div class="addshop">
    <TopHeader title="新增门店">
      <div slot="r"></div>
    </TopHeader>
    <div class="shopmap">
      <img src="../../assets/map.png" alt="" />
    </div>
    <div class="address">
      <p class="firstwo">地址: 头像北京北京市海淀区西三旗黑泉区8号 三旗黑</p>
      <p class="secendt">泉路8号宝胜广场c南南宝领地啥养公司</p>
      <i class="icon iconfont icon-shuaxin"></i>
    </div>
    <div class="listshop">
      <mt-field
        type="name"
        label="商品名称"
        state="error"
        placeholder="请填写商品名称"
        v-model="username"
      ></mt-field>
      <mt-field
        label="商店面积"
        placeholder="请填写商店面积"
        state="error"
        type="email"
        v-model="email"
      ></mt-field>
      <mt-field
        label="所属渠道"
        placeholder="点击选择"
        type="password"
        v-model="password"
      ></mt-field>
      <mt-field
        label="商店类型"
        placeholder="点击选择"
        type="tel"
        v-model="phone"
      ></mt-field>
      <mt-field
        label="商店地址"
        placeholder="请填写商店地址"
        type="url"
        v-model="website"
      ></mt-field>
      <mt-field
        label="商店负责人"
        placeholder="请填写相关负责人"
        type="number"
        v-model="number"
      ></mt-field>
      <mt-field
        label="商店电话"
        placeholder="请填写联系电话"
        :state="NameStatus"
        type="date"
        v-model="birthday"
      ></mt-field>
      <mt-field
        label="拍摄门头照"
        placeholder="自我介绍"
        type="textarea"
        rows="4"
        v-modal="introduction"
        @blur.native.capture="checkInputName"
      ></mt-field>
    </div>
    <mt-button type="danger">danger</mt-button>
  </div>
</template>

<script>
import TopHeader from "../../components/TopHeader";
export default {
  name: "AddShop",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      phone: "",
      website: "",
      number: "",
      birthday: "",
      introduction: ""
    };
  },
  components: {
    TopHeader
  }
};
</script>

<style scoped lang="scss">
.addshop {
  .shopmap {
    img {
      width: 100%;
    }
  }
  .address {
    position: relative;
    height: px2rem(120);
    background-color: #fafafa;
    font-size: $text-size;
    .firstwo {
      margin-left: px2rem(28);
      padding-top: px2rem(30);
    }
    .secendt {
      margin-left: px2rem(100);
      padding-top: px2rem(20);
    }
    .icon {
      position: absolute;
      font-size: px2rem(50);
      right: px2rem(32);
      top: px2rem(35);
    }
  }
}
</style>
