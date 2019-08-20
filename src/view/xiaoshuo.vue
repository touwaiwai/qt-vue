<template>
	<div class="xiaoshuo">
		<div class="menu">
			<router-link to="/index/xiaoshuo/xiaoshuoman"><span :class="man" @click="mans">男生</span></router-link>
			<router-link to="/index/xiaoshuo/xiaoshuowomen"><span :class="woman" @click="womans">女生</span></router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import azZhuanti from '../components/azjp/azZhuanti';
	import azSpecialTopic from '../components/azjp/azSpecialTopic';
	import azVerticalThree from '../components/azjp/azVerticalThree';
	import azKindThree from '../components/azjp/azKindThree';
	import qheader from '../components/public/qheader.vue';
	import search from '../components/public/search.vue';
	import qtbanner from '../components/public/qtbanner.vue';

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
				      { id: "/index/xiaoshuo/reting", title: "热听" },
				      { id: "/index/xiaoshuo", title: "都市" },
						{ id: "/index/xiaoshuo", title: "玄幻" },
						{ id: "/index/xiaoshuo", title: "历史" },
				    ],
				    man:"show",
					woman:''
					}
		},
		components:{
			qheader,azVerticalThree,azKindThree,azZhuanti,azSpecialTopic,search,qtbanner
		},
	methods: {
		add(index) {
			return this.current=index;
		},
		mans(){
			this.man = 'show';
			this.woman = "";
		},
		womans(){
			this.woman = "show";
			this.man = '';
		}
	},
	}	
</script>

<style scoped="scoped">

	.menu{
		overflow: hidden;
		padding-top: 0.1rem;
		margin-bottom: -.7rem;
	}
	.menu span{
		float: left;
		font-size: .2rem;
		height: .3rem;
		line-height: .3rem;
	}
	.show{
		color: red;
		border-bottom: 3px solid red;
	}
	.menu span:nth-child(1){
		margin-left: 1.1rem;
	}
	.menu span:nth-child(2){
		margin-left: 1.05rem;
	}

</style>
