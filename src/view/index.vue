<template>
	<div>
		<div class="fix">
			<qheader></qheader>
			<search></search>
		</div>
		<div class="kong"></div>
		<router-view></router-view>
	</div>
</template>

<script>
	import qheader from '@/components/public/qheader'
	import search from '@/components/public/search'
	
export default {
	name: 'index',
	data:function(){
		return {
				}
	},
	components:{
	      qheader,search
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
</style>
