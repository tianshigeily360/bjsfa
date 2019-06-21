<template>
  <div class="ask-nav">
    <div class="ask-wrap">
      <div class="ask-main">
        <div class="main-l">已用时: 02:23</div>
        <div class="main-r">第6题 (12题)</div>
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
}
</style>
