<template>
	<div class="azConter">
		
		<qheader></qheader>
		<search></search>
		<div class="kongbai"></div>
		<qtbanner></qtbanner>
		
		<fenlei></fenlei>
		<azZhuanti></azZhuanti>
		<azKindThree></azKindThree>
		<azKindThree></azKindThree>
		<azSpecialTopic></azSpecialTopic>
		<azKindThree></azKindThree>
		<azKindThree></azKindThree>
		<azVerticalThree></azVerticalThree>
		<azVerticalThree></azVerticalThree>
		<azVerticalThree></azVerticalThree>
		<azVerticalThree></azVerticalThree>
		<div class="zzzz"></div>
	</div>
	
</template>

<script>
	import azZhuanti from './azZhuanti';
	import azSpecialTopic from './azSpecialTopic';
	import azVerticalThree from './azVerticalThree';
	import azKindThree from './azKindThree';
	import fenlei from '../public/fenlei.vue';
	import qheader from '../public/qheader.vue';
	import search from '../public/search.vue';
	import qtbanner from '../public/qtbanner.vue';
	
	export default{
		name:"azConter",
		data:function(){
			return{
				
			}
			
		},
		components:{
			qheader,azVerticalThree,azKindThree,azZhuanti,azSpecialTopic,fenlei,search,qtbanner
		}
	}
</script>

<style>

	.kongbai{
		padding-bottom: 0.8rem;
	}
.zzzz{
	padding-bottom: 0.5rem;
}
</style>
