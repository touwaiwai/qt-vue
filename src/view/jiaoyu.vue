<template>
	<div>
<!-- 		<div class="dinwei">
			<qheader></qheader>
			<search></search>
		</div>
		<div class="kondiv"></div> -->
		<qtbanner :imglist='imglist'></qtbanner>
		<fenlei :navlist='navlist'></fenlei>
		<azZhuanti></azZhuanti>
		<sixbox></sixbox>
		<sixbox></sixbox>
		<vThree></vThree>
		<azSpecialTopic></azSpecialTopic>
		<vThree></vThree>
		<aThree></aThree>
		<aThree></aThree>
		<aThree></aThree>
		
		<foot></foot>
	</div>
</template>

<script>
	import qheader from'../components/public/qheader';
	import search from'../components/public/search';
	import qtbanner from'../components/public/qtbanner';
	import fenlei from'../components/public/fenlei';
	import azZhuanti from'../components/yu/azZhuanti';
	import sixbox from'../components/yu/sixbox';
	import vThree from'../components/yu/vThree';
	import azSpecialTopic from'../components/yu/azSpecialTopic';
	import aThree from'../components/yu/aThree';
	import foot from'../components/public/foot';
	
export default {
	  name: 'jiaoyu',
		data:function(){
			return{
			imglist:[
				'../../static/yuimg/19.jpg',
				'../../static/yuimg/2.jpg',
				'../../static/yuimg/27.jpg',
				'../../static/yuimg/1.jpg',
				'../../static/yuimg/3.jpg',
			],
			navlist:[
				{
					title: "最热专辑",
					path: "/",
					id: '../../../static/yuimg/20.jpg'
				},
				{
					title: "大咖说",
					path: "/",
					id: '../../../static/yuimg/28.jpg'
				},
				
				{
					title: "最热专辑",
					path: "/",
					id: '../../../static/yuimg/29.jpg'
				},
				
				{
					title: "中小学",
					path: "/",
					id: '../../../static/yuimg/30.jpg'
				},
				
				{
					title: "筛选",
					path: "/",
					id: '../../../static/yuimg/31.jpg'
				}
			]

			} 
		},
		
components:{
	
		qheader,search,fenlei,azZhuanti,sixbox,vThree,azSpecialTopic,aThree,foot,qtbanner
	}
}

</script>

<style scoped="scoped">
	.dinwei{
		position: fixed;
		background:white;
		z-index: 99999;
	}
	.kondiv{
		padding-top:0.01rem;
	}
</style>

