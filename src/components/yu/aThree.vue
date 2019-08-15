<template>
	<div class="athree">
		<div class="dayu">
			<h3>公开课</h3>
			<span class="dayu">></span>
		</div>
		<div class="imggroup">
			<div class="sign">
				<div class="signleft"><img src="../../assets/yu-img/24.jpg" alt=""></div>
				<div class="signright">
					<p>一席 、演讲</p>
					<p>胡源：废弃针头去哪儿了</p>
					<p>
						<img src="../../assets/yu-img/7.jpg" alt="">
						<span>126.4万</span>
						<img src="../../assets/yu-img/8.jpg" alt="">
						<span>28</span>
					</p>
				</div>
			</div>
			<div class="sign">
				<div class="signleft"><img src="../../assets/yu-img/25.jpg" alt=""></div>
				<div class="signright">
					<p>细说道德经</p>
					<p>用接地气的方式聊点儿道德经</p>
					<p>
						<img src="../../assets/yu-img/7.jpg" alt="">
						<span>8212.3万</span>
						<img src="../../assets/yu-img/8.jpg" alt="">
						<span>304</span>
					</p>
				</div>
			</div>
			<div class="sign">
				<div class="signleft"><img src="../../assets/yu-img/26.jpg" alt=""></div>
				<div class="signright">
					<p>天理法说（第四季）</p>
					<p>有欠条，借出去的钱还是要不回来</p>
					<p class="lastp">
						<img src="../../assets/yu-img/7.jpg" alt="">
						<span>2417.0万</span>
						<img src="../../assets/yu-img/8.jpg" alt="">
						<span>36</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['datas'],
		name:'vThree'
	}
</script>

<style scoped="scoped">
	.athree{
		width: 100%;
		box-sizing:border-box;
		padding-left:.16rem;
		padding-right:.16rem;
	}
	.dayu{
		overflow:hidden;
	}
	.dayu h3{
		float: left;
		font-size: 0.24rem;
		margin-right:15px;
		font-weight: 100;
		
	}
	.dayu span{
		float: left;
		font-size: 0.25rem;
		margin-top: 5px;
	}
	.imggroup{
		width: 100%;
		overflow:hidden;
		margin-top: 10px;
	}
	.sign{
		overflow:hidden;
		margin-bottom: 15px;
	}
	.signleft{
		width: .9rem;
		float: left;
		margin-right: 15px;
	}
	.signright{
		float: left;
		padding-top: 6px;
	}
	.signright p:first-child{
		font-size: .2rem;
		margin-bottom: 5px;
	}
	.signright p:nth-child(2){
		font-size: 14px;
		margin-bottom: 15px;
		color: darkgray;
	}
	.signright p:last-child{
		font-size: 16px;
		color: darkgray;
	}
	.signleft img{
		width: .9rem;
		height: .9rem;
	}
	.signright img{
		width: 15px;
		height: 18px;
		margin-right: 0.04rem;
	}
	.signright img,.signright span{
		float: left;
		vertical-align: middle;
	}
	.signright span{
		margin-right: 20px;
	}
</style>
