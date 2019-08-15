<template>
	<div class="tuijian">
		<sixbox></sixbox>
		<azKindThree></azKindThree>
		<azKindThree></azKindThree>
		<azKindThree></azKindThree>
		<azKindThree></azKindThree>
		<azKindThree></azKindThree>
		<azKindThree></azKindThree>
		<azKindThree></azKindThree>
	</div>
</template>

<script>
	import azZhuanti from '../../components/azjp/azZhuanti';
	import azSpecialTopic from '../../components/azjp/azSpecialTopic';
	import azVerticalThree from '../../components/azjp/azVerticalThree';
	import azKindThree from '../../components/azjp/azKindThree';
	import sixbox from '../../components/yu/sixbox';
	
	
	
	
	
	
	export default{
		name:"tuijian",
		data:function(){
			return{
				
			}
			
		},
		components:{
			azZhuanti,azSpecialTopic,azVerticalThree,azKindThree,sixbox
		}
	}
</script>

<style scoped="scoped">
	
</style>
