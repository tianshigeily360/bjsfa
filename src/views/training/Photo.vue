<template>
  <div class="picture-upload">
    <TopHead title="商店签到">
      <div slot="r">
        <div class="icon iconfont icon-duigou"></div>
      </div>
    </TopHead>
    <input
      class="file-input"
      type="file"
      accept="image/*"
      name="imgF"
      ref="fileInput"
      @change="fileSelect"
    />
    <!-- <input type="file" accept="picture" /> -->
    <!-- 图片最外层的大盒子 -->
    <div class="picture-wrap">
      <!-- 第一个 上传图片的 盒子 -->
      <div class="picture-item camera-box" @click="handleUploadImg">
        <div class="picture-first">
          <img class="icon-camera" src="../../assets/img/camera.png" alt="" />
          <div class="camera-text">拍摄图片</div>
        </div>
      </div>
      <!-- 其他图片 -->
      <div class="picture-item " v-for="item in imgList" :key="item.url">
        <img class="pic" :src="item.url" alt="" />
      </div>
      <!-- <div class="picture-item">
        <img class="pic" src="../../assets/img/dhdd.png" alt="" />
      </div>
      <div class="picture-item">
        <img class="pic" src="../../assets/img/dhdd.png" alt="" />
      </div> -->
      <div
        v-if="imgList.length !== 0"
        @click="handleDeleteImg"
        class="picture-item picture-delete"
      >
        <div>
          <img src="../../assets/img/delete.png" alt="" />
          <div class="camera-text">删除图片</div>
        </div>
      </div>
      <!-- <div class="picture-item" style="visibility: hidden"></div> -->
      <!-- 
        visibility: hidden;占据位置
        display: none; 不占位置
       -->
    </div>
    <!-- 底部备注部分 -->
    <div class="remarker">
      备注:
    </div>
    <textarea placeholder="点击填写备注～"></textarea>
  </div>
</template>
<script>
import TopHead from "../../components/TopHeader";
import axios from "axios";
export default {
  name: "picture-upload",
  components: {
    TopHead
  },
  data() {
    return {
      imgList: []
    };
  },
  methods: {
    handleUploadImg() {
      this.$refs.fileInput.click(); //触发fileInput的点击事件
    },
    handleDeleteImg() {
      this.imgList.pop();
    },
    fileSelect(e) {
      let formdata = new FormData();
      formdata.append("imgF", e.target.files[0]);
      axios({
        url: "http://192.168.1.130:8888/api/upload",
        data: formdata,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data "
        }
      })
        .then(res => {
          this.imgList.push({
            url: "http://192.168.1.130:8888" + res.data.img
          });
        })
        .catch(() => {
          alert("上传失败！");
        });
      console.log(2);
    }
    // axios({
    //   let formdata = new  FormData();
    // })
  }
};
</script>
<style lang="scss" scoped>
.picture-wrap {
  display: flex;
  // align-content: flex-start;
  flex-wrap: wrap; //自动换行
  justify-content: space-between;
  padding: px2rem(28) px2rem(28) 0 px2rem(28);
  .camera-box {
    .picture-first {
      .icon-camera {
        width: px2rem(59);
        height: px2rem(51);
      }
    }
  }

  .picture-item {
    width: px2rem(222);
    height: px2rem(222);
    border: px2rem(1) solid #ccc;
    margin-bottom: px2rem(28);
    img {
      width: 100%;
      height: 100%;
    }
    &:first-child {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: auto;
        height: auto;
      }
    }
    &.picture-delete {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        // width: auto;
        // height: auto;
        width: px2rem(56);
      }
    }
  }
}
.remarker {
  height: px2rem(70);
  background-color: #fafafa;
  padding-left: px2rem(28);
  border-top: px2rem(1) solid #f1f1f1;
  line-height: px2rem(70);
}
textarea {
  height: px2rem(206);
  border-bottom: px2rem(1) solid #ccc;
  font-size: px2rem(22);
  width: 100%; // 自适应页面宽度
  padding: px2rem(28) 0 0 px2rem(28);
  box-sizing: border-box;
  border-left: none; // 去掉默认左边边框
  border-right: none;
}
.file-input {
  position: fixed;
  left: -99999px;
}
</style>
