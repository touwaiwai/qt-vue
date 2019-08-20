<template>
	<div class="denlu">
		<div class="dl-header">
			<span class="iconfont icon-right-copy" @click="stls"></span>
			<p>收听历史</p>
		</div>
		
		<div class="logo">
			<img src="../assets/yu-img/30.jpg" alt="">
		</div>
		<div class="xz-nav">
			<input type="button" value="立即登录">
		</div>
		
	</div>
	
</template>
<script>
	export default{
		name:"stlishi",
		data:function(){
			return{
				
			}
			
		},
		methods:{
			stls(){
				history.back();
			}
		}
	}
</script>

<style scoped="scoped">
	@import "http://at.alicdn.com/t/font_1344490_6vwa5npof5g.css";
	.denlu{
		background: white;
	}
	.dl-header{
		width: 100%;
		height:0.5rem;
		font-size:0.16rem;
		line-height:0.5rem;
		border-bottom: 1px solid #c9c9c9;
		background: #fbfbfb;
		display: flex;
	}
	.icon-right-copy{
		font-size: 22px;
		margin-left: 0.1rem;
	}
	.dl-header p{
		font-size: 22px;
		margin-left: 0.1rem;
	}
	.xz-nav{
		width: 100%;
		padding:0.15rem 0.53rem;
	}

	.xz-nav input{
		display: block;
		font-size: 0.18rem;
		color:#eb5d5c;
		border: 0;
		outline: 0;
		font-weight: 600;
		letter-spacing: 2px;
		width: 2.7rem;
		height:0.5rem;
		background: white;
		border: 1px solid #eb5d5c;
		border-radius: 1rem;
	}
	
	.logo{
		width: 100%;
		margin-top:0.6rem;

		
	}	
	.logo img{
		width: 2.4rem;
		height: 2.3rem;
		margin-left:0.66rem;
		
	}

</style>
