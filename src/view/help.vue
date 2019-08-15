<template>
	<!-- header部分头部 -->
	<div class="bz-box">
	    <header>
				<router-link to="/mine">
	        <img class="one" src="../assets/img/li/otherpay_back.png" alt="">
				</router-link>	
	        <img id="bz-cha" src="../assets/img/li/crop__ic_cancel.png" alt="">
	        <h2>帮助与反馈</h2>
	    </header>
	
	     <div class="service">
	        <img src="../assets/img/li/bz-liebiao.jpg" alt="">
	        <p>常见问题</p>
	    </div>
	    <div class="bz-chunk">
	        <p>超级会员问题</p>
	        <img src="../assets/img/li/search_item_cat_next.png" alt="">
	    </div>
	    <div class="bz-chunk">
	        <p>账号问题</p>
	        <img src="../assets/img/li/search_item_cat_next.png" alt="">
	    </div>
	    <div class="bz-chunk">
	        <p>充值或购买问题</p>
	        <img src="../assets/img/li/search_item_cat_next.png" alt="">
	    </div>
	    <div class="bz-chunk">
	        <p>播放问题</p>
	        <img src="../assets/img/li/search_item_cat_next.png" alt="">
	    </div>
	    <div class="bz-chunk">
	        <p>其他使用问题</p>
	        <img src="../assets/img/li/search_item_cat_next.png" alt="">
	    </div>
	    <div class="service">
	        <img src="../assets/img/li/bz-xinxi.jpg" alt="">
	
	        <p>联系客服 </p>
					<img src="../assets/img/li/search_item_cat_next.png" class="intext"  alt="">
	    </div>
	    <div class="service">
	        <img src="../assets/img/li/bz-dianchi.jpg" alt="">
	
	        <p>意见反馈</p>
					<img src="../assets/img/li/search_item_cat_next.png"  class="intext"alt="">
	    </div>
	</div>
</template>

<script>
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
	.bz-chunk{
	  height: .54rem;
	  width: 100%;
	  height: .5rem;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  background: #ffffff;
	  border-top: 1px solid #c7c7c7;
	}
	.bz-chunk p{
	  font-size: .15rem;
	  color: #666666;
	  padding-left: .53rem;
	
	}
	.bz-chunk img{
	  width: .13rem;
	  height: .13rem;
	  padding-right: .19rem;
	}
	.intext{
		width: .13rem;
height: .13rem;
margin-left: 1.999rem;
 margin-right: .19rem;
	}
	.service{
	  height: .58rem;
	  width: 100%;
	  height: .5rem;
	  display: flex;
	  justify-content: flex-start;
	  align-items: center;
	  /* padding-left: .16rem; */
	  margin-top: .07rem;
	  background: #ffffff;
	
	}
	.service img{
	  width: .19rem;s
	  height: .19rem;
	  margin-right: .18rem;
	  padding-left: .16rem;
	
	}
	.service p{
	  font-size: .15rem;
	}
</style>
