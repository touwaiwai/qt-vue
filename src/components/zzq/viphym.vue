<template>
  <div>
    <div class="qt-vip-main-hym">
      <img src="../../assets/img/vip/vip-9.jpg" alt />
    </div>
    <!-- credit----积分 -->
    <div class="qt-vip-main-credit">
      <img src="../../assets/img/vip/vip-10.jpg" alt />
      <span style="font-size: .16rem;">积分商城！等你兑换好礼</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "viphym",
  data: function() {
		return {}
	},
  components: {}
};
</script>
<style lang="" scoped>
.qt-vip-main-hym {
  width: 3.42rem;
  height: 1.39rem;
  margin: 0 auto;
}

.qt-vip-main-hym img {
  width: 100%;
  height: 100%;
}

.qt-vip-main-credit {
  width: 3.42rem;
  height: 0.5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.qt-vip-main-credit span {
  margin-left: 0.16rem;
}

.qt-vip-main-credit img {
  width: 0.26rem;
  height: 0.16rem;
}
</style>
