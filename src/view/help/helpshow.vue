<template>
	<div>
		<div class="service">
		    <img src="../../assets/img/li/bz-liebiao.jpg" alt="">
		    <p>常见问题</p>
		</div>
		<div class="bz-chunk">
		    <p @click="sup">超级会员问题</p>
		    <img src="../../assets/img/li/search_item_cat_next.png" alt="">
		</div>
		<div class="bz-chunk">
		    <p @click="user">账号问题</p>
		    <img src="../../assets/img/li/search_item_cat_next.png" alt="">
		</div>
		<div class="bz-chunk">
		    <p @click="buy">充值或购买问题</p>
		    <img src="../../assets/img/li/search_item_cat_next.png" alt="">
		</div>
		<div class="bz-chunk">
		    <p @click="loop">播放问题</p>
		    <img src="../../assets/img/li/search_item_cat_next.png" alt="">
		</div>
		<div class="bz-chunk">
		    <p @click="elses">其他使用问题</p>
		    <img src="../../assets/img/li/search_item_cat_next.png" alt="">
		</div>
		<div class="service">
		    <img src="../../assets/img/li/bz-xinxi.jpg" alt="">
			
		    <p>联系客服 </p>
					<img src="../../assets/img/li/search_item_cat_next.png" class="intext"  alt="">
		</div>
		<div class="service">
		    <img src="../../assets/img/li/bz-dianchi.jpg" alt="">
			
		    <p>意见反馈</p>
					<img src="../../assets/img/li/search_item_cat_next.png"  class="intext"alt="">
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {}
		},
		methods:{
			sup(){
				this.$router.push({path:"sup"})
			},
			user(){
				this.$router.push({path:"user"})
			},
			buy(){
				this.$router.push({path:"buy"})
			},
			loop(){
				this.$router.push({path:"loop"})
			},
			elses(){
				this.$router.push({path:"elses"})
			},
		}
	}
</script>

<style scoped="scoped">
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
