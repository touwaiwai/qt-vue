<template>
	<div class="athree">
		<div v-for="(item,index) in datass" :key='index'>
			<div class="dayu">
				<h3>{{item.id}}</h3>
				<span class="dayu">></span>
			</div>
			<div class="imggroup">
				<div class="sign" v-for='(text,index) in item.content' :key='index'>
					<div class="signleft"><img :src="text.img" alt=""></div>
					<div class="signright">
						<p>{{text.title}}</p>
						<p>{{text.text}}</p>
						<p>
							<img src="../../assets/img/tuijian/loop.png" alt="">
							<span>{{text.loopnumber}}</span>
							<img src="../../assets/img/tuijian/set.png" alt="">
							<span>{{text.setnumber}}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['datass'],
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
		width: 2.25rem;
		float: left;
		padding-top: 6px;
	}
	.signright p{
		width: 100%;
		overflow: hidden;
	}
	.signright p:first-child{
		font-size: 16px;
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
