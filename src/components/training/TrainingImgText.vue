<template>
  <div class="img-text">
    <!-- 护舒宝详情部分 v-for="item in babyList" :key="item.id -->
    <div class="baby-recycle" v-for="item in imgText" :key="item.id">
      <div class="baby-img-wrap">
        <div class="baby-img">
          <img :src="item.img" alt />
        </div>
      </div>
      <div class="baby-intro">
        <div class="baby-title">{{ item.title }}</div>
        <div class="baby-para">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../service/api";
export default {
  name: "img-text",
  data() {
    return {
      imgText: []
    };
  },
  // 发送请求 向后台获取数据
  created() {
    api.trainmaterials().then(res => {
      // res.data.forEach(item => {
      //   this.imgText.push(item);
      // });
      // console.log(this.imgText);
      this.imgText = res.data;
    });
  }
};
</script>

<style lang="scss" scoped>
@mixin swrap {
  margin-top: px2rem(28);
}
.img-text {
  .baby-recycle {
    height: px2rem(195);
    display: flex;
    @include swrap;
    border-bottom: px2rem(2) solid #ccc;
    .baby-img-wrap {
      padding: px2rem(28);
      // .baby-img {
      img {
        width: px2rem(180);
        height: px2rem(136);
        border: px2rem(2) dotted #f06;
        // }
      }
    }
    .baby-intro {
      @include swrap;
      width: px2rem(467);
      height: px2rem(137);
      .baby-title {
        font-size: px2rem(28);
      }
      .baby-para {
        font-size: px2rem(22);
        margin-top: px2rem(15);
        color: #757575;
      }
    }
  }
}
</style>
