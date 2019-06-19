<template>
  <div class="shop-activity">
    <topHead class="h" title="店内活动">
      <div class="r" slot="r">结束拜访</div>
    </topHead>
  </div>
</template>

<script>
import topHead from "../components/TopHeader";
export default {
  name: "shop-activity",
  data() {
    return {};
  },
  components: {
    topHead
  }
};
</script>


<style lang="scss" scoped>
.r {
  font-size: 35px;
}
</style>
