<template>
	<div class="azSpecialTopic">
		<div class="tit">
			<h3>热门专题</h3>
		</div>
		
		<div class="azbanner">
			<img src="../../assets/yu-img/27.jpg" alt="">
		</div>
		<div class="azwenzi">
			<p>专题</p>
			<span>初中7——9年级语文 、外语教材学习</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"azSpecialTopic",
		data:function(){
			return{
				
			}
			
		}
	}
</script>

<style scoped="scoped">
	.tit {
		background: white;
		display: -webkit-flex;
		margin-bottom: 0.2rem;
		padding-top: 0.06rem;
	}
	
	.tit h3 {
		font-size: 0.24rem;
		margin-left: 0.16rem;
	
	}
	
	.tit span {
	
		font-size: 20px;
		color: #949494;
		margin-left: 0.1rem;
		margin-top: 0.05rem;
	}
	
	.azbanner img{
		width: 3.5rem;
		height: 2rem;
		margin: 0 auto;
		border-radius: 3%;
	}
	.azbanner{
		padding-bottom: 0.15rem;
	}
	
	.azSpecialTopic{
		background: white;
	}
	
	.azwenzi{
		display: -webkit-flex;
		padding-bottom: 0.3rem;
	}
	.azwenzi p{
		width: 0.32rem;
		height: 0.18rem;
		background: red;
		color:white;
		font-size: 0.08rem;
		margin-left: 0.16rem;
		border-radius: 20%;
		text-align: center;
		
	}
	.azwenzi span{
		font-size: 0.14rem;
		margin-left: 0.1rem;
	}
</style>
