<template>
  <!-- 头部培训资料部分 -->
  <div class="shop-train">
    <top-header class="t" title="培训资料"></top-header>
    <div class="train-wrap">
      <div
        class="train-l train-item"
        :class="{ actived: componentType === 'training-img-text' }"
        @click="handleChangeNavbar('training-img-text')"
      >
        <div class="train-img">
          图文
        </div>
      </div>
      <div
        class="train-m train-item"
        :class="{ actived: componentType === 'training-video' }"
        @click="handleChangeNavbar('training-video')"
      >
        <div class="train-video">视频</div>
      </div>
      <div
        class="train-r train-item"
        :class="{ actived: componentType === 'training-ask' }"
        @click="handleChangeNavbar('training-ask')"
      >
        <div class="train-ask">问答</div>
      </div>
    </div>
    <component :is="componentType"></component>
  </div>
</template>

<script>
import TopHeader from "../../components/TopHeader";
import TrainingAsk from "../../components/training/TrainingAsk";
import TrainingImgText from "../../components/training/TrainingImgText";
import TrainingVideo from "../../components/training/TrainingVideo";
export default {
  name: "shop-train",
  components: {
    "training-ask": TrainingAsk,
    "training-img-text": TrainingImgText,
    "training-video": TrainingVideo,
    "top-header": TopHeader
  },
  data() {
    return {
      babyList: [],
      componentType: "training-img-text"
    };
  },
  methods: {
    handleChangeNavbar(type) {
      this.componentType = type;
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin swrap {
  margin-top: px2rem(30);
  border-right: px2rem(2) solid #ccc;
  padding-right: px2rem(90);
  height: px2rem(28);
  line-height: px2rem(28);
}
.train-wrap {
  display: flex;
  justify-content: space-around;
  height: px2rem(87);
  border-bottom: px2rem(2) solid #ccc;
  line-height: px2rem(87);
  background-color: #fafafa;
  padding: 0 px2rem(2) 0 px2rem(2);
  font-size: px2rem(28);
  .train-item.actived > div {
    color: rgb(255, 0, 140);
  }
  .train-l {
    .train-img {
      @include swrap;
    }
  }
  .train-m {
    .train-video {
      @include swrap;
    }
  }
}
// <!-- 护舒宝详情部分 -->

.baby-wrap {
  .baby-top {
    display: flex;
    height: px2rem(194);
  }
  .top-img {
    width: px2rem(179);
    height: px2rem(136);
    padding: px2rem(28);
  }
  .top-intro {
    .top-title {
      font-size: px2rem(25);
    }
    .top-para {
      font-size: px2rem(20);
    }
  }
}
</style>
