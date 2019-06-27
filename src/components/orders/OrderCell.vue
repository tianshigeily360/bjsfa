<template>
  <div class="order-cell">
    <router-link :to="url">
      <div class="img-wrap"><img :src="imgUrl" :alt="orderName" /></div>
      <div class="title-wrap">{{ orderName }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ordercell",
  props: ["orderName", "imgUrl", "url"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.order-cell {
  display: flex;
  justify-content: center;
  align-items: center; //相对于自己居中
  height: 100%;
  font-size: px2rem(28);
  .img-wrap {
    padding-left: px2rem(20);

    img {
      width: px2rem(50);
      height: px2rem(50);
    }
  }
}
.title-wrap {
  margin-top: px2rem(28);
  color: #757575 !important;
}
</style>
