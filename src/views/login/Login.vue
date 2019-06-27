<template>
  <div class="login">
    <h1>欢迎登录保洁SFA系统</h1>
    <div class="top-prominent"></div>
    <div class="login-box">
      <!-- logo背景图 -->
      <div class="logo-box">
        <div class="logo_img">
          <img
            src="@/assets/bj_logo.png"
            alt=""
          />
        </div>
      </div>
      <!-- 登录表单 -->
      <!-- 公司编码 -->
      <div
        class="input-group"
        :class="{ active: act_index === 1, error: errors.has('cno') }"
      >
        <label for="cm_code">公司编码:</label>
        <input
          name="cno"
          v-validate="{ required: true, max: 8, min: 4 }"
          @focus="act_index = 1"
          type="text"
          id="cm_code"
          v-model="cm_code"
        />
      </div>
      <!-- 员工编号 -->
      <div
        class="input-group"
        :class="{ active: act_index === 2, error: errors.has('pno') }"
      >
        <label for="staff_num">员工编号:</label>
        <input
          name="pno"
          v-validate="{ required: true, max: 12, min: 4 }"
          @focus="act_index = 2"
          type="text"
          id="staff_num"
          v-model="staff_num"
        />
      </div>
      <!-- 登录密码 -->
      <div
        class="input-group"
        :class="{ active: act_index === 3, error: errors.has('pwd') }"
      >
        <label for="Passwd">登录密码:</label>
        <input
          name="pwd"
          v-validate="{ required: true, max: 12, min: 4 }"
          @focus="act_index = 3"
          type="password"
          id="Passwd"
          v-model="Passwd"
        />
      </div>
      <!-- 勾选框 -->
      <div class="check-box">
        <div
          class="check-wrap"
          @click="remembSet"
          :class="{ active: rememb }"
        >
          <i
            class="iconfont"
            :class="{ 'icon-check-square': rememb, 'icon-border': !rememb }"
          ></i>
          <span>记住密码</span>
        </div>
        <div
          @click="autoLoginSet"
          class="check-wrap"
          :class="{ active: autologin }"
        >
          <i
            class="iconfont"
            :class="{
              'icon-check-square': autologin,
              'icon-border': !autologin
            }"
          ></i>
          <span>自动登录</span>
        </div>
      </div>
    </div>
    <!-- 登录按钮 -->
    <div
      class="btn-wrap"
      @click="loginBtnClick"
    >
      <p>登录</p>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { Indicator, Toast } from "mint-ui";
import "../../assets/fontLogin/iconfont.css";
import server from "../../service/api";
// import { setTimeout } from 'timers';
export default {
  name: "login",
  data() {
    return {
      act_index: 1,
      cm_code: "",
      staff_num: "",
      Passwd: "",
      rememb: false, // 记住密码
      autologin: false //自动登录
    };
  },
  // 页面挂载完成之后
  mounted() {
    // 记住账号密码
    let data = JSON.parse(localStorage.getItem("Login_data"));
    if (data) {
      this.cm_code = data.comnum;
      this.staff_num = data.usernum;
      this.Passwd = data.password;
      this.autologin = data.autologin;
      this.rememb = data.rememb;
    }
    // 强制执行校验
    this.$validator.validate();
    // 自动登录
    if (this.autologin) {
      // this.loginBtnClick();
    }
  },
  // 勾选框
  methods: {
    ...mapMutations(["initUser"]), //映射
    autoLoginSet() {
      // 设置当前的autologin为true或者false
      this.autologin = !this.autologin;
      // 另外设置rememd的值
      this.autologin && (this.rememb = true);
    },
    remembSet() {
      this.rememb = !this.rememb;
      this.rememb || (this.autologin = false);
    },
    // 登录校验
    loginBtnClick() {
      // 判断当前校验是否全部通过
      // this.errors.any(); // boolean 如果有错误那么返回true 否则返回false
      if (this.errors.any()) {
        console.log("有错误");
        return;
      }
      // 弹出等待的遮罩层 防止二次点击
      Indicator.open("正在登录...");
      // 发送ajax请求
      // console.log("没有错误");
      // setTimeout(() => {
      //   Indicator.close();
      // }, 2000);
      // 第一个参数: 发送请求的地址 第二个:请求的数据 第三个: 对当前请求做设置
      server
        .postUserLogin({
          comnum: this.cm_code,
          usernum: this.staff_num,
          password: this.Passwd
        })
        .then(res => {
          if (res.data.code == 1) {
            // 登录成功
            // 记住用户名密码
            localStorage.setItem(
              "Login_data",
              JSON.stringify({
                rememb: this.rememb,
                autologin: this.autologin,
                comnum: this.rememb ? this.cm_code : "",
                usernum: this.rememb ? this.staff_num : "",
                password: this.rememb ? this.Passwd : ""
              })
            );
            // 把当前登录的用户信息放到sesstionStoreage里面一份
            sessionStorage.setItem("LoginUser", JSON.stringify(res.data.user));
            // 把当前登录的用户信息放到vuex里面去
            // this.$store.commit("initUser", res.data.user);
            this.initUser(res.data.user);
            // 跳转页面
            this.$router.push("./Home");
            // Toast(res.data.msg);
          } else {
            // 登录失败.用户名或密码不正确
            // Toast(res.data.msg);
            Toast({
              message: "用户名密码不正确,登录失败!",
              duration: 2000
            });
          }
          // console.log(res.data.code);
          // Indicator.close();
          Indicator.close();
        })
        .catch(e => {
          console.log("登录失败!", e);
          Toast({
            message: "用户名密码不正确,登录失败!",
            duration: 2000
          });
          Indicator.close();
        });
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: px2rem(36);
  height: px2rem(36);
  line-height: px2rem(36);
  padding: px2rem(148-36-44) 0 px2rem(44) 0;
  color: #fff;
}

@mixin login_wrap_btn {
  width: px2rem(600);
  margin: 0 auto;
  background-color: #fff;
  border-radius: px2rem(15);
}
.login {
  background-color: #2ade69;
  height: px2rem(1334);
  .top-prominent {
    width: px2rem(538);
    height: px2rem(18);
    background-color: #eee;
    margin: 0 auto;
    border-radius: px2rem(18) px2rem(18) 0 0;
  }
  // logo背景图
  .login-box {
    height: px2rem(836);
    @include login_wrap_btn;
    .logo-box {
      // height: px2rem(353);
      padding: px2rem(80) 0;
      .logo_img {
        height: px2rem(190);
        width: px2rem(190);
        margin: 0 auto;
        // padding: px2rem(80) px2rem(205);
        // background: url(../../../../assets/bj_logo.png) no-repeat;
        background-size: cover;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @mixin rowStyle() {
    color: $text-color;
    margin: 0 auto px2rem(30);
  }
  // 登录表单
  .input-group {
    border: 2px solid #e2e2e2;
    border-radius: px2rem(45);
    font-size: $text-size-mid;
    line-height: px2rem(90);
    width: px2rem(430);
    padding: 0 px2rem(36);
    @include rowStyle();
    input {
      border: 0 none;
      width: px2rem(240);
      font-size: $text-size-mid;
      // line-height: px2rem(90);
      line-height: 1;
      padding-left: 1em;
      outline: none;
    }
  }
  .input-group.active {
    color: $act-color;
    border: 2px solid $act-color;
  }
  // 表单校验
  .input-group.error {
    color: red;
    border: 2px solid red;
  }
  //  勾选框
  .check-box {
    font-size: $text-size;
    @include rowStyle();
    display: flex;
    justify-content: space-around;
    .check-wrap {
      display: block;
      padding-top: px2rem(8);
      display: flex;
      i::before {
        display: inline-block;
        height: px2rem(34);
        width: px2rem(34);
        font-size: px2rem(34);
      }
    }
    .check-wrap.active {
      color: $act-color;
    }
  }
  .btn-wrap {
    letter-spacing: px2rem(10);
    font-weight: bold;
    @include login_wrap_btn;
    height: px2rem(100);
    line-height: px2rem(100);
    text-align: center;
    margin-top: px2rem(20);
    font-size: $text-size-imp;
    color: $act-color;
  }
}
</style>
