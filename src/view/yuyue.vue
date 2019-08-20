<template>
	 <!-- header部分头部 -->
	<div class="sz-box mtops">
	    <header>
	        <img @click="fanhui" class="one" src="../assets/img/mine/otherpay_back.png" alt="">
	        <h2 >预约节目</h2>
	    </header>
	
	    <div class="sz-chunk">
	        <img src="../assets/img/mine/yuyue.jpg" alt="">
	    </div>
	   
	</div>
</template>

<script>
export default{
		name:"yuyue",
		data(){
			return{
	
	          }
		},
		methods:{
				fanhui(){
					history.back();
				}
			}
		}
</script>

<style scoped="scoped">
	header{
	  width: 100%;
	  height: .6rem;
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
	  padding-right: .17rem;
	
	
	}
	
	header h2{
	  font-size: .22rem;  
	}
	.sz-chunk{
	  /* height: .56rem; */
	  width: 100%;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  background: #ffffff;
	 
	
	}
	
	.sz-sbox{
	  display: flex;
	  justify-content: flex-end;
	  align-items: center;
	}
	.sz-chunk img{
	  width: 100%;
	  height: 6.07rem;
	  padding-right: .19rem;
	}
</style>
