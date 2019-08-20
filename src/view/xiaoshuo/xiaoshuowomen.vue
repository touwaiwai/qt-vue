<template>
	<div class="women">
		<qtbanner :imglist='imglist'></qtbanner>
		<azZhuanti></azZhuanti>
		<ul>
			<router-link class="zi" v-for="(item,index) in tabList" :to="item.id" :key="index" activeClass='active'>
			{{item.title}}                                           
			 </router-link>
		</ul>
		<router-view></router-view>
		<div class="kong"></div>
	</div>
</template>

<script>
	import azZhuanti from '../../components/azjp/azZhuanti';
	import qtbanner from '../../components/public/qtbanner.vue';
	
	export default {
		name:'xiaoshuowomen',
		data:function(){
			return {
					imglist:[
					'../../static/img/banner/1.jpg',
				    '../../static/img/banner/2.jpg',
				    '../../static/img/banner/3.jpg',
					],
					 tabList: [
				      { id: "/index/xiaoshuo/xiaoshuowomen/womentuijian", title: "推荐"},
				      { id: "/index/xiaoshuo/xiaoshuowomen/womentchangxiao", title: "畅销" },
				      { id: "/index/xiaoshuo/xiaoshuowomen/guyan", title: "古言" },
						{ id: "/index/xiaoshuo/xiaoshuowomen/xianyan", title: "现言" },
						{ id: "/index/xiaoshuo/xiaoshuowomen/yingyin", title: "影视" },
						{ id: "/index/xiaoshuo/xiaoshuowomen/zongcai", title: "总裁" },
						{ id: "/index/xiaoshuo/xiaoshuowomen/zhufu", title: "主妇" },
				    ]
					}
		},
		components:{
			azZhuanti,qtbanner
		}

	}	
</script>

<style scoped="scoped">
	ul{
		display: -webkit-flex;
		
	}
	.zi{
		font-size: 0.14rem;
		margin-left:0.1rem;
		color: black;
	}
	.active{
		color: red;
		border-bottom:2px solid red;
	}
	
	.kong{
		padding-bottom: 0.6rem;
	}
</style>
