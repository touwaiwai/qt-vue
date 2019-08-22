<template>
	<div class="communcion">
		<div class="letsay">
			<input  placeholder="     我来说两句~" />
			<i class="iconfont icon-pencil"></i>
		</div>
		<div class="tubiao">
			<div class="single">
			<i class="iconfont icon-buoumaotubiao48"></i>
			<span>评论</span>
			</div>

			<div class="single">
			<i class="iconfont icon-icon-test"></i>
			<span>收藏</span>
			</div>

			<div class="single">
			<i class="iconfont icon-wujieshejishigongju-"></i>
			<span>下载</span>
			</div>
		</div>
	</div>
</template>

<script>
export default{

}
</script>

<style scoped="scoped">
	/*评论*/
	@import "../../assets/fontico/iconfont.css";
	/* @import url(https://at.alicdn.com/t/font_1344862_siumdier9hl.css); */
	.communcion{
		height: .6rem;
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
		width:2.05rem;
		height: .38rem;
		/* text-align: center; */
		background:#f6f9fe;
		border-radius:.18rem;
		padding-left:.24rem;
		border:1px solid #dbdbdb;
		letter-spacing: 2px;
		font-size: .18rem
	}
	.letsay i{
		width: .15rem;
		height: .12rem;
		position: absolute;
		top: .2rem;
		left: .36rem;
		color: #f6615c;
	}
	.tubiao{
		padding-top: .15rem;
		display: flex;
		font-size:.1rem;
		color:#272727;
	}
	.tubiao i{
		width: .26rem;
		height: .22rem;
	}
	.iconfont{
		font-weight: 800;
		
	}
	.icon-wujieshejishigongju-{
		font-weight: normal;
	}
	.tubiao span{
		color: #919193;
	}
	.tubiao .single{
		margin-right: .15rem;
	}
</style>
