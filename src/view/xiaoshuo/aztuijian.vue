<template>
	<div class="tuijian">
		<v-three :datas='datas'></v-three>
		<a-three :datas='datas'></a-three>
		<v-three :datas='datas'></v-three>
		<a-three :datas='datas'></a-three>
	</div>
</template>

<script>
	import aThree from '@/components/public/aThree'
	import vThree from '@/components/public/vThree'
	
	
	
	
	
	
	export default{
		name:'aztuijian',
		data(){
			return {
				imglist:['1','2','3'],
				navlist:[{
						title: "最热相声",
						path: "/",
						id: '../../../static/img/xsxp/xsxp-1.jpg'
					},
					{
						title: "大师典藏",
						path: "/VIP",
						id: '../../../static/img/xsxp/xsxp-2.jpg'
					},
					{
						title: "郭德纲",
						path: "/hdsave",
						id: '../../../static/img/xsxp/xsxp-3.jpg'
					},
					{
						title: "爆笑小品",
						path: "/listen",
						id: '../../../static/img/xsxp/xsxp-4.jpg'
					},
					{
						title: "经典必听",
						path: "/mine",
						id: '../../../static/img/xsxp/xsxp-5.jpg'
					}
				],
				datas:[
							{
							"id":"个性推荐",
							"content":[
								{
									"img":"../../../static/img/tuijian/a1.jpg",  //对应图片
									"title":"为什么杨幂会躺枪？因为，她是...",    //标题
									"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"     //一共有多少期
								},
								{
									"img":"../../../static/img/tuijian/a1.jpg",  //对应图片
									"title":"120513期 王自健",    //标题
									"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"     //一共有多少期
								},
								{
									"img":"../../../static/img/tuijian/a1.jpg",  //对应图片
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
									"img":"../../../static/img/tuijian/a1.jpg",  //对应图片
									"title":"张远山：13万小时读书经验分享",    //标题
									"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"      //一共有多少期
								},
								{
									"img":"../../../static/img/tuijian/a1.jpg",  //对应图片
									"title":"做个明白人",    //标题
									"text":"真实历史改编，深入敌后的一支奇兵",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"      //一共有多少期
								},
								{
									"img":"../../../static/img/tuijian/a1.jpg",  //对应图片
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
			aThree,vThree
		}
	}
</script>

<style scoped="scoped">
	
</style>
