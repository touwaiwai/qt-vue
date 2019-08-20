<template>
	<div class="denlu">
		<div class="dl-header">
			<span class="iconfont icon-right-copy" @click="xiaz"></span>
			<p>我的下载</p>
		</div>
		<div class="xz-nav" >
			<span  v-for="(data,index) in spana" :class="current===index?'abc':''"  @click="add(index)">
				{{data}}
			</span>
			
		</div>
		<div class="logo">
			<img src="../assets/yu-img/28.jpg" alt="">
		</div>
		
	</div>
	
</template>
<script>
	export default{
		name:"xiazai",
		data(){
			return{
			spana:["已下载","正在下载"],
			current:0
              }
		},
		methods:{
			add(index){
			this.current=index;
			},
			xiaz(){
				history.back();
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
		display: flex;
		justify-content: space-around;
		padding-top: 0.15rem;
	}
	.xz-nav span{
		font-size: 0.16rem;
		color: #5e5e5e;
	}
	
	.logo{
		width: 100%;
		margin-top: 1rem;

		
	}	
	.logo img{
		width: 3.1rem;
		height: 2.5rem;
		margin-left:0.42rem;
		
	}
	.xz-nav .abc{
		font-size: 0.18rem;
		border-bottom:3px solid red;
		
	}

</style>
