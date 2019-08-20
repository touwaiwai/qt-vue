<template>
	 <!-- header部分头部 -->
	<div class="sz-box">
	    <header>
			<router-link to="/mine">
	        <img class="one" src="../assets/img/li/otherpay_back.png" alt="">
	        </router-link>
			<h2>设置</h2>
	    </header>
	
	
	    <div class="sz-chunk" @click="goset">
	        <p>修改个人资料</p>
	        <div class="sz-sbox">
	            <img id="sz-tx" src="../assets/img/li/sz-touwaiwai.jpg" alt="">
	            <img class="sz-jt" src="../assets/img/li/search_item_cat_next.png" alt="">
	        </div>
	    </div>
	    <div class="sz-chunk mtop mbttom">
	        <p>账号和绑定设置</p>
	        <img src="../assets/img/li/search_item_cat_next.png" alt="">
	    </div>
	
	
	    <div class="sz-chunk">
	        <p>在线播放音质</p>
	        <div class="sz-sbox">
	            <span>智能选择</span>
	            <img class="sz-jt" src="../assets/img/li/search_item_cat_next.png" alt="">
	        </div>
	    </div>
	    <div class="sz-chunk">
	        <p>下载音质设置</p>
	        <div class="sz-sbox">
	            <span>智能选择</span>
	            <img class="sz-jt" src="../assets/img/li/search_item_cat_next.png" alt="">
	        </div>
	    </div>
	
	
	    <div class="sz-chunk anniu">
	        <p>使用2G/3G/4G播放</p>
	        <img src="../assets/img/li/sz-baian.jpg" alt="">
	    </div>
	    <div class="sz-chunk anniu">
	        <p>使用2G/3G/4G下载</p>
	        <img src="../assets/img/li/sz-baian.jpg" alt="">
	    </div>
	    <div class="sz-chunk anniu">
	        <p>打开应用后自动播放</p>
	        <img src="../assets/img/li/sz-baian.jpg" alt="">
	    </div>
	
	    <div class="sz-chunk mtop">
	        <p>清除缓存</p>
	        <img src="../assets/img/li/search_item_cat_next.png" alt="">
	    </div>
	
	
	    <div class="sz-chunk update">
	        <div class="matter">
	            <p>内容更新提示</p>
	            <span>已收藏的内容有更新时在通知栏提示</span>
	        </div>
	        <img src="../assets/img/li/sz-red.jpg" alt="">
	    </div>
	
	    
	    <div class="sz-chunk">
	        <p>检查更新</p>
	        <div class="sz-sbox">
	            <span>已是最新</span>
	            <img class="sz-jt" src="../assets/img/li/search_item_cat_next.png" alt="">
	        </div>
	    </div>
	    <div class="sz-chunk mtop">
	        <p>法律文件</p>
	        <img src="../assets/img/li/search_item_cat_next.png" alt="">
	    </div>
	    <div class="sz-chunk">
	        <p>隐私政策</p>
	        <img src="../assets/img/li/search_item_cat_next.png" alt="">
	    </div>
	    <div class="sz-chunk">
	        <p>关于蜻蜓FM</p>
	        <img src="../assets/img/li/search_item_cat_next.png" alt="">
	    </div>
	    <div class="sz-chunk">
	        <p>推荐蜻蜓FM给朋友</p>
	        <img src="../assets/img/li/search_item_cat_next.png" alt="">
	    </div>
	    <div class="sz-foot">
	        <p>退出登录</p>
	    </div>
	</div>
</template>

<script>
	export default{
		methods:{
			goset(){
				this.$router.push("geren");
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
	  height: .54rem;
	  width: 100%;
	  height: .5rem;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  background: #ffffff;
	margin-top: 1.5px;
	
	
	}
	.sz-chunk p{
	  font-size: .2rem;
	  color: #666666;
	  padding-left: .32rem;
	
	}
	.sz-sbox{
	  display: flex;
	  justify-content: flex-end;
	  align-items: center;
	}
	.sz-chunk img{
	  width: .13rem;
	  height: .13rem;
	  padding-right: .19rem;
	}
	#sz-tx{
	  width: .39rem;
	  height: .39rem;
	  padding-right: .05rem;
	}
	
	.mtop{
	  margin-top: .09rem;
	}
	.mbttom{
	  margin-bottom: .09rem;
	}
	.sz-sbox span{
	  font-size: .17rem;
	  color: #9c9c9c;
	  padding-right: .05rem;
	}
	
	.anniu img{
	   width: .42rem;
	   height: .26rem;
	}
	.update{
	  height: .74rem
	}
	
	.sz-box .update img{
	  width: .42rem;
	   height: .26rem;
	
	}
	
	.matter{
	  flex-direction: column;
	  justify-content: flex-start;
	  align-items: flex-start;
	}
	.matter span{
	  font-size: .15rem;
	  color: #9b9b9b;
	  padding-left: .32rem;
	display: block;
	}
	
	
	.sz-foot{
	  height: .6rem;
	  margin-top: .17rem;
	  background: #ffffff;
	}
	.sz-foot p{
	  font-size: .18rem;
	  color: #f25b60;
	  line-height: .6rem;
	  text-align: center;
	  white-space: 2px;
	}
	
</style>
