<template>
	<!-- 左图右字 -->
	<div class="azsmallBoxtwo">
		<img src="../../assets/img-az/smallbox.png" alt="" class="smbox">
		<div class="desc">
			<h3>科创版权威投资指南</h3>
			<p>科创板到底要改变什么</p>
			<div class="renqi">
				<img src="../../assets/img-az/bofanglogo.png" alt="">
				<span>8.5万</span>
					
				<img src="../../assets/img-az/bofanglogo2.png" alt="">
				<span>30</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"azsmallBoxtwo",
		data:function(){
			return{
				
			}
			
		}
	}
</script>

<style scoped="scoped">


	.azsmallBoxtwo{
		display: -webkit-flex;
		background: white;
		margin-top:0.15rem;
		
	}
	
	
	
	.smbox{
		 display: block;
		width: 1.05rem;
		height: 1.05rem;
		margin-right: 0.16rem;
	}
	.desc h3{
		font-size: 0.15rem;
		margin-bottom: 0.06rem;
		margin-top: 0.13rem;
	}
	.desc p{
		font-size: 0.11rem;
		color: #afafaf;
		margin-bottom: 0.14rem;
	}
	
	.renqi{
		display: -webkit-flex;
	}
	.renqi img{
		width: 0.15rem;
		height: 0.15rem;
	}
	.renqi span{
		font-size: 0.11rem;
		color: #afafaf;
	}
	
	
	.frequency img{
		width: 0.15rem;
		height: 0.15rem;
	}
	.frequency span{
		font-size: 0.11rem;
	}
	.renqi span:nth-child(2){
		margin-right: 0.22rem;
	}
</style>
