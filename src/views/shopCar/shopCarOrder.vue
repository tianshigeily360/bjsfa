<template>
  <div class="order">
    <topheader title="下单">
      <div slot="r" class="icon iconfont icon-tubiaolunkuo-"></div>
    </topheader>
    <div class="search">
      <div class="inputBox">
        <input type="text" placeholder="点击进行搜索~" />
        <div class="icon iconfont icon-xiazai17"></div>
      </div>
      <div class="rwm">
        <div class="icon iconfont icon-im_erweimasaomiao"></div>
      </div>
    </div>
  </div>
</template>

<script>
import topheader from "../../components/TopHeader";

export default {
  name: "order",
  data() {
    return {};
  },
  components: {
    topheader
  }
};
</script>

<style scoped lang="scss"></style>
