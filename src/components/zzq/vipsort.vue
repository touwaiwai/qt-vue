<template>
  <div class="qt-vip-main-sort">
    <div class="qt-vip-main-sort-box">
      <img src="../../assets/img/vip/vip-2.jpg" alt />
      <span>每日签到</span>
    </div>
    <div class="qt-vip-main-sort-box">
      <img src="../../assets/img/vip/vip-3.jpg" alt />
      <span>积分商城</span>
    </div>
    <div class="qt-vip-main-sort-box">
      <img src="../../assets/img/vip/vip-4.jpg" alt />
      <span>会员特惠</span>
    </div>
    <div class="qt-vip-main-sort-box">
      <img src="../../assets/img/vip/vip-5.jpg" alt />
      <span>联合会员</span>
    </div>
    <div class="qt-vip-main-sort-box">
      <img src="../../assets/img/vip/vip-6.jpg" alt />
      <span>全部内容</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'vipsort',
  data:function(){
      return{

      }
  },
  components:{

  }
}
</script>
<style lang="">
  .qt-vip-main-sort {
            width: 3.5rem;
            height: 0.95rem;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: .14rem;
        }

        .qt-vip-main-sort-box {
            width: .6rem;
            height: .6rem;
            line-height: 0;
            position: relative;
        }

        .qt-vip-main-sort-box img {
            width: .37rem;
            height: .37rem;
            display: block;
            margin: 0 auto;
        }

        .qt-vip-main-sort-box span {
            position: absolute;
            bottom: .05rem;
            left: 0;
        }
</style>
