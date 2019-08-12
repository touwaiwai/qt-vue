<template>
	<div>
		<footer>
			<router-link to="/"> 
			<a href="#"><img src="../../assets/img/foot/index.png" alt=""><span>首页</span></a>
			</router-link>
			<router-link to="/login">
			<a href="#"><img src="../../assets/img/foot/index.png" alt=""><span>会员中心</span></a>
			</router-link>
			<router-link to="/find"> 
			<a href="#"><img src="../../assets/img/foot/index.png" alt=""><span>我听</span></a>
			</router-link>
			
			<router-link to="/mine">
			<a href="#"><img src="../../assets/img/foot/index.png" alt=""><span>个人中心</span></a>
			</router-link>
		</footer>
	</div>
</template>

<script>
	export default {
		name:'foot',
		data:function(){
			return {
				
			}
		}
	}	
</script>

<style scoped="scoped">
footer {
  display: flex;
  width: 100%;
  height: 0.5rem;
  justify-content: space-around;
  align-items: center;
  background: white;
  position: fixed;
  bottom: 0;
  z-index: 1;
}
a {
  position: relative;
}
footer img {
  display: block;
  width: 0.24rem;
  height: 0.22rem;
  text-align: center;
  background-size: 0.24rem 0.22rem;
}
.top:nth-child(3)>i{
  display: block;
  width: 0.42rem;
  height: 0.4rem;
  text-align: center;
  background-size: 0.4rem 0.4rem;
}
span {
  font-size: 0.11rem;
  }
</style>
