<template>
	<div class="denlu">
		<div class="dl-header">
			<span class="iconfont icon-right-copy" @click="xiugai"></span>
			<p>重设密码</p>
		</div>
		
	<div class="inputbox">
			<form action="">
			<div class="textzh">
			<span><img class="img1" src="../assets/img/denglu/208.jpg" alt=""></span>
			<input class="iup1" type="text" placeholder="请输入手机号">
			</div>
			<input class="iup2" type="password" placeholder="重新设置的登录密码  不少于6位">
			
			<input class="iup4" type="submit"value="重置密码">
			</form>
		</div>
		
		
	</div>
	
</template>
<script>
	export default{
		name:"xgmima",
		data(){
			return{

              }
		},
		methods:{
			xiugai(){
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
		font-size: 19px;
		margin-left: 0.1rem;
	}
/* inpubox */
	.inputbox{
		width: 100%;
		height: 2.0rem;
		position: relative;
		margin-top: 0.5rem;
	}
	.inputbox input{
		display: block;
		width:2.8rem;
		height: 0.7rem;
		margin: 0 auto;
		font-size: 15px;
		color:black;
		border: 0;
		outline: 0;
	}
	::-webkit-input-placeholder {
				color:#999;
				font-size:16px;
		}
	.inputbox .img1{
		width: 0.5rem;
		height: 0.3rem;
		position: absolute;
		left: 0.5rem;
		top:0.24rem;
		
		
	}

.textzh{
		width:2.8rem;
		height: 0.7rem;
		margin: 0 auto;
		border-bottom: 1px solid darkgray;
	}
	.textzh input{
		margin-left:0.6rem;
		width:1.9rem;
	}
	
	.inputbox .iup2{
		border-bottom: 1px solid darkgray;

	}
	
	.inputbox .iup4{
		width:2.8rem;
		height: 0.5rem;
		margin: 0 auto;
		border: 0;
		outline: 0;
		font-size:18px ;
		color: white;
		background:#fecccb;
		border-radius: 30px;
		margin-top: 0.8rem;
	}

</style>
