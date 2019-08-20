<template>
	<div>
		<div class="fix">
			<qheader></qheader>
			<search></search>
		</div>
		<div class="kong"></div>
		<router-view></router-view>
		<p id="kong"></p>
		<foot></foot>
	</div>
</template>

<script>
	import qheader from '@/components/public/qheader'
	import search from '@/components/public/search'
	import foot from '@/components/public/foot'
	
export default {
	name: 'index',
	data:function(){
		return {
				}
	},
	components:{
	      qheader,search,foot
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
	.kong{
		margin-top:.85rem;
	}
	#kong{
		margin-bottom: .5rem;
	}
</style>
