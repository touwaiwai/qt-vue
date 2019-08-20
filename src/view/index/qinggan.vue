<template>
	<div>
		
		<qtbanner :imglist='imglist'></qtbanner>
		<fenlei :navlist='navlist'></fenlei>
		<a-three :datas='datas'></a-three>	
		<!-- <v-three :datas='datas'></v-three> -->
		
	</div>
</template>

<script>
	import qtbanner from '@/components/public/qtbanner'
	import fenlei from '@/components/public/fenlei'
	import aThree from '@/components/public/aThree'
	import vThree from '@/components/public/vThree'
	export default{
		name:'qinggan',
		data(){
			return {
				imglist:[
					'../../../static/img/qinggan/banner/1.jpg',
					'../../../static/img/qinggan/banner/2.jpg',
					'../../../static/img/qinggan/banner/3.jpg',
					'../../../static/img/qinggan/banner/4.jpg',
				],
				navlist:[{
						title: "婚姻调解",
						path: "/",
						id: '../../../static/img/qinggan/1.png'
					},
					{
						title: "失恋治愈",
						path: "/VIP",
						id: '../../../static/img/qinggan/2.png'
					},
					{
						title: "热门排行",
						path: "/hdsave",
						id: '../../../static/img/qinggan/3.png'
					},
					{
						title: "睡前必听",
						path: "/listen",
						id: '../../../static/img/qinggan/4.png'
					},
					{
						title: "全部",
						path: "/mine",
						id: '../../../static/img/qinggan/5.png'
					}
				],
				datas:[
							{
							"id":"精品排行",
							"content":[
								{
									"img":"../../../static/img/qinggan/content/1.jpg",  //对应图片
									"title":"十点读书",    //标题
									"text":"比林徽因大气，比宋美龄有才，她才是中国最有风骨的女先生-度公子",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"     //一共有多少期
								},
								{
									"img":"../../../static/img/qinggan/content/r.jpg",  //对应图片
									"title":"蕊希电台",    //标题
									"text":"听她的声音，会上瘾",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"     //一共有多少期
								},
								{
									"img":"../../../static/img/qinggan/content/3.png",  //对应图片
									"title":"沐语",    //标题
									"text":"vol.390回来吧",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"      //一共有多少期
								}
							]
						},
						{
							"id":"今日力荐",
							"content":[
								{
									"img":"../../../static/img/qinggan/content/6.jpg",  //对应图片
									"title":"你在烦恼什么，亲爱的",    //标题
									"text":"如果有一天，我不敢再粘你了",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"      //一共有多少期
								},
								{
									"img":"../../../static/img/qinggan/content/live.jpg",  //对应图片
									"title":"人生哲理|10分钟提升智慧",    //标题
									"text":"259.不必为勇敢道歉",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"      //一共有多少期
								},
								{
									"img":"../../../static/img/qinggan/content/4.jpg",  //对应图片
									"title":"暴风说电台",    //标题
									"text":"晨风20年解析情感治愈你的烦恼",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"      //一共有多少期
								}
							]
						}	,
						{
							"id":"心灵加油站",
							"content":[
								{
									"img":"../../../static/img/qinggan/content/7.jpg",  //对应图片
									"title":"夜听，让更多的家庭越来越幸福",    //标题
									"text":"依偎在你身旁，就是最好的模样",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"      //一共有多少期
								},
								{
									"img":"../../../static/img/qinggan/content/8.png",  //对应图片
									"title":"傅小米",    //标题
									"text":"永远记得...",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"      //一共有多少期
								},
								{
									"img":"../../../static/img/qinggan/content/9.jpg",  //对应图片
									"title":"依米阳光",    //标题
									"text":"【城市陌客】vol.318《流浪地球》",    //简要文本介绍
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
