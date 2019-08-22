<template>
	<!-- header部分头部 -->
	<div class="bz-box">
	    <header>
	        <img class="one" src="../assets/img/li/otherpay_back.png"@click='back'>
	        <img id="bz-cha" src="../assets/img/li/crop__ic_cancel.png" alt="">
	        <h2>帮助与反馈</h2>
	    </header>
	<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:"help",
		data(){
			return {}
		},
		methods:{
			back(){
				history.back();
			}
		}
	}
</script>

<style scoped="scoped">
	header{
	  width: 100%;
	  height: .5rem;
	  display: flex;
	  justify-content: flex-start;
	  align-items: center;
	  background: #ffffff;
	
	  /* margin-top: .5rem; */
	}
	
	header img{
	
	  width: .19rem;
	  height: .19rem;
	}
	header .one{
	  padding-left: .16rem;
	
	}
	#bz-cha{
	  width: .3rem;
	  height: .3rem;
	  margin: 0 .15rem;
	}
	header h2{
	  font-size: .22rem;  
	}
	
</style>
