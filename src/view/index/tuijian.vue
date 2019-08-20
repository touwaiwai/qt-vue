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
					imglist:[
						'../../static/yuimg/wh.jpg',
						'../../static/yuimg/wenh.jpg',
						'../../static/yuimg/wenhu.jpg',
						'../../static/yuimg/wenhua.jpg',
						'../../static/yuimg/b.jpg',
					],
					navlist:[{
						title: "小说精品",
						path: "/",
						id: '../../../static/img/tuijian/tuijian-1.jpg'
					},
					{
						title: "评书",
						path: "/VIP",
						id: '../../../static/img/tuijian/tuijian-2.jpg'
					},
					{
						title: "相声小品",
						path: "/hdsave",
						id: '../../../static/img/tuijian/tuijian-3.jpg'
					},
					{
						title: "必听榜单",
						path: "/listen",
						id: '../../../static/img/tuijian/tuijian-4.jpg'
					},
					{
						title: "倾听陕西",
						path: "/mine",
						id: '../../../static/img/tuijian/tuijian-5.jpg'
					}
				],
				datas:[
			{
			"id":"个性推荐",
			"content":[
				{
					"img":"1",  //对应图片
					"title":"为什么杨幂会躺枪？因为，她是...",    //标题
					"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
					"loopnumber": "2417.0万",           //播放量
					"setnumber":"36"     //一共有多少期
				},
				{
					"img":"2",  //对应图片
					"title":"120513期 王自健",    //标题
					"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
					"loopnumber": "2417.0万",           //播放量
					"setnumber":"36"     //一共有多少期
				},
				{
					"img":"3",  //对应图片
					"title":"第150期：最有情怀的解读《星际...",    //标题
					"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
					"loopnumber": "2417.0万",           //播放量
					"setnumber":"36"      //一共有多少期
				}
			]
		},
		{
			"id":"脱口秀",
			"content":[
				{
					"img":"4",  //对应图片
					"title":"张远山：13万小时读书经验分享",    //标题
					"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
					"loopnumber": "2417.0万",           //播放量
					"setnumber":"36"      //一共有多少期
				},
				{
					"img":"5",  //对应图片
					"title":"做个明白人",    //标题
					"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
					"loopnumber": "2417.0万",           //播放量
					"setnumber":"36"      //一共有多少期
				},
				{
					"img":"6",  //对应图片
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
