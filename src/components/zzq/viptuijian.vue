<template>
  <div class="qt-vip-main-tj">
    <div class="qt-vip-main-tj-box1">
      <img src="../../assets/img/vip/vip-7.jpg" alt />
    </div>
    <div class="qt-vip-main-tj-box1">
      <img src="../../assets/img/vip/vip-8.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "viptuijian",
  data: function() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.qt-vip-main-tj {
  width: 100%;
  height: 0.83rem;
  /* 渐变色 */
  background-image: linear-gradient(to bottom, #fff 0%, #fef8e9 100%);
  display: flex;
  justify-content: space-around;
}

.qt-vip-main-tj-box1 {
  width: 1.62rem;
  height: 0.65rem;
  border: 1px solid #fae3ba;
  border-radius: 0.08rem;
  line-height: 0;
}

.qt-vip-main-tj-box1 img {
  width: 100%;
  height: 100%;
}
</style>
