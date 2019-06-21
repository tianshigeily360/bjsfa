<template>
  <div class="training-wrap">
    <div class="training-video" v-for="item in trainVideo" :key="item.id">
      <div class="video-recycle">
        <div class="video-img-wrap">
          <!-- 视频部分 -->
          <div class="video-img">
            <img :src="item.img" alt />
          </div>
        </div>
        <!-- 介绍部分 -->
        <div class="video-intro">
          <div class="video-title">
            {{ item.title }}
          </div>
          <div class="video-para">
            {{ item.text }}
          </div>
          <div class="video-time">
            {{ item.subon }}
          </div>
          <div class="time-wrap">
            <div class="icon iconfont icon-miaobiao"></div>
            <div class="clock-time">{{ item.time }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../service/api";
export default {
  name: "training-video",
  data() {
    return {
      trainVideo: []
    };
  },
  created() {
    api.trainmaterials().then(res => {
      res.data.forEach(item => {
        this.trainVideo.push(item);
      });
      console.log(this.trainVideo);
    });
  }
};
</script>
<style lang="scss" scoped>
@mixin swrap {
  font-size: px2rem(22);
}
.training-wrap {
  .training-video {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: px2rem(2) solid #ccc;
    height: px2rem(206);
    .video-recycle {
      display: flex;
      width: px2rem(657);
      height: px2rem(148);
      .video-img-wrap {
        margin-right: px2rem(22);
        .video-img {
          img {
            width: px2rem(260);
            height: px2rem(148);
            background-color: #f06;
          }
        }
      }
      // 右半部分
      .video-intro {
        .video-title {
          font-size: px2rem(28);
        }
        .video-para {
          margin-top: px2rem(8);
          @include swrap;
        }
        .video-time {
          @include swrap;
          margin: px2rem(7.5) 0;
          color: #757575;
        }
        .time-wrap {
          display: flex;
          .icon {
            @include swrap;
            font-weight: 600;
          }
          .clock-time {
            @include swrap;
            color: #757575;
            margin-left: px2rem(8);
          }
        }
      }
    }
  }
}
</style>
