<template>
	<div class="xiaoshuo">
		<div class="menu">
			<router-link to="/index/xiaoshuo"><span>男生</span></router-link>
			<span>女生</span>
		</div>
		<qtbanner :imglist='imglist'></qtbanner>
		<fenlei></fenlei>
		<azZhuanti></azZhuanti>
		
		<ul>
			<router-link class="zi" v-for="(item,index) in tabList" :to="item.id" :key="index" 
				v-on:click="add(index)" activeClass="active">
			{{item.title}}                                           
			 </router-link>
			 
			 
			 
		</ul>
		<router-view></router-view>
		<div class="kong"></div>
	</div>
	
</template>


	



<script>
	import azZhuanti from '../../components/azjp/azZhuanti';
	import azSpecialTopic from '../../components/azjp/azSpecialTopic';
	import azVerticalThree from '../../components/azjp/azVerticalThree';
	import azKindThree from '../../components/azjp/azKindThree';
	import fenlei from '../../components/public/fenlei.vue';
	import qheader from '../../components/public/qheader.vue';
	import search from '../../components/public/search.vue';
	import qtbanner from '../../components/public/qtbanner.vue';
	
	
	
	export default {
		name:'xiaoshuo',
		data:function(){
			return {
					imglist:[
					'../../static/img/banner/1.jpg',
				    '../../static/img/banner/2.jpg',
				    '../../static/img/banner/3.jpg',
					],
					 tabList: [
				      { id: "/index/xiaoshuo/tuijian", title: "推荐"},
				      { id: "/index/xiaoshuo", title: "热听" },
				      { id: "/index/xiaoshuo", title: "都市" },
						{ id: "/index/xiaoshuo", title: "玄幻" },
						{ id: "/index/xiaoshuo", title: "历史" },
				    ],
				    current:0
					}
		},
		components:{
			qheader,azVerticalThree,azKindThree,azZhuanti,azSpecialTopic,fenlei,search,qtbanner
		},
	methods: {
		add(index) {
			return this.current=index;
		}
	},
	}	
</script>

<style scoped="scoped">

	.menu{
		overflow: hidden;
		
		padding-top: 0.1rem;
	}
	.menu span{
		float: left;
		font-size: 0.15rem;
	}
	.menu span:nth-child(1){
		margin-left: 1.1rem;
	}
	.menu span:nth-child(2){
		margin-left: 1.05rem;
	}
	ul{
		display: -webkit-flex;
		
	}
	.zi{
		font-size: 0.14rem;
		margin-left:0.1rem;
		
	}
	.active{
			color: #a0a29f;
	}
	
	.kong{
		padding-bottom: 0.6rem;
	}
</style>
