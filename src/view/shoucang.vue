<template>
	<div class="denlu">
		<div class="dl-header">
			<span class="iconfont icon-right-copy" @click="shouc"></span>
			<p>我的收藏</p>
		</div>
		<div class="xz-nav">
			<span>登录后收藏内容永久保存保存云端</span>
			<input type="button" value="立 即 登 录">
		</div>
		<div class="logo">
			<img src="../assets/yu-img/29.jpg" alt="">
		</div>
		
	</div>
	
</template>
<script>
	export default{
		name:"shoucang",
		data:function(){
			return{
				
			}
			
		},
	methods:{
			shouc(){
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
		padding:0.4rem 0.53rem;
		border-bottom: 1px solid #c9c9c9;
	}
	.xz-nav span{
		font-size: 0.14rem;
		color: #2f2f2f;
		margin-left:0.3rem;
		margin-bottom: 0.2rem;
		font-weight: 600;

	}
	.xz-nav input{
		display: block;
		font-size: 0.18rem;
		color:white;
		background: #fd5353;
		border: 0;
		outline: 0;
		width: 2.7rem;
		height:0.5rem;
		/* margin-left:0.5rem; */
		border-radius: 0.07rem;
		/* margin-top: 0.1rem; */
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
