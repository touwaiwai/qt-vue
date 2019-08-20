<template>
	 <!-- header部分头部 -->
	<div class="sz-box mtops">
	    <header>
	        <img class="one" @click="fanhui" src="../assets/img/mine/otherpay_back.png" alt="">
	        <h2>定时关闭</h2>
	    </header>
	
	    <div class="sz-chunk mtop mbttom">
	        <p>不开启</p>
	        <img src="../assets/img/mine/duig.jpg" alt="">
	    </div>
	    <div class="sz-chunk mtop">
	        <p>播完当前节目</p>
	        <!-- <img src="img/search_item_cat_next.png" alt=""> -->
	    </div>
	    <div class="sz-chunk mtop">
	        <p>播完2集节目</p>
	        <!-- <img src="img/search_item_cat_next.png" alt=""> -->
	    </div>
	    <div class="sz-chunk mtop">
	        <p>播完3集节目 </p>
	        <!-- <img src="img/search_item_cat_next.png" alt=""> -->
	    </div>
	    <div class="sz-chunk mtop">
	        <p>10分钟</p>
	        <!-- <img src="img/search_item_cat_next.png" alt=""> -->
	    </div>
	    <div class="sz-chunk mtop">
	        <p>20分钟</p>
	        <!-- <img src="img/search_item_cat_next.png" alt=""> -->
	    </div>
	    <div class="sz-chunk mtop">
	        <p>30分钟</p>
	        <!-- <img src="img/search_item_cat_next.png" alt=""> -->
	    </div>
	    <div class="sz-chunk mtop">
	        <p>60分钟</p>
	        <!-- <img src="img/search_item_cat_next.png" alt=""> -->
	    </div>
	    <div class="sz-chunk mtop">
	        <p>90分钟</p>
	        <!-- <img src="img/search_item_cat_next.png" alt=""> -->
	    </div>
	    <div class="sz-chunk mtop ds-one">
	        <p>自定义</p>
	        <!-- <img src="img/search_item_cat_next.png" alt=""> -->
	    </div>
	    <div class="sz-chunk ds-one">
	        <!-- <img src="img/search_item_cat_next.png" alt=""> -->
	    </div>
	</div>
</template>

<script>
		export default{
		name:"dingshi",
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
	  padding-right: .17rem;
	
	
	}
	
	header h2{
	  font-size: .22rem;  
	}
	.sz-chunk{
	  height: .56rem;
	  width: 100%;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  background: #ffffff;
	  margin-top: 1.5px;
	
	  /* border-top: 1px solid #c7c7c7; */
	
	}
	.sz-chunk p{
	  font-size: .2rem;
	  color: #151515;
	  padding-left: .32rem;
	
	}
	.sz-sbox{
	  display: flex;
	  justify-content: flex-end;
	  align-items: center;
	}
	.sz-chunk img{
	  width: .20rem;
	  height: .12rem;
	  padding-right: .19rem;
	}
	#sz-tx{
	  width: .39rem;
	  height: .39rem;
	  padding-right: .05rem;
	}
	#blass{
	  color:black;
	   
	}
	.mtop{
	  letter-spacing:1px;
	}
	.mtops{
	  letter-spacing:2px;
	}
	.mbttom{
	  border-top: 1.5px solid #c7c7c7;
	
	}
	.ds-one{
	  height:.48rem;
	      margin-top: 0;
	}
</style>
