<template>
	<div class="denlu">
		<div class="dl-header">
			<span class="iconfont icon-right-copy" @click="sjhdl"></span>
			<p>手机号登录</p>
		</div>
		
	<div class="inputbox">
			<form action="">
			<div class="textzh">
			<span><img class="img1" src="../assets/img/denglu/208.jpg" alt=""></span>
			<input class="iup1" type="text" placeholder="请输入手机号">
			</div>
			<input class="iup2" type="password" placeholder="请输入密码">
			<router-link to='/xgmima'>
			<input class="iup3" type="button" value="忘记密码">
			</router-link>
			<div class="xieyi">
				<p>登 录 即 表 明 阅 读 同 意</p>
				<span>《用户协议》</span>
				<span>《隐私政策》</span>
			</div>
			<input class="iup4" type="submit"value="登录">
			</form>
		</div>
		
		
	</div>
	
</template>
<script>
	export default{
		name:"sjhdenglu",
		data(){
			return{

              }
		},
	methods:{
			sjhdl(){
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
.inputbox .img2{
		width: 0.2rem;
		height: 0.2rem;
		position: absolute;
		left: 3.0rem;
		top:0.2rem;
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
	.inputbox .iup3{
		width: 0.7rem;
		height: 0.5rem;
		position: absolute;
		left: 2.5rem;
		top:0.8rem;
		font-size: 14px;
		color: #ea3a58;
		background: white;
		border: 0;
		outline: 0;
	}
	
	.xieyi{
		width:2.8rem;
		height: 0.4rem;
		margin: 0 auto;
		font-size: 12px;
		display: flex;
		margin-top: 0.1rem;
		}
	.xieyi p{
			color: darkgray;
		}
	.xieyi span{
			color: #5696e8;
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
	}

</style>
