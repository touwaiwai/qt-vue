<template>
	<div>
		<div class="fix">
			<qheader></qheader>
			<search></search>
		</div>
		<qtbanner :imglist='imglist'></qtbanner>
		<fenlei></fenlei>
		<need></need>
	</div>
</template>

<script>
	import qheader from '@/components/public/qheader';
	import search from '@/components/public/search';
	import qtbanner from '@/components/public/qtbanner';
	import fenlei from '@/components/public/fenlei';
	import need from '@/view/index/need';
	
export default {
	name: 'index',
	data:function(){
		return {
				imglist:['./assets/img/banner/1.jpg','./assets/img/banner/2.jpg','./assets/img/banner/3.jpg']
		}
	},
	components:{
	      qheader,search,qtbanner,fenlei,need
	}
}
</script>

<style scoped="scoped">
	.fix{
		position: fixed;
		top: 0;
		left: 0;
		z-index:10000;
		background:white;
	}
</style>
