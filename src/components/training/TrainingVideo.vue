<template>
  <div class="training-video">
    <div class="video-recycle">
      <div class="video-img-wrap">
        <!-- 视频部分 -->
        <div class="video-img">
          <img src="" alt />
        </div>
      </div>
      <!-- 介绍部分 -->
      <div class="video-intro">
        <div class="video-title">
          这是标题时代峻峰
        </div>
        <div class="video-para">
          骄傲和打开房间had孵化基地发哈积分胡椒粉爱好的方法安徽的
        </div>
        <div class="video-time">
          2014.12.23 12:24:00
        </div>
        <div class="icon iconfont "></div>
        <div class="clock-time">12:23</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "training-video",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.video-recycle {
  display: flex;
  height: px2rem(206);
  border-bottom: px2rem(2) solid #ccc;
  .video-img-wrap {
    padding: px2rem(32);
    .video-img {
      width: px2rem(260);
      height: px2rem(146);
      background-color: #f06;
    }
  }
  // 右侧介绍部分
  .video-intro {
    width: px2rem(376);
    height: px2rem(146);
    padding-top: px2rem(22);
    .video-title {
      font-size: px2rem(28);
      padding-bottom: px2rem(17);
    }
    .video-para {
      font-size: px2rem(22);
    }
    .video-time {
      color: #757575;
      font-size: px2rem(22);
    }
    .clock-time {
      font-size: px2rem(22);
      color: #757575;
    }
  }
}
</style>
