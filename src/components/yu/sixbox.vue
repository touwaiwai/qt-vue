<template>
  <div class="sixbox-a">
    <div class="qt-vip-main-shen">
      <span>热门必听</span>
      <span class="dayu">></span>
    </div>
    <div class="qt-vip-main-shen-box1">
      <div class="qt-vip-main-shen-smallbox">
        <img src="../../assets/yu-img/12.jpg" alt />
        <span>丰田小贼，卷入皇室秘闻</span>
      </div>
      <div class="qt-vip-main-shen-smallbox">
        <img src="../../assets/yu-img/13.jpg" alt />
        <span>为救我，爷爷给我娶了...</span>
      </div>
      <div class="qt-vip-main-shen-smallbox">
        <img src="../../assets/yu-img/14.jpg" alt />
        <span>曾国藩：近代历史上，第一个...</span>
      </div>
    </div>
    <div class="qt-vip-main-shen-box1 qt-vip-main-shen-box2">
      <div class="qt-vip-main-shen-smallbox">
        <img src="../../assets/yu-img/15.jpg" alt />
        <span>赵丽颖，冯绍峰燃情之作！</span>
      </div>
      <div class="qt-vip-main-shen-smallbox">
        <img src="../../assets/yu-img/16.jpg" alt />
        <span>故宫给孩子的礼物</span>
      </div>
      <div class="qt-vip-main-shen-smallbox">
        <img src="../../assets/yu-img/17.jpg" alt />
        <span>当红明星为什么都找他看病</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sixbox",
  data: function(){
	  return{
		  
	  }
  },
  components: {
	  
  }
}
</script>
<style scoped="scoped">
	@import 'http://at.alicdn.com/t/font_1344490_6vwa5npof5g.css';
        .qt-vip-main-shen {
            width: 3.42rem;
            height: 0.56rem;
            margin: 0 auto;
            font-size: .23rem;
            line-height: .56rem;
        }

        .qt-vip-main-shen-box1 {
            width: 3.42rem;
            height: 1.5rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
        }

        .qt-vip-main-shen-box2 {
            margin-top: .18rem;
        }

        .qt-vip-main-rb {
            width: 3.42rem;
            height: 0.56rem;
            margin: 0 auto;
            font-size: .23rem;
            line-height: .56rem;
        }

        .qt-vip-main-shen-smallbox {
            width: 1.05rem;
            height: 100%;
            font-size: .14rem;
        }

        .qt-vip-main-shen-smallbox img {
            width: 1.05rem;
            height: 1.05rem;
        }

        .qt-vip-main-shen-box3 {
            height: 1.4rem;
        }

        .qt-vip-main-shen-box3 img {
            width: 100%;
            height: 100%;
        }
		.dayu{
			float: left;
			font-size: 0.25rem;
			margin-top: -0.57rem;
			margin-left: 1rem;
		}
		.sixbox-a{
			padding-top: 0.1rem;
		}
</style>
