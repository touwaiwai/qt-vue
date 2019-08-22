<template>
	<div>
		
		<qtbanner :imglist='imglist'></qtbanner>
		<fenlei :navlist='navlist'></fenlei>
		<v-three :datas='datas'></v-three>
		<a-three :datass='datass'></a-three>	
		<!-- 刷三 -->
	</div>
</template>

<script>
	import qtbanner from '@/components/public/qtbanner'
	import fenlei from '@/components/public/fenlei'
	import aThree from '@/components/public/aThree'
	import vThree from '@/components/public/vThree'
	export default{
		name:'pingshu',
		data(){
			return {
				imglist:[ 
					"https://pic.qingting.fm/pushRecommend/2018/08/01/84830a81921205679ecbd72d4a711abe.png!800",
					"https://pic.qingting.fm/pushRecommend/2018/04/16/663a67b3f29281f50d5d3a9c982b4570.jpg!800",
					"https://pic.qingting.fm/pushRecommend/2018/07/31/60de9664ffef36c9b1eaa8864fdff553.jpg!800",
				],
				// 图标不要动
				navlist:[{
						title: "热门排行",
						path: "/",
						id: '../../../static/img/pingshu/1.png'
					},
					{
						title: "听名著",
						path: "/VIP",
						id: '../../../static/img/pingshu/2.png'
					},
					{
						title: "单田芳",
						path: "/hdsave",
						id: '../../../static/img/pingshu/3.png'
					},
					{
						title: "历史评书",
						path: "/listen",
						id: '../../../static/img/pingshu/4.png'
					},
					{
						title: "全部",
						path: "/mine",
						id: '../../../static/img/pingshu/5.png'
					}
				],
				//横三
				datas:[
							{
							"id":"小编推荐",
							"content":[
								{
									"img":"https://pic.qingting.fm/2015/0703/20150703142317525.jpg!200",  //对应图片
									"title":"单田芳：薛家将",    //标题
									"text":"薛仁贵遭皇叔陷害，三赴法场险丧性命",    //简要文本介绍
									"loopnumber": "10.2万",           //播放量
									"setnumber":"15"     //一共有多少期
								},
								{
									"img":"https://pic.qingting.fm/2017/0628/20170628164500798.jpg!200",  //对应图片
									"title":"张金山：济公传",    //标题
									"text":"痴痴傻傻心不狂，酒肉穿肠过",   //简要文本介绍
									"loopnumber": "10.2万",           //播放量
									"setnumber":"15"     //一共有多少期
								},
								{
									"img":"https://pic.qingting.fm/2016/0928/20160928102413586.jpg!200",  //对应图片
               						 "title": "单田芳：京城神探",
									  //标题
									"text":"京城中发生的惊天大案",    //简要文本介绍
									"loopnumber": "105.2万",           //播放量
									"setnumber":"36"      //一共有多少期
								}
							]
						},
						{
							"id":"刘兰芳",
							"content":[
								{
									"img":"https://pic.qingting.fm/2015/0718/20150718022915935.jpg!200",  //对应图片
									"title":"刘兰芳：岳飞传",    //标题
									"text":"十二道金牌，打不倒抗金大旗！",    //简要文本介绍
									"loopnumber": "18.0万",           //播放量
									"setnumber":"10"      //一共有多少期
								},
								{
              						"img": "https://pic.qingting.fm/2015/0330/20150330153709631.jpg!200",
									  //对应图片
									"title":"刘兰芳：大唐侠女",    //标题
									"text":"巾帼不让须眉，名将之女替父出征！",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"      //一共有多少期
								},
								{
									"img":"https://pic.qingting.fm/channel/2018/04/10/c9df070c4c73c6f59b9ed1805dded78d.jpg!200",  //对应图片
									"title":"刘兰芳：白牡丹行动",    //标题
									"text":"奉命过江走险 遇特务飞车甩谍",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"      //一共有多少期
								}
							]
						}	
					],
					datass:[
						{
							"id":"单田芳",
							"content":[
								{
									"img":"https://pic.qingting.fm/2015/0703/20150703122946175.jpg!200",  //对应图片
									"title":"单田芳：乱世枭雄",    //标题
									"text":"一门两父子，个个是传奇！",    //简要文本介绍
									"loopnumber": "18.0万",           //播放量
									"setnumber":"10"      //一共有多少期
								},
								{
              						"img": "https://pic.qingting.fm/2015/0703/20150703112834532.jpg!200",
									  //对应图片
									"title":"单田芳：龙虎风云会",    //标题
									"text":"白眉后继有人 龙吟虎啸风云会",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"      //一共有多少期
								},
								{
									"img":"https://pic.qingting.fm/2017/0209/20170209150753811.jpg!200",  //对应图片
									"title":"单田芳：小五",    //标题
									"text":"白眉英侠，独步天下",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"      //一共有多少期
								}
							]
						},
						{
							"id":"袁阔成",
							"content":[
								{
									"img":"https://pic.qingting.fm/2017/0524/20170524103201611.jpg!200",  //对应图片
									"title":"袁阔成：三国演义",    //标题,
									"text":"东汉末年分三国, 烽火连天不休",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"     //一共有多少期
								},
								{
									"img":"https://pic.qingting.fm/pushRecommend/2019/02/20/640313bd2bba0418902fa90c7c778902.jpg!200",  //对应图片
									"title":"袁阔成：三气周瑜",    //标题
									"text":"兵周郎妙计 赔了夫人又折兵",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"     //一共有多少期
								},
								{
									"img":"https://pic.qingting.fm/2016/0928/20160928164520637.jpg!200",  //对应图片
									"title":"袁阔成：碧眼金蟾",    //标题
									"text":"袁老经典公案评书",    //简要文本介绍
									"loopnumber": "2417.0万",           //播放量
									"setnumber":"36"      //一共有多少期
								}
							]
						},

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
