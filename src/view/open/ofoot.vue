<template>
	<div class="communcion">
		<div class="letsay">
			<input  placeholder="我来说两句~" />
			<img src="../../assets/img/weiyu/1.png" />
		</div>
		<div class="tubiao">
			<div class="single">
			<img src="../../assets/img/weiyu/2.png" />
			<span>评论</span>
			</div>
			<div class="single">
			<img src="../../assets/img/weiyu/3.png" />
			<span>收藏</span>
			</div>
			<div class="single">
			<img src="../../assets/img/weiyu/4.png" />
			<span>下载</span>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	/*评论*/
	.communcion{
		display: flex;
		border:1px solid #ededed;
		position: fixed;
		background:white;
		  bottom: 0;
	}
	
	.letsay{
		
		height:.53rem;
		display:flex;
		
		left: 0;
		z-index: 1;
		position: relative;
		
	}
	.letsay input{
		margin-left: .12rem;
		margin: .09rem .12rem;
		width:2.06rem;
		text-align: center;
		background:#f6f9fe;
		border-radius:.18rem;
		padding-left:.24rem;
		border:1px solid #dbdbdb;
		
	}
	.letsay img{
		width: .15rem;
		height: .12rem;
		position: absolute;
		top: .2rem;
		left: .36rem;
	}
	.tubiao{
		padding-top: .15rem;
		display: flex;
		font-size:.1rem;
		color:#c7c5c6;
	}
	.tubiao img{
		width: .26rem;
		height: .22rem;
	}
	.tubiao .single{
		margin-right: .19rem;
	}
</style>
