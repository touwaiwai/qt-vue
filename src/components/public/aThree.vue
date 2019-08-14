<template>
	<div class="athree">
		<div class="dayu">
			<h3>评书</h3>
			<span class="dayu">></span>
		</div>
		<div class="imggroup">
			<div class="sign">
				<div class="signleft"><img src="../../assets/img/tuijian/a1.jpg" alt=""></div>
				<div class="signright">
					<p>袁阔成：敌后武工队</p>
					<p>真实历史改编，深入敌后的一支奇兵</p>
					<p>
						<img src="../../assets/img/tuijian/loop.png" alt="">
						<span>2417.0万</span>
						<img src="../../assets/img/tuijian/set.png" alt="">
						<span>36</span>
					</p>
				</div>
			</div>
			<div class="sign">
				<div class="signleft"><img src="../../assets/img/tuijian/a1.jpg" alt=""></div>
				<div class="signright">
					<p>袁阔成：敌后武工队</p>
					<p>真实历史改编，深入敌后的一支奇兵</p>
					<p>
						<img src="../../assets/img/tuijian/loop.png" alt="">
						<span>2417.0万</span>
						<img src="../../assets/img/tuijian/set.png" alt="">
						<span>36</span>
					</p>
				</div>
			</div>
			<div class="sign">
				<div class="signleft"><img src="../../assets/img/tuijian/a1.jpg" alt=""></div>
				<div class="signright">
					<p>袁阔成：敌后武工队</p>
					<p>真实历史改编，深入敌后的一支奇兵</p>
					<p class="lastp">
						<img src="../../assets/img/tuijian/loop.png" alt="">
						<span>2417.0万</span>
						<img src="../../assets/img/tuijian/set.png" alt="">
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
		font-size: 0.25rem;
		margin-right:15px;
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
		width: 20px;
		height: 20px;
	}
	.signright img,.signright span{
		float: left;
		vertical-align: middle;
	}
	.signright span{
		margin-right: 20px;
	}
</style>
