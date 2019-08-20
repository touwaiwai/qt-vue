<template>
	<div class="denlu">
		<div class="dl-header">
			<span class="iconfont icon-right-copy" @click="back"></span>
		</div>
		<div class="logo">
			<img src="../assets/img/denglu/206.jpg" alt="">
		</div>
		
		<div class="inputbox">
			<form action="">
			<div class="textzh">
			<span><img class="img1" src="../assets/img/denglu/208.jpg" alt=""></span>
			<input class="iup1" type="text" placeholder="">
			<span><img class="img2" src="../assets/img/denglu/207.jpg" alt=""></span>
			</div>
			<input class="iup2" type="password" placeholder="请输入验证码">
			<input class="iup3" type="button" value="获取验证码">
			
			<div class="xieyi">
				<p>登 录 即 表 明 阅 读 同 意</p>
				<span>《用户协议》</span>
				<span>《隐私政策》</span>
			</div>
			<input class="iup4" type="submit"value="登录">
			</form>
		</div>
		<router-link to='/sjhdenglu'>
		<div class="sjmadl">手 机 号 密 码 登 录</div>
		</router-link>
		<div class="dl-foot">
			<img src="../assets/img/denglu/209.jpg" alt="">
			<img src="../assets/img/denglu/210.jpg" alt="">
			<img src="../assets/img/denglu/211.jpg" alt="">
			<img class="fimg-4" src="../assets/img/denglu/dl-1.jpg" alt="">

		</div>
		
	</div>
	
</template>
<script>
	export default{
		methods:{
			back(){
				history.back();
			}
		}data() {
			return {
				key: value
			}
		},
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
		line-height:0.6rem;
	}
	.icon-right-copy{
		font-size: 22px;
		margin-left: 0.1rem;
	}
	.logo{
		width: 100%;
		height:1.2rem;
		margin-top: 0.3rem;

		
	}	
	.logo img{
		width: 1.8rem;
		height: 0.5rem;
		margin-left: 1.0rem;
		
	}
	.inputbox{
		width: 100%;
		height: 2.0rem;
		position: relative;
	}
	.inputbox input{
		display: block;
		width:2.8rem;
		height: 0.7rem;
		margin: 0 auto;
		font-size: 16px;
		color: darkgray;
		border: 0;
		outline: 0;
	}
	.inputbox .img1{
		width: 0.5rem;
		height: 0.3rem;
		position: absolute;
		left: 0.5rem;
		top:0.2rem;
		
		
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
		color: #fb5c78;
		background: white;
		border: 0;
		outline: 0;
	}
	/* xieyi */
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
		color: royalblue;
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
.sjmadl{
	width:1.3rem;
	height: 0.5rem;
	margin: 0 auto;
	font-size: 14px;
	margin-top: 0.65rem;
	color: #fb5c78;
	font-weight: bold;
	
}
/* foot */
.dl-foot{
	display: flex;
	margin:0.6rem 0.2rem 0 ;
	justify-content: space-around;
}
.dl-foot img{
	width:0.5rem;
	height:0.5rem;
	border-radius:50%;
}

.dl-foot .fimg-4{
	
	background:whitesmoke ;
}
</style>
