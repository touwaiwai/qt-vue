<template>
	<div>
		<input class="search" type="text" :placeholder="placeholder">
		<img  class="history"  src="../../assets/img/search/history.png"/>
		<img class="ia"  src="../../assets/img/search/search.png"/>
	</div>
</template>

<script>
	export default {
		name:'search',
		data:function(){
			return {
				placeholder:'烈火军校'
			}
		}
	}	
</script>

<style scoped>
	div{
		padding: 0 .16rem;
		/* overflow:hidden; */
		position:relative;
	}
	.search{
		width:3rem;
		height:.31rem;
		background-color:#f6f6f6;
		color: #bbbbbb;
		border-radius: .1rem;
		text-align: center;
		border: 0;
		float:left;
	}
	.history{
		width: .22rem;
		height: .22rem;
		position: absolute;
		top: .05rem;
		left: 3.44rem;
	}
	.ia{
		width: .15rem;
		height: .15rem;
		background-image: url(../../static/img/search/search.png);
		background-attachment: fixed;
		position: absolute;
		top:.08rem;
        left:.71rem;
        z-index:99999;
		 
	}
	
</style>
