<template>
	<div>
		<qtbanner :imglist='imglist'></qtbanner>
		<fenlei :navlist='navlist'></fenlei>
		<v-three :datas="datas"></v-three>
		<a-three :datas="datas"></a-three>
	</div>
</template>

<script>
	import qtbanner from '@/components/public/qtbanner'
	import fenlei from '@/components/public/fenlei'
	import vThree from '@/components/public/vThree'
	import aThree from '@/components/public/aThree'
	export default {
		name: 'tuijian',
		data:function(){
			return {
					imglist:['../../../static/img/lishi/07c4 (2).jpg','../../../static/img/lishi/07c4 (3).jpg','../../../static/img/lishi/07c4 (6).jpg','../../../static/img/lishi/07c4 (7).jpg','../../../static/img/lishi/07c4 (8 ).jpg'],
					navlist:[{
						title: "排行榜",
						path: "/",
						id: '../../../static/img/lishi/ls-xt1.jpg'
					},
					{   
						title: "纪录片",
						path: "/VIP",
						id: '../../../static/img/lishi/ls-xt2.jpg'
					},
					{
						title: "百家讲坛",
						path: "/hdsave",
						id: '../../../static/img/lishi/ls-xt3.jpg'
					},
					{
						title: "档案秘闻",
						path: "/listen",
						id: '../../../static/img/lishi/ls-xt4.jpg'
					},
					{
						title: "全部",
						path: "/mine",
						id: '../../../static/img/lishi/ls-xt5.jpg'
					}
				],
				datas:[
			{
			"id":"热门必听",
			"content":[
				{
					"img":"../../../static/img/lishi/1.jpg",  //对应图片
					"title":"听蒋勋为您细说红楼梦那些...",    //标题
					"text":"听蒋勋为您细说红楼梦那些... ",    //简要文本介绍
					"loopnumber": "2.5亿",           //播放量
					"setnumber":"36"     //一共有多少期
				},
				{
					"img":"../../../static/img/lishi/2.jpg",   //对应图片
					"title":"120513期 王自健",    //标题
					"text":"看战国七雄如 混混如何混成..",    //简要文本介绍
					"loopnumber": "2417.0万",           //播放量
					"setnumber":"36"     //一共有多少期
				},
				{
					"img":"../../../static/img/lishi/3.jpg",  //对应图片
					"title":"第150期：最有情怀的解读《星际...",    //标题
					"text":"魏忠贤：一个混混如何混成",    //简要文本介绍
					"loopnumber": "2417.0万",           //播放量
					"setnumber":"36"      //一共有多少期
				}
			]
		},
		{
			"id":"付费精品",
			"content":[
				{
				"img":"../../../static/img/lishi/4.jpg",   //对应图片
					"title":"张远山：13万小时读书经验分享",    //标题
					"text":"袁世凯:窃国    大盗还是共和",    //简要文本介绍
					"loopnumber": "2417.0万",           //播放量
					"setnumber":"36"      //一共有多少期
				},
				{
					"img":"../../../static/img/lishi/5.jpg",   //对应图片
					"title":"做个明白人",    //标题
					"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
					"loopnumber": "2417.0万",           //播放量
					"setnumber":"36"      //一共有多少期
				},
				{
					"img":"../../../static/img/lishi/6.jpg",   //对应图片
					"title":"2008年：众志成城救援雪灾地震",    //标题
					"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
					"loopnumber": "2417.0万",           //播放量
					"setnumber":"36"      //一共有多少期
				}
			]
		}	
	]

					}
		},
		components:{
		      qtbanner,fenlei,vThree,aThree
		}
	}
</script>

<style>
</style>
