<template>
	<div class="man">
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
		name:'xiaoshuo',
		data:function(){
			return {
					imglist:[
					'../../static/img/banner/1.jpg',
				    '../../static/img/banner/2.jpg',
				    '../../static/img/banner/3.jpg',
					],
					 tabList: [
				      { id: "/index/xiaoshuo/aztuijian", title: "推荐"},
				      { id: "/index/xiaoshuo/reting", title: "热听" },
				      { id: "/index/xiaoshuo/doushi", title: "都市" },
						{ id: "/index/xiaoshuo/xuanhuan", title: "玄幻" },
						{ id: "/index/xiaoshuo/lishi", title: "历史" },
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
	}
	.active{
		color:red;
		border-bottom:2px solid red;
	}
	.kong{
		padding-bottom: 0.6rem;
	}
</style>
