<template>
	<!-- 小组件 -->
	<div class="azsmllbox">
		
			<img src="../../assets/img-az/smallbox.png" alt="">
		
		<div class="desc">奇异大陆的神秘灵丹</div>
	</div>
</template>

<script>
	export default{
		name:"azsmallBox",
		data:function(){
			return{
				
			}
			
		}
	}
</script>

<style scoped="scoped">
	.azsmllbox{
		width: 1.05rem;
		height:1.52rem ;
		
	}
	
	 img{
		 display: block;
		width: 1.05rem;
		height: 1.05rem;
		
	}
	
	.desc {
		font-size: 0.17rem;
		    margin-top: 2px;
    width: 95px;
    font-size: 12px;
    max-height: 2.85714286em;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
		
		
	}
</style>
