<template>
	<div class="shengbei">
		<!-- <qheader></qheader> -->
	    <!-- header部分头部 -->
	    <header>
	        <a href="#"><i class="iconfont icon-right-copy"></i></a>
	        <a href="#"><i class="iconfont icon-fenxiang"></i></a>
	        <a href="#"><i class="iconfont icon-sandian"></i></a>
	    </header>
	    <!-- 播放页面 -->
	    <article>
	        <h2>三侠五义  第一回</h2>
	        <div class="lcm">
	            <div class="mulriple">
	                <span>倍速</span>
	                <i class="jt"></i>
	            </div>
	            <div class="view-counts">
	                <i class="iconfont icon-bofang2"></i>
	                <span>1699.9万</span>
	            </div>
	        </div>
	        <img src="../../assets/img/zhuangji.jpg" alt="">
	    </article>
	    <!--	播放及进度条-->
	    <div class="player">
	        <div class="progressbar">

	        </div>
	<!--        播放-->
	        <div class="transmit">
	            <div class="nling">
	                <span class="iconfont icon-naoling"></span>
	                <p>定时关闭</p>
	            </div>
	            <div class="bf">
	                <i class="iconfont icon-shangyiqu"></i>
	                <i id="denghao" class="iconfont icon-bofang1"></i>

	<!--                <i class="iconfont icon-bofang2"></i>-->
	                <i class="iconfont icon-shangyiqu-copy"></i>
	            </div>
	            <div class="lieb">
	                <span id="biao" class="iconfont icon-bofangye-bofangliebiao"></span>
	                <p>定时关闭</p>
	            </div>
	        </div>
	    </div>
	    <!--	专辑-->
	    <div class="special">
	        <img src="../../assets/img/zhuangji.jpg" alt="">
	        <p>单田芳 : 三侠五义</p>
	        <span>收藏专<br/>辑</span>
	    </div>
	    <!--	相关推荐-->
	    <div class="nominat">
        <h3>相关推荐</h3>
        <div class="chunk">
          <p>单田芳</p>
          <p>开封府</p>
          <p>热门推荐</p>
        </div>
	    </div>
	    <!--	横向盒子-->
	    <div class="play-bigbox">
        div.
	    </div>
	    <!--	评论-->
	    <div class="observer">

	    </div>
	</div>
</template>

<script>
	import '../../assets/css/index.css';
	// import qheader from 'public/qheader';
		export default {
			name:'courseliste',
			data:function(){
				return {
				}
			},
			components:{
			      // qheader

			}
	}
</script>

<style scoped>

     @import "http://at.alicdn.com/t/font_1344862_t79j60hx45.css";
	/*@import '../../assets/icofont/iconfont.css';*/
	/*header部分*/
	header{
	  width: 100%;
	  height: .55rem;
	  display: flex;
	  justify-content: space-between;
	  /*background: blueviolet;*/
	}

	header .icon-right-copy{
	  color: #333333;
	  font-size: .2rem;
	  font-weight: 900;
	  line-height:.55rem;
	  margin-left: .18rem;

	}
	header .icon-fenxiang{
	  color: #333333;
	  font-size: .2rem;
	  font-weight: 900;
	  line-height:.55rem;
	  margin-left: 2.45rem;
	}
	header .icon-sandian{
	  color: #333333;
	  font-size: .2rem;
	  font-weight: 900;
	  line-height:.55rem;
	  margin: 0 .22rem;

	}

	/*播放页面*/
	article{
	  width: 100%;
	  /*height: 3.25rem;*/
	  margin: 0 auto;
	}
	article h2{
	  font-size:.24rem;
	  text-align: center;
	  padding-bottom: .07rem;
	}
	.lcm{
	  display: flex;
	  justify-content: center;
	  margin-bottom: .075rem;
	}
	article .lcm .mulriple{
	  display: flex;
	  justify-content: center;
	  align-content: center;
	  width: .52rem;
	  height: .22rem;
	  border: #adadad .01rem solid ;
	  border-radius: .1rem;
	}
	article .lcm .mulriple span{
	  font-size: .12rem;
	  color: #adadad;
	  line-height: .22rem;
	}
	.jt{
	  margin: .08rem 0 0 .02rem;
	  border-width: .04rem;
	  border-style: solid;
	  border-color:#adadad transparent  transparent  transparent;
	}
	.view-counts{
	  display: flex;
	  justify-content: center;
	  align-content: center;
	  margin: .04rem 0 0 .35rem;

	}
	.icon-bofang2{
	  color: #adadad;
	  font-size: .12rem;
	}
	article .lcm .view-counts span{
	  color: #adadad;
	  font-size: .12rem;
	}
	article  img{
	  height: 2.82rem;
	  width: 2.82rem;
	  margin: 0 auto;
	}

	/*播放及进度条*/
	.player{
	  width: 100%;
	  height: 1.25rem;
	  margin-bottom: .19rem;
	}
	.progressbar{
	  width: 100%;
	  height: .49rem;
	}
	.transmit{
	  display: flex;
	  justify-content: space-between;
	  align-content: center;

	}
	.transmit span{
	  font-size: .25rem;
	  color: #919191 ;
	  text-align: center;
	  font-weight:normal;
	  margin-top: .16rem;
	}
	.nling {
	  margin-left: .18rem;
	}
	.lieb{
	  margin-right: .18rem;
	}
	.transmit p{
	  font-size: .13rem;
	  color: #919191;
	}
	.bf{
	  display: flex;
	  justify-content: center;
	}
	.bf .iconfont {
	color: #fd5353;
	  height: .55rem;
	  line-height: .55rem;
	  font-size: .17rem;

	}
	#denghao{
	  height: .55rem;
	  width: .55rem;
	  border-radius: 50%;
	  background-image: linear-gradient(to bottom , #ff7c7d, #ff333c);
	  margin: 0 .4rem;
	  line-height: .55rem;
	  text-align: center;
	  color: white;
	  font-size:.21rem ;
	}

	/*专辑*/
	.special{
	  width: 100%;
	  height: .575rem;
	  display: flex;
	  justify-content: space-between;
	  align-content: center;
	}
	.special img{
	  display: block;
	  width: .46rem;
	  height: .46rem;
	  margin-left: .18rem;

	}
	.special p{
	  font-size: .17rem;
	  letter-spacing:.02rem;
	  line-height:.575rem ;
	  margin-right: .25rem;
	}
	.special span{
	  height:.48rem ;
	  width: .85rem;
	  border-radius: .23rem;
	  border: #ffd2d2 solid 1px;
	  margin-right: .18rem;
	  font-size: .17rem;
	  text-align: center;
	  letter-spacing:.02rem;
	  color: #ff3b43;
	  padding-top: .09rem;
	}

	/*相关推荐*/
	.nominat{
	  width: 100%;
	  height: .975rem;
    margin-left: .18rem;
	}
  .nominat h3{
    font-size: .25rem;
    margin-top: .14rem;
  }
  .chunk{
    margin-top: .15rem;
    display: flex;
  }
  .chunk p {
    font-size: .15rem;
    padding: .05rem  .12rem;
    margin: .05rem;
    border: #ececec solid 1px;
    border-radius: 15px;

  }




	/*横向盒子*/
	.h-bigbox{
	  width: 100%;
	  height: 4.63rem;
	  background: #5b55ff;
	}
	/*评论*/
	.observer{
	  width: 100%;
	  height: 4.63rem;
	  background: #ff5c22;
	}
</style>
