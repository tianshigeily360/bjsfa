<template>
  <div class="shopsignin">
    <TopHeader title="商店签到">
      <div slot="r">
        <i class="icon iconfont icon-duigou"></i>
      </div>
    </TopHeader>

    <input
      id="fileInput"
      type="file"
      accept="image/*"
      name="imgF"
      ref="fileInput"
      @change="fileSelect"
      class="file"
    />
    <div class="photo-wrap" @click="upload">
      <div class="camera-box img-item">
        <img class="icon-camera" src="../../assets/img/camera.png" alt="" />
        <span class="camer-text">拍摄照片</span>
      </div>
      <div class="img-item" v-for="item in imgList" :key="item.url">
        <img class="IMG" :src="item.url" alt="" />
      </div>
    </div>
    <h3 class="remark">备注:</h3>
    <textarea placeholder="点击填写备注~"></textarea>
  </div>
</template>

<script>
import axios from "axios";
import TopHeader from "../../components/TopHeader";
export default {
  name: "shopsignin",
  data() {
    return {
      imgList: []
    };
  },
  methods: {
    upload() {
      this.$refs.fileInput.click();
    },
    fileSelect(e) {
      let formdata = new FormData();
      formdata.append("imgF", e.target.files[0]);
      //在change事件,e.target拿到的是input文本框
      axios({
        url: "http://N.HAMKD.com/api/upload",
        data: formdata,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
        .then(res => {
          this.imgList.push({
            url: "http://N.HAMKD.com" + res.data.img
          });
        })
        .catch(() => {
          alert("上传失败");
        });
    }
  },
  components: {
    TopHeader
  }
};
</script>

<style lang="scss" scoped>
#fileInput {
  position: absolute;
  height: 0;
  width: 0;
  visibility: hidden;
}
.photo-wrap {
  overflow: hidden;
  // padding: px2rem(28) px2rem(8);
  // box-sizing: border-box;
  // display: flex;
  // width: 100%;
  // justify-content: flex-start;
  // justify-content: flex-start;
  // flex-wrap: wrap;

  .img-item {
    width: px2rem(220);
    height: px2rem(220);
    border: 2px solid #dddddd;
    margin: px2rem(10);
    float: left;
    // position: relative;
    .icon-camera {
      padding-left: px2rem(80);
      margin-bottom: px2rem(10);
    }
    .camer-text {
      display: inline-block;
      text-align: center;
      font-size: px2rem(24);
      width: px2rem(100);
      color: #000;
      margin-left: px2rem(64);
    }
  }

  .camera-box {
    padding-top: px2rem(72);
    height: px2rem(220-72);
  }

  .IMG {
    width: px2rem(220);
    height: px2rem(220);
  }
}
.remark {
  height: px2rem(68);
  line-height: px2rem(68);
  font-size: px2rem(24);
  padding-left: px2rem(29);
  background-color: #fafafa;
  border: 2px solid #f1f1f1;
}
textarea {
  height: px2rem(206);
  border-bottom: 2px solid #f1f1f1;
  width: 100%;
  font-size: px2rem(22);
  padding: px2rem(20) 0 0 px2rem(20);
}
</style>
