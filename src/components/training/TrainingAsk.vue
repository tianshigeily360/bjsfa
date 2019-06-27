<template>
  <div class="ask-nav">
    <div class="ask-wrap">
      <div class="ask-main">
        <div class="main-l">已用时: 02 : 23</div>
        <div class="main-r">第6题 (12题)</div>
      </div>
    </div>
    <!-- 问答部分 -->
    <div class="quest-wrap">
      <div class="quest-main">
        <div class="quest-hd">1. 武汉工贸销售晨会的时间？</div>
        <div class="quest-area">
          <div class="quest-one">
            <div class="quest-bd">
              A 周一 周四
            </div>
            <div class="icon iconfont icon-duigou"></div>
          </div>
          <div class="quest-one">
            <div class="quest-bd">B 周三 周五</div>
            <div class="icon iconfont icon-duigou"></div>
          </div>
          <div class="quest-one">
            <div class="quest-bd">C 周一</div>
            <div class="icon iconfont icon-duigou"></div>
          </div>
          <div class="quest-one">
            <div class="quest-bd">D 周四 周五</div>
            <div class="icon iconfont icon-duigou"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ask",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@mixin swrap {
  height: px2rem(84);
  border-radius: px2rem(6);
  border: px2rem(2) solid #ccc;
  line-height: px2rem(84);
  font-weight: 400;
}
.ask-nav {
  .ask-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: px2rem(2) solid #ccc;
    height: px2rem(140);
    .ask-main {
      display: flex;
      width: px2rem(694);
      height: px2rem(84);
      .main-l {
        @include swrap;
        margin-right: px2rem(10);
        width: px2rem(414);
        padding-left: px2rem(28);
      }
      .main-r {
        @include swrap;
        width: px2rem(270);
        text-align: center;
      }
    }
  }
  // 问答部分
  .quest-main {
    .quest-hd {
      margin-top: px2rem(40);
      margin-left: px2rem(28);
      font-size: pz2rem(28);
    }
    .quest-area {
      .quest-one {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: px2rem(60);
        margin-top: px2rem(60);
        // .quest-bd {

        // }
        .icon {
          font-size: px2rem(55);
          padding-right: px2rem(50);
          color: #10903d;
        }
      }
    }
  }
}
</style>
