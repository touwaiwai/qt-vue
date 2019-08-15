<template>
	<!-- 专题  2图 -->
	<div class="azZhuanti">
		<img src="../../assets/img-az/azzhuanti.png" alt="">
		<img src="../../assets/img-az/azzhuanti2.png" alt="">
	</div>
</template>

<script>
	export default{
		name:"azZhuanti",
		data:function(){
			return{
				
			}
			
		}
	}
</script>

<style scoped="scoped">
	.azZhuanti img{
		width: 1.65rem;
		height: 0.65rem;
		border-radius: 10px;
	}
	
	.azZhuanti{
		padding-top:0.2rem;
		padding-bottom: 0.1rem;
		display: -webkit-flex;
		justify-content: space-around;
		background: white;
	}
</style>
