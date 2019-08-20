<template>
	<div>
		
		<qtbanner :imglist='imglist'></qtbanner>
		<fenlei :navlist='navlist'></fenlei>
		<v-three :datas='datas'></v-three>
		<a-three :datas='datas'></a-three>	
	</div>
</template>

<script>
	import qtbanner from '@/components/public/qtbanner'
	import fenlei from '@/components/public/fenlei'
	import aThree from '@/components/public/aThree'
	import vThree from '@/components/public/vThree'
	export default{
		name:'ertong',
		data(){
			return {
				imglist:[
					'../../../static/img/banner/1.jpg',
					'../../../static/img/banner/2.jpg',
					'../../../static/img/banner/3.jpg',
				],
				navlist:[{
						title: "看绘本",
						path: "/",
						id: '../../../static/img/ertong/1.png'
					},
					{
						title: "超级飞侠",
						path: "/VIP",
						id: '../../../static/img/ertong/2.png'
					},
					{
						title: "小猪佩奇",
						path: "/hdsave",
						id: '../../../static/img/ertong/3.png'
					},
					{
						title: "朱小圈",
						path: "/listen",
						id: '../../../static/img/ertong/4.png'
					},
					{
						title: "全部儿童",
						path: "/mine",
						id: '../../../static/img/ertong/5.png'
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
			qtbanner,fenlei,aThree,vThree
		}
	}
</script>

<style>
</style>
