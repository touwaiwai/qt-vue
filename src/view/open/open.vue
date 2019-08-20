<template>
	<div class="shengbei">
	    <!-- header部分头部 -->
			<!-- <pinglun></pinglun> -->
	    <div class="hdsan">
	        <a href="#"><i class="iconfont icon-right-copy" @click="fanhui"></i></a>
	        <a href="#"><i class="iconfont icon-fenxiang"></i></a>
	        <a href="#"><i class="iconfont icon-sandian"></i></a>
	    </div>
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
	                <p>播放列表</p>
	            </div>
	        </div>
	    </div>
	    <!--	专辑-->
	    <div class="special">
	        <img src="../../assets/img/zhuangji.jpg" alt="">
	        <p>单田芳 : 三侠五义</p>
	        <span>收藏专<br/>辑</span>
	    </div>
	    <!-- 互动 -->
			<ul  class="qt_com">
				<li>
					<router-link to="/hdsave">
					<h4 class="com_title" >推荐</h4>
					</router-link>
				</li>
				<li>
					<router-link to="/hdsave/opinglun">
					<h4 class="com_title">评论</h4>
					</router-link>
				</li>
			</ul>
			
	    <!--显示区域-->
	    <div class="observer">
			<router-view></router-view>
	    </div>
			<!-- 底部 -->
			<ofoot></ofoot>
		
				
	</div>
	
</template>

<script>
	import aThree from '@/components/public/aThree'
	import ofoot from '@/view/open/ofoot'
		export default {
			name:'open',
			data(){
				return {
					datas:{
        //data 为主题内容
       "data":[
       		{
       		"id":"必听名著",
       		"content":[
       			{
       				"img":'../../../static/yuimg/wh-7.jpg',  //对应图片
       				"title":"揭秘《西游记》中的职场法则",    //标题
       				"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
       				"loopnumber": "2417.0万",           //播放量
       				"setnumber":"36"     //一共有多少期
       			},
       			{
       				"img":'../../../static/yuimg/wh-8.jpg',  //对应图片
       				"title":"永恒的革命之间，雨果巅峰作品",    //标题
       				"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
       				"loopnumber": "2417.0万",           //播放量
       				"setnumber":"36"     //一共有多少期
       			},
       			{
       				"img":'../../../static/yuimg/wh-9.jpg',  //对应图片
       				"title":"人性的丑陋在悲剧中张牙舞爪",    //标题
       				"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
       				"loopnumber": "2417.0万",           //播放量
       				"setnumber":"36"      //一共有多少期
       			}
       		]
       	},
       	{
       		"id":"名人解密",
       		"content":[
       			{
       				"img":'../../../static/yuimg/wh-10.jpg',  //对应图片
       				"title":"这是一种心灵的自由",    //标题
       				"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
       				"loopnumber": "2417.0万",           //播放量
       				"setnumber":"36"      //一共有多少期
       			},
       			{
       				"img":'../../../static/yuimg/wh-11.jpg',  //对应图片
       				"title":"为你还原一个青年费罗伊德",    //标题
       				"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
       				"loopnumber": "2417.0万",           //播放量
       				"setnumber":"36"      //一共有多少期
       			},
       			{
       				"img":'../../../static/yuimg/wh-12.jpg',  //对应图片
       				"title":"端午节背后的屈原是怎样的人",    //标题
       				"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
       				"loopnumber": "2417.0万",           //播放量
       				"setnumber":"36"      //一共有多少期
       			}
       		]
       	},
       							{
       		"id":"社科杂谈",
       		"content":[
       			{
       				"img":'../../../static/yuimg/wh-13.jpg',  //对应图片
       				"title":"会讲故事，能让所有的人都听你的指挥",    //标题
       				"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
       				"loopnumber": "2417.0万",           //播放量
       				"setnumber":"36"      //一共有多少期
       			},
       			{
       				"img":'../../../static/yuimg/wh-14.jpg',  //对应图片
       				"title":"葵花宝典在手，江山我有",    //标题
       				"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
       				"loopnumber": "2417.0万",           //播放量
       				"setnumber":"36"      //一共有多少期
       			},
       			{
       				"img":'../../../static/yuimg/wh-15.jpg',  //对应图片
       				"title":"许知远:那个打动我的爱情",    //标题
       				"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
       				"loopnumber": "2417.0万",           //播放量
       				"setnumber":"36"      //一共有多少期
       			}
       		]
       	}	,
       	{
       		"id":"佛理禅悟",
       		"content":[
       			{
       				"img":'../../../static/yuimg/wh-16.jpg',  //对应图片
       				"title":"分别带来的是非，不如不要",    //标题
       				"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
       				"loopnumber": "2417.0万",           //播放量
       				"setnumber":"36"      //一共有多少期
       			},
       			{
       				"img":'../../../static/yuimg/wh-17.jpg',  //对应图片
       				"title":"人生难得，佛法无边",    //标题
       				"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
       				"loopnumber": "2417.0万",           //播放量
       				"setnumber":"36"      //一共有多少期
       			},
       			{
       				"img":'../../../static/yuimg/wh-18.jpg',  //对应图片
       				"title":"沉默=不能说+不想说——不必说",    //标题
       				"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
       				"loopnumber": "2417.0万",           //播放量
       				"setnumber":"36"      //一共有多少期
       			}
       		]
       	}	
       ]
      }
				}
			},
			components:{
			     ofoot
			}	,
 			methods:{
			fanhui(){
				history.back();
			}
		}
	}
</script>

<style scoped>
@import "../../assets/icofont/iconfont.css";
	/*header部分*/
	.hdsan{
	  width: 100%;
	  /* height: .55rem; */
	  display: flex;
	  justify-content: space-between;
	  /*background: blueviolet;*/
		/* margin-top: -0.55rem; */
	}
	
	.hdsan .icon-right-copy{
	  color: #333333;
	  font-size: .2rem;
	  font-weight: 900;
	  line-height:.55rem;
	  margin-left: .18rem;
	
	}
	.hdsan .icon-fenxiang{
	  color: #333333;
	  font-size: .2rem;
	  font-weight: 900;
	  line-height:.55rem;
	  margin-left: 2.45rem;
	}
	.hdsan .icon-sandian{
	  color: #333333;
	  font-size: .2rem;
	  font-weight: 900;
	  line-height:.55rem;
	  margin: 0 .22rem;
	
	}
	
	/*播放页面*/
	article{
	  width: 100%;
	  /* height: 3.25rem; */
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
		height: 1.2rem;
		margin-bottom: .39rem;
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
	  margin-right:0.05rem;
		text-align: center;
	}
	.lieb span{
	  margin-left:0.14rem;
	}
	.transmit p{
	  font-size: .13rem;
	  color: #919191;
		
	}
	.bf{
	  display: flex;
	  justify-content: center;
		padding-top: .52rem;
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
	.nominate{
	  width: 100%;
	  height: .975rem;
	  background: #b648ff;
	}
	/*横向盒子*/
	.h-bigbox{
	  width: 100%;
	  height: 4.63rem;
	  background: #5b55ff;
	}
	/* 互动 */
	.qt_com{
		display: flex;
    justify-content: space-around;
		height:.53rem;
		line-height:.53rem;
		border:1px solid #ededed;
		margin-top: .12rem;
	}
	.com_title{
		font-size:.15rem;
	}
	
	.com_title ::after {
			content: '';
			position: absolute;
			left: -0.5rem;
			top: 1.45rem;
			bottom: 0;
			right: auto;
			height: .01rem;
			width: 9rem;
			background-color: #f05c58;
	}
	
	
	.observer{
	  width: 100%;
	  height: 4.63rem;
		padding-top: .3rem;
	}
	
	
	
</style>
