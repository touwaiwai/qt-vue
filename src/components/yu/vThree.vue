<template>
	<div class="vthree">
		<div v-for="item in datas.data" :key='item.img'>
			<div class="dayu">
				<h3>{{item.id}}</h3>
				<span class="dayu">></span>
			</div>
			<div class="imggroup">
				<div class="sign" v-for='(text,index) in item.content' :key='index'>
					<img :src="text.img" alt="">
					<span>{{text.title}}</span>
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
.vthree{
	width: 100%;
	box-sizing:border-box;
	padding-left:.16rem;
	padding-right:.16rem;
	margin-bottom: 20px;
}
.dayu{
	overflow:hidden;
}
.dayu h3{
	float: left;
	font-size: 0.2rem;
	margin-right:15px;
	font-weight: 100;
	margin-top: 0.1rem;
}
.dayu span{
	float: left;
	font-size: 0.25rem;
	margin-top: 9px;
}
.imggroup{
	display: flex;
	justify-content: space-between;
	width:100%;
	overflow:hidden;
	margin-top: 10px;
}
.sign{
	width: 1.05rem;
	float: left;
}
.sign span{
	width: 100%;
	font-size: 12px;
}
.sign img{
	width: 1.05rem;
	height: 1rem;
	border-radius:0.08rem;
}
</style>
