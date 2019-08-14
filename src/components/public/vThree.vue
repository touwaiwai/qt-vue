<template>
	<div class="vthree">
		<div class="dayu">
			<h3>历史</h3>
			<span class="dayu">></span>
		</div>
		<div class="imggroup">
			<div class="sign">
				<img src="../../assets/img/tuijian/a1.jpg" alt="">
				<span>隋朝为何短命？听蒙曼讲</span>
			</div>
			<div class="sign">
				<img src="../../assets/img/tuijian/a1.jpg" alt="">
				<span>史上最牛老丈人 3个女婿是皇帝</span>
			</div>
			<div class="sign">
				<img src="../../assets/img/tuijian/a1.jpg" alt="">
				<span>当年明月为你讲述明朝那些事儿</span>
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
	font-size: 0.25rem;
	margin-right:15px;
}
.dayu span{
	float: left;
	font-size: 0.25rem;
	margin-top: 5px;
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
}
</style>
