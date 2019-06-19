<template>
  <div class="addshop">
    <TopHeader title="新增门店">
      <div slot="r"></div>
    </TopHeader>
    <div class="shopmap">
      <img
        src="../assets/map.png"
        alt=""
      >
    </div>
    <div class="address">
      <p class="firstwo">地址: 头像北京北京市海淀区西三旗黑泉区8号 三旗黑
      </p>
      <p class="secendt"> 泉路8号宝胜广场c南南宝领地啥养公司</p>
      <i class="icon iconfont icon-shuaxin"></i>
    </div>
    <div class="listshop">
      <mt-field
        label="用户名"
        placeholder="请输入用户名"
        v-model="username"
      ></mt-field>
      <mt-field
        label="邮箱"
        placeholder="请输入邮箱"
        type="email"
        v-model="email"
      ></mt-field>
      <mt-field
        label="密码"
        placeholder="请输入密码"
        type="password"
        v-model="password"
      ></mt-field>
      <mt-field
        label="手机号"
        placeholder="请输入手机号"
        type="tel"
        v-model="phone"
      ></mt-field>
      <mt-field
        label="网站"
        placeholder="请输入网址"
        type="url"
        v-model="website"
      ></mt-field>
      <mt-field
        label="数字"
        placeholder="请输入数字"
        type="number"
        v-model="number"
      ></mt-field>
      <mt-field
        label="生日"
        placeholder="请输入生日"
        type="date"
        v-model="birthday"
      ></mt-field>
      <mt-field
        label="自我介绍"
        placeholder="自我介绍"
        type="textarea"
        rows="4"
        v-modal="introduction"
      ></mt-field>
    </div>
    <mt-button type="danger">danger</mt-button>
  </div>
</template>

<script>

import TopHeader from '../components/TopHeader';
export default {
  name: 'AddShop',
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
    TopHeader,

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
