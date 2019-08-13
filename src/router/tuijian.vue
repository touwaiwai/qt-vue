<template>
	<div class="box">
		<router-link v-for="(item,index) in data" :key='index'>
			<img :src="item.imglist" alt="">
			<span>{{item.text[index]}}</span>
		</router-link>
	</div>
</template>

<script> 
export default{
	data(){
		return {
			data:
				{
					text:['隋朝为何短命？听蒙曼讲','史上最牛老丈人 3个女婿是皇帝','当年明月为你讲述明朝那些事儿'],
					imglist:'@/assets/img/tuijian/a1.png'
				}
		}
	}
}
</script>

<style scoped="scoped">
	.box{
		display: -webkit-flex;
		width: 100%;
		height: 1rem;
		padding: 0 .16rem;
		-webkit-justify-content: space-between;
	}
	.box img{
		width: 100%;
		height: 1rem;
	}
</style>
