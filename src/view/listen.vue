<template>
	<div>
		<listen-header></listen-header>
		<listen-center></listen-center>
		<foot></foot>
	</div>
</template>

<script>
	import listenHeader from'../components/yu/listenHeader';
	import listenCenter from'../components/yu/listenCenter';
	import foot from'../components/public/foot';
	
export default {
	  name: 'listen',
		data:function(){
			return{
				
			}
		},
		
components:{
	
		listenHeader,listenCenter,foot
	}
}

</script>

<style scoped="scoped">
	
</style>
