<template>
	<div class="reting">
		<sixbox :sixdatas='sixdatas'></sixbox>
	</div>

</template>

<script>
	import sixbox from '../../components/yu/sixbox';
	export default{
		data:function(){
			return{
				sixdatas:[
					{
						"id":"热门必听",
						"content":[
							{
								"img":'../../../static/yuimg/wh-34.jpg',  //对应图片
								"title":"听红楼梦,懂的生命的悲哀",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							},
							{
								"img":'../../../static/yuimg/wh-35.jpg',  //对应图片
								"title":"跟他比，权利的游戏只是小儿科",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							},
							{
								"img":'../../../static/yuimg/wh-36.jpg',  //对应图片
								"title":"北京猿人都被同类吃掉了？？",    //标题
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
							"img":'../../../static/yuimg/wh-12.jpg',  //对应图片
							"title":"端午节背后的屈原是怎样的人",    //标题
							"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
							"loopnumber": "2417.0万",           //播放量
							"setnumber":"36"      //一共有多少期
							},
							{
								"img":'../../../static/yuimg/wh-33.jpg',  //对应图片
								"title":"三千年前没能留下旋律的绝唱",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							}
						]
					},	
					
					{
						"id":"诗歌美文",
						"content":[
							{
								"img":'../../../static/yuimg/wh-32.jpg',  //对应图片
								"title":"美学布道者,与你漫步艺术殿堂",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							},
							{
								"img":'../../../static/yuimg/wh-31.jpg',  //对应图片
								"title":"过不好又离不了的生活该怎么办",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							},
							{
								"img":'../../../static/yuimg/wh-30.jpg',  //对应图片
								"title":"听金刚经。参悟心不累的活法",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							},
							{
								"img":'../../../static/yuimg/wh-33.jpg',  //对应图片
								"title":"三千年前没能留下旋律的绝唱",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							},
							{
								"img":'../../../static/yuimg/wh-22.jpg',  //对应图片
								"title":"人生难得，佛法无边",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							},
							{
							"img":'../../../static/yuimg/wh-11.jpg',  //对应图片
							"title":"深入敌后的一支奇兵",    //标题
							"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
							"loopnumber": "2417.0万",           //播放量
							"setnumber":"36"      //一共有多少期
							}
				
						]
					},	
					
					{
						"id":"国学经典",
						"content":[
							{
								"img":'../../../static/yuimg/wh-28.jpg',  //对应图片
								"title":"美学布道者,与你漫步艺术殿堂",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							},
							{
								"img":'../../../static/yuimg/wh-27.jpg',  //对应图片
								"title":"大日本帝国，能不能万岁？",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							},
							{
								"img":'../../../static/yuimg/wh-26.jpg',  //对应图片
								"title":"揭示历史文明的底层逻辑",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							},
							{
								"img":'../../../static/yuimg/wh-25.jpg',  //对应图片
								"title":"怎么提升别人对你的第一印象",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							},
							{
								"img":'../../../static/yuimg/wh-24.jpg',  //对应图片
								"title":"易经中的64个人生智慧",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							},
							{
							"img":'../../../static/yuimg/wh-23.jpg',  //对应图片
							"title":"唐诗三百首，你会背诵几首？",    //标题
							"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
							"loopnumber": "2417.0万",           //播放量
							"setnumber":"36"      //一共有多少期
							}
					
						]
					},	
					
					{
						"id":"畅销精品",
						"content":[
							{
								"img":'../../../static/yuimg/wh-18.jpg',  //对应图片
								"title":"一禅, 带你上王者 ",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							},
							{
								"img":'../../../static/yuimg/wh-17.jpg',  //对应图片
								"title":"少林七十二绝技,在线讲解",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							},
							{
								"img":'../../../static/yuimg/wh-19.jpg',  //对应图片
								"title":"揭示历史文明的底层逻辑",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							},
							{
								"img":'../../../static/yuimg/wh-20.jpg',  //对应图片
								"title":"老朋友，好久不见",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							},
							{
								"img":'../../../static/yuimg/wh-21.jpg',  //对应图片
								"title":"读懂自己的人生。",    //标题
								"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
								"loopnumber": "2417.0万",           //播放量
								"setnumber":"36"      //一共有多少期
							},
							{
							"img":'../../../static/yuimg/wh-22.jpg',  //对应图片
							"title":"改变中国从中庸入手",    //标题
							"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
							"loopnumber": "2417.0万",           //播放量
							"setnumber":"36"      //一共有多少期
							}
					
						]
					},	
					]
			}
			
		},
		components:{
			sixbox
		}
	}
</script>

<style>
</style>
