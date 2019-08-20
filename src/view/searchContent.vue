<template>
	<div>
		<div class="qt-search">
			<div class="search_content">
				<span class="all">全部</span>
				<input placeholder="鬼吹灯后传" class="con" autofocus="autofocus" @keydown.enter="go"/>
				<img src="../assets/searchContent/1.png" />
			</div>
			<div class="search_right">
			  <span @click="back">取消</span>
			</div>
		</div>
		<router-view></router-view>
	</div>	
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.push("/index")
			},
			go(){
				this.$router.push("/searchContent/searchDetail")
			}
		}
	}
</script>

<style scoped="scoped">
	.search_right{
		font-size:.16rem;
		padding-top: .16rem;
		padding-left: .1rem;
	}
	.all{
		left: .23rem;
		position: absolute;
		top: .16rem;
		font-size: .15rem;
	}
	.qt-search{
		padding-left:.1rem;
		padding-right:.15rem;
		height: .7rem;
		display: flex;
		padding-top: .24rem;
	}
	.search_content{
		display: flex;
		width: 3.03rem;
		position: relative;
	}
	.search_content input {
		background: #f2f2f2;
		width: 3.03rem;
		margin-top: .08rem;
		height: .35rem;
		border-radius: .12rem;
		border: 0;
	  }
	.search_content img  {
		  width: .1rem;
    height: .1rem;
    position: absolute;
	top: .23rem;
	left: .78rem;
}
	.search_content .con{
		color:#b1b1b1;
		/* text-align: center; */
		outline: none;
		text-indent: 1.1rem;
		caret-color:red;
	}
	
	
</style>
