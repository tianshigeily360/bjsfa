<template>
  <div class="notice">
    <TopHeader title="公司通告">
      <div slot="r"></div>
    </TopHeader>
    <div class="notice-wrap">
      <div class="notice-list">
        <div
          class="notice-item"
          v-for="item in NoticeListArr"
          :key="item.id"
        >
          <p><i class="iconfont icon-yuandian-2"></i>{{ item.title }}</p>
          <a href="#">{{ item.subon }}</a>
          <router-link
            to="/Message"
            slot="r"
            class="notice-item-r"
          >
            <i class="iconfont icon-yemiantongyong-fenye-xiayiye"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "../../components/TopHeader";
import api from "../../service/api";
export default {
  name: "Notice",
  data() {
    return {
      NoticeListArr: []
    };
  },
  created() {
    api.getNotices().then(res => {
      this.NoticeListArr = res.data;
    });
  },
  components: {
    TopHeader
  }
};
</script>

<style lang="scss" scoped>
.notice-wrap {
  .notice-list {
    .notice-item {
      position: relative;
      height: px2rem(116);
      color: #000;
      padding-left: px2rem(32);
      padding-top: px2rem(32);
      border-bottom: 1px solid #ccc;
      p {
        font-size: $text-size-mid;
        .icon-yuandian-2 {
          margin-right: px2rem(30);
          font-size: px2rem(14);
          color: #c6c6c6;
          display: inline-block;
        }
      }
      a {
        margin-left: px2rem(44);
        padding-top: px2rem(14);
        color: #757575;
        font-size: $text-size-small;
      }
      .notice-item-r {
        // float: right;
        position: absolute;
        right: px2rem(22);
        top: px2rem(48);
        .iconfont {
          font-size: px2rem(24);
        }
      }
    }
  }
}
</style>
