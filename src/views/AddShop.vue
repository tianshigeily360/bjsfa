<template>
  <div class="addshop">
    <TopHeader title="新增门店">
      <div slot="r"></div>
    </TopHeader>
    <div class="shopmap">
      <img src="../assets/map.png" alt="" />
    </div>
  </div>
</template>

<script>
import TopHeader from "../components/TopHeader";
export default {
  name: "AddShop",
  data() {
    return {};
  },
  components: {
    TopHeader
  }
};
</script>

<style scoped lang="scss"></style>
