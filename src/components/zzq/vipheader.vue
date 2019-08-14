<template>
  <div class="header">
        <div class="qt-header-box1">
            <span style="color:#c1a445">推荐</span>
            <i class="iconfont icon-search" style="color:#825a1d;font-size: .18rem"></i>
        </div>
        <div class="qt-header-box2">
            <div style="height: 100%;">
                <img src="../../assets/img/vip/vip-27.jpg" alt="">
                <span style="font-size: .14rem;display: block">登陆享7天超级会员</span>
            </div>
            <button style="background-color:#fde8bd;color:#825a1d;font-size: .12rem">开通</button>
        </div>
    </div>
</template>
<script>
export default {
  name:'vipheader',
  data:function(){
    return {

    }
  }
}
</script>
<style lang="" scoped>
  .header {
            height: 0.65rem;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
        }
  .qt-header-box1 {
            width: 3.42rem;
            height: 0.3185rem;
            margin: 0 auto;
            font-size: .2rem;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }

        .qt-header-box2 {
            width: 3.42rem;
            height: 0.335rem;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .qt-header-box2 div{
            display: flex;
            align-items: center;
        }
        .qt-header-box2 div img {
            height: 0.2rem;
            width: 0.2rem;
            display: block;
        }
        .qt-header-box2 button{
            width: 0.4rem;
            height: 0.2rem;
            border:0px;
            border-radius: .1rem;
        }
</style>
