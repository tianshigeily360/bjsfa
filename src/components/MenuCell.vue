<template>
  <div class="meun-cell">
    <router-link :to="url">
      <div class="img-wrap"><img
          :src="imgUrl"
          :alt="menuName"
        /></div>
      <div class="title-wrap">{{ menuName }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MenuCell",
  props: ["menuName", "imgUrl", "url"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.meun-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: $text-size;
  color: #000;
  text-align: center;
  .img-wrap {
    display: inline-block;
    margin-bottom: px2rem(36);
    img {
      width: px2rem(62);
      height: px2rem(62);
    }
  }
}
</style>
